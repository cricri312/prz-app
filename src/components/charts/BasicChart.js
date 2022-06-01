import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class BasicChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
          
      series: [{
        name: this.props.chart_data_label_temperature,
        type: 'area',
        data: []
      },
      {
        name: this.props.chart_data_label_precipitation,
        type: 'area',
        data: []
      }],
      options: {
        title: {
          text: 'Chart'
        },
        dataLabels: {
          enabled: false,
          enabledOnSeries: [0]
        },
        labels: [],
        xaxis: {
          type: 'datetime'
        }
      },

    };
  }
  async componentDidUpdate(PrevProps, prevState) {
    if(PrevProps.charts_data !== this.props.charts_data){
      let date= [];
      let temperature = [];
      let rain = [];
      this.props.charts_data.forEach(element => {
        date.push(element.CreatedAt);
        if(element.temperature.toFixed(2) > 100) temperature.push((element.temperature.toFixed(2) - 273.15).toFixed(2));
        else temperature.push(element.temperature.toFixed(2));
        rain.push(element.precipitation<0?1:element.precipitation)
      });
      
      this.setState({options:{labels: date,title:{text:this.props.chart_title}}});
      //this.setState({series:[{data:temperature}]});
      this.setState(this.state.series[0].data = temperature)
      this.setState(this.state.series[1].data = rain)
    }
  }


  render() {
    return (
      <div>
        <Chart options={this.state.options} series={this.state.series} type="area" height={350} />
      </div>
    );
  }
}

export default BasicChart;