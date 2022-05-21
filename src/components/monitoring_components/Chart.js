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

  async getStationMeasurments(station_name) {
    if(station_name !== ''){
      await axios.get(`https://api.rzeki.rzeszow.pl/api/weather/stations/${station_name}/measurements?startDate=2022-05-02T06:22:03Z&stopDate=2022-05-02T08:22:06Z`)
      .then(res => {
        this.setState({ test_data: res.data })
      }).catch(err => {
        console.log(err);
      })
    }
    
  }
  async componentDidUpdate(PrevProps, prevState) {
    if (this.props.station !== PrevProps.station) {
     await this.getStationMeasurments(this.props.station);
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