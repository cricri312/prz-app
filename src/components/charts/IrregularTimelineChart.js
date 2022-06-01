import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class IrregularTimelineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data1: [],
      data2:[],
      series: [
        {
          name: "Series 1",
          data: []
        },
        {
          name: "Series 2",
          data:  []
        }
      ],
      options: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100]
          },
        },
        xaxis: {
          type: 'datetime',
          labels: {
            rotate: -15,
            rotateAlways: true,
          }
        },
        title: {
          text: 'Chart',
          align: 'left',
          offsetX: 14
        },
        tooltip: {
          shared: true
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          offsetX: -10
        }
      },
    };
  }

  componentDidUpdate(PrevProps) {
    if(PrevProps.charts_data !== this.props.charts_data){
      this.setState({options:{title:{text:this.props.chart_title,tooltip:false}}});
      this.setState({data1:this.props.charts_data[0]})
      this.setState({data2:this.props.charts_data[1]})
    }
  }



  render() {
    const series = [{
      name: "Actual River [cm]",
      data: []
    },
    {
      name: "Prediction [cm]",
      data:  []
    }
  ]
  series[0].data = this.state.data1;
  series[1].data = this.state.data2;
    return (
      <div>
        <ReactApexChart options={this.state.options} series={series} type="area" height={350} />
      </div>
    );
  }
}

export default IrregularTimelineChart;