import React, { Component } from 'react';
import '../css/Home.css';
import politechnika from '../image/politechnika.png'
class Home extends Component {
    render() {
        return (
            <div className="landing-text mt-5" >
                <h1>Project created for Politechnika Rzeszowska</h1>
                <img src={politechnika} className="img-fluid" alt="Politechnika"  />
            </div>
        );
    }
}

export default Home;