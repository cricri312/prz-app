import React, { Component } from 'react';
import Charts from '../Charts'


class Chart extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='chart'>
        <h3>CHARTS</h3>
          <div className="chart-data">
            <Charts />
          </div>
      </div>

    );
  }
}

export default Chart;