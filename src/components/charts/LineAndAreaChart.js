import React from 'react';
import ReactApexChart from 'react-apexcharts';
class LineAndAreaChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'TEAM A',
                type: 'area',
                data: []
            }, {
                name: 'TEAM B',
                type: 'line',
                data: []
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                },
                stroke: {
                    curve: 'smooth'
                },
                fill: {
                    type: 'solid',
                    opacity: [0.35, 1],
                },
                labels: [],
                markers: {
                    size: 0
                },
                yaxis: [
                    {
                        title: {
                            text: 'Series A',
                        },
                    },
                    {
                        opposite: true,
                        title: {
                            text: 'Series B',
                        },
                    },
                ],
                xaxis: {
                    type: 'datetime'
                  },
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        
                    }
                }
            },


        };
    }
    async componentDidUpdate(PrevProps, prevState) {
        if (PrevProps.temperature_data !== this.props.temperature_data) {
            let date = [];
            let temperature = [];
            let river = [];
            this.props.temperature_data.forEach(element => {
                date.push(element.CreatedAt);
                if(element.temperature.toFixed(2) > 100) temperature.push((element.temperature.toFixed(2) - 273.15).toFixed(2));
                else temperature.push(element.temperature.toFixed(2));
            });
            this.props.river_data.forEach(element =>{
                river.push(element.level);
            })
            this.setState({ options: { labels: date } });
            this.setState(this.state.series[0]['data'] = temperature)
            this.setState(this.state.series[1]['data'] = river)
        }
    }


    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>
        );
    }
}
export default LineAndAreaChart;