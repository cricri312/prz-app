import React, { Component } from 'react';
import axios from 'axios';
import '../css/Monitoring.css';
import Sidebar from './monitoring_components/Sidebar';
import News from './monitoring_components/News';
import ActualData from './monitoring_components/ActualData';
import Chart from './monitoring_components/Chart';

class Monitoring extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stations_get: [],
            station_name: ''
        }
    }

    componentDidMount() {
        axios.get('https://api.rzeki.rzeszow.pl/api/weather/stations/')
            .then(res => {
                const stations_get = res.data.stations;
                this.setState({ stations_get });
            }).catch(err => {
                console.log(err);
            })
    }
    onClick = (dataFromChild) => {
        this.setState({station_name:dataFromChild})
   }
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-xl-3 col-lg-3">
                            <Sidebar stations={this.state.stations_get} onClick={this.onClick} />
                        </div>
                        <div className="col-xl-9 col-lg-9">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    {/* <News station_name={this.state.station_name}/> */}
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    {/* <ActualData /> */}
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                    <Chart station={this.state.station_name}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Monitoring;