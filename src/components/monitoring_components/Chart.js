import React, { Component } from 'react';
import BasicChart from '../charts/BasicChart'
import IrregularTimelineChart from '../charts/IrregularTimelineChart';
import { UnmountClosed } from 'react-collapse';
import axios from 'axios';
import {getData} from './../../utils/util'

class Chart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen:false,
      temperature_data: [],
      river_data: [],
      riverPrediction: [],
      dataSet: [],
      charts_data: []
    }
  }

  async getStationMeasurments(station_name, end_date = '2022-03-02') {
    if (station_name !== '' && end_date !== '') {
      await axios.get(`https://api.rzeki.rzeszow.pl/api/weather/stations/${station_name}/measurements?startDate=2022-03-01T06:22:03Z&stopDate=${end_date}T06:22:03Z`)
        .then(res => {
          let res_data = []
          res.data.forEach((element, index) => {
            if (index % 30 === 0) res_data.push(element)
          });
          this.setState({ temperature_data: res_data })
        }).catch(err => {
          console.log(err);
        })
        return 1;
    }
    return 0;
  }

  async setStateData(data,parameters,state_name){
    let result = [];
    data.data.forEach(element => {
      result.push([element[parameters[0]], (element[parameters[1]]).toFixed(2)])
    });
    this.setState({[state_name]:result})
  }

  async componentDidUpdate(PrevProps, prevState) {
    if ((this.props.station !== PrevProps.station) || (this.props.end_date !== PrevProps.end_date)) {
      let station_name = this.props.station;
      let river_url = `https://api.rzeki.rzeszow.pl/api/river/stations/${station_name}/measurements?limit=100`;
      let prediction_url = `https://api.rzeki.rzeszow.pl/api/river/stations/${station_name}/predictions?limit=100`;

      const river_data = await getData(river_url).then(response=>{return response})
      const prediction_data = await getData(prediction_url).then(response=>{return response})

      await this.setStateData(river_data,['CreatedAt','level'],'dataSet');
      await this.setStateData(prediction_data,['prediction_time','level'],'riverPrediction')
      let actual = this.state.dataSet;
      let prediction = this.state.riverPrediction;
      let charts_data = [];
      charts_data.push(actual);
      charts_data.push(prediction);
      this.setState({ charts_data: charts_data })
      let station_measurments = await this.getStationMeasurments(this.props.station, this.props.end_date);
      if(station_measurments === 1 ){this.setState({isOpen:true})}
    }
  }

  render() {
    let isOpen = this.state.isOpen
    return (
      <div className='chart'>
        <h3>CHARTS</h3>
        <div className="chart-data">
          {this.props.station}
          <UnmountClosed isOpened={isOpen}>
            <BasicChart charts_data={this.state.temperature_data} chart_title={'Temperature/Precipitation'}
              chart_data_label_temperature={'Temperature[°]'}
              chart_data_label_precipitation={'Precipitation[cm]'} />
          </UnmountClosed>
          <IrregularTimelineChart charts_data={this.state.charts_data} chart_title={'Actual and Prediction'}/>
        </div>
      </div>

    );
  }
}

export default Chart;