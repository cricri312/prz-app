import React, { useEffect,useState } from 'react';
import axios from 'axios';
import '../css/Monitoring.css';
import Sidebar from './monitoring_components/Sidebar';

const Monitoring = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () =>{
          try {
            const {data: response} = await axios.get('https://api.rzeki.rzeszow.pl/api/weather/stations/');
            setData(response);
          } catch (error) {
            console.error(error.message);
          }
        }
        fetchData();
      }, []);
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="monitoring" >
                <Sidebar stations={data}/>
            </div>
        </div>

    );
}

export default Monitoring;