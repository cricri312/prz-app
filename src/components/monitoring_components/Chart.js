import React, { Component } from 'react';
import BasicChart from '../charts/BasicChart'
import IrregularTimelineChart from '../charts/IrregularTimelineChart';
import { UnmountClosed } from 'react-collapse';
import axios from 'axios';

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
  async getRiverMeasurments(station_name) {
    if (station_name !== '') {
      await axios.get(`https://api.rzeki.rzeszow.pl/api/river/stations/${station_name}/measurements`)
        .then(res => {
          let res_data = []
          res.data.forEach(element => {
            //res_data.push({x:element.CreatedAt,y:element.level})
            res_data.push([element.CreatedAt, element.level]);
          });
          this.setState({ dataSet: res_data })
        }).catch(err => {
          console.log(err);
        })
    }
  }
  async getRiverMeasurmentPredictions(station_name) {
    if (station_name !== '') {
      await axios.get(`https://api.rzeki.rzeszow.pl/api/river/stations/${station_name}/predictions`)
        .then(res => {
          let res_data = []
          res.data.forEach(element => {
            //res_data.push({x:element.prediction_time,y:element.level})
            res_data.push([element.prediction_time, (element.level).toFixed(2)]);
          });
          // this.setState(this.state.dataSet = res_data)
          this.setState({ riverPrediction: res_data })
        }).catch(err => {
          console.log(err);
        })
    }
  }
  async componentDidUpdate(PrevProps, prevState) {
    if ((this.props.station !== PrevProps.station) || (this.props.end_date !== PrevProps.end_date)) {
      let station_measurments = await this.getStationMeasurments(this.props.station, this.props.end_date);
      await this.getRiverMeasurments(this.props.station);
      await this.getRiverMeasurmentPredictions(this.props.station);
      let x = this.state.dataSet;
      let y = this.state.riverPrediction;
      let charts_data = [];
      charts_data.push(x);
      charts_data.push(y);
      this.setState({ charts_data: charts_data })
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
          <IrregularTimelineChart charts_data={this.state.charts_data} chart_title={'Actual and Prediction'}

          />
        </div>
      </div>

    );
  }
}

export default Chart;