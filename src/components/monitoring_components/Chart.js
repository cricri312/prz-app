import React, { Component } from 'react';
import Charts from '../Charts'
import axios from 'axios';

class Chart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      test_data: [],
    }
  }

  async getStationMeasurments(station_name,end_date='2022-03-02') {
    if(station_name !== '' && end_date !== ''){
      await axios.get(`https://api.rzeki.rzeszow.pl/api/weather/stations/${station_name}/measurements?startDate=2022-03-01T06:22:03Z&stopDate=${end_date}T06:22:03Z`)
      .then(res => {
        console.log(res.data);
        this.setState({ test_data: res.data })
      }).catch(err => {
        console.log(err);
      })
    }
    
  }
  async componentDidUpdate(PrevProps, prevState) {
    if ((this.props.station !== PrevProps.station) || (this.props.end_date !== PrevProps.end_date)) {
     await this.getStationMeasurments(this.props.station,this.props.end_date);
    }
  }

  render() {
    return (
      <div className='chart'>
        <h3>CHARTS</h3>
        <div className="chart-data">
          {this.props.station}
          <Charts charts_data={this.state.test_data}/>
        </div>
      </div>

    );
  }
}

export default Chart;