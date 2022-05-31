import React, { Component } from 'react';
import BasicChart from '../charts/BasicChart'
import LineAndAreaChart from '../charts/LineAndAreaChart'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Chart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      temperature_data: [],
      river_data:[]
    }
  }
  
  async getStationMeasurments(station_name,end_date='2022-03-02') {
    if(station_name !== '' && end_date !== ''){
      await axios.get(`https://api.rzeki.rzeszow.pl/api/weather/stations/${station_name}/measurements?startDate=2022-03-01T06:22:03Z&stopDate=${end_date}T06:22:03Z`)
      .then(res => {
        let res_data = []
        res.data.forEach((element,index) => {
          if(index % 30 === 0 ) res_data.push(element)
        });
        this.setState({ temperature_data: res_data })
      }).catch(err => {
        console.log(err);
      })
    }
    
  }
  async getRiverMeasurments(station_name) {
    if(station_name !== ''){
      await axios.get(`https://api.rzeki.rzeszow.pl/api/river/stations/${station_name}/measurements`)
      .then(res => {
        this.setState({ river_data: res.data })
      }).catch(err => {
        console.log(err);
      })
    }
    
  }
  async componentDidUpdate(PrevProps, prevState) {
    if ((this.props.station !== PrevProps.station) || (this.props.end_date !== PrevProps.end_date)) {
     await this.getStationMeasurments(this.props.station,this.props.end_date);
     await this.getRiverMeasurments(this.props.station);
    }
  }

  render() {
    return (
      <div className='chart'>
        <h3>CHARTS</h3>
        <div className="chart-data">
          {this.props.station}
          <BasicChart charts_data={this.state.temperature_data} chart_title={'Temperature'} chart_data_label={'Temperature'}/>
          {/* <LineAndAreaChart temperature_data = {this.state.temperature_data} river_data = {this.state.river_data} /> */}
        </div>
      </div>

    );
  }
}

export default Chart;