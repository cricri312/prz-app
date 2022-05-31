import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class BasicChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
          
      series: [{
        name: '',
        type: 'area',
        data: []
      }],
      options: {

        title: {
          text: 'Chart'
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: [],
        xaxis: {
          type: 'datetime'
        },
        yaxis: [{
          title: {
            text: '',
          },
        
        }, {
          opposite: false,
          title: {
            text: ''
          }
        }]
      },
    


    };
  }
  async componentDidUpdate(PrevProps, prevState) {
    if(PrevProps.charts_data !== this.props.charts_data){
      let date= [];
      let temperature = [];
      this.props.charts_data.forEach(element => {
        date.push(element.CreatedAt);
        if(element.temperature.toFixed(2) > 100) temperature.push((element.temperature.toFixed(2) - 273.15).toFixed(2));
        else temperature.push(element.temperature.toFixed(2));
      });
      
      this.setState({options:{labels: date,title:{text:this.props.chart_title}}});
      this.setState({series:[{data:temperature,name:this.props.chart_data_label}]});
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