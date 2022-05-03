import React, { Component} from 'react';
import axios from 'axios';
import '../css/Monitoring.css';
import Sidebar from './monitoring_components/Sidebar';

class Monitoring extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stations: [],
        }
    }

    componentDidMount() {
        axios.get('https://api.rzeki.rzeszow.pl/api/weather/stations/',{'Access-Control-Allow-Origin':'*'})
            .then(res => {
                const stations = res.data;
                this.setState({ stations });
            }).catch(err=>{
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <div className="monitoring" >
                    <Sidebar stations={this.state.stations} />
                </div>
            </div>

        );
    }
}

export default Monitoring;