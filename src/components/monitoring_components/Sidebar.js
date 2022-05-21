import React, { Component } from 'react';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';
import { BrowserView } from 'react-device-detect';
class Sidebar extends Component {


  constructor(props) {
    super(props)
    this.state = {
    }
  }
  showAlert(value) {
    this.props.onClick(value)
  }

  loopNext() {
    document.querySelector('#sliderWrapper').scrollTo(1000, 1000);
  }

  loopPrev() {
    document.querySelector('#sliderWrapper').scrollTo(0, 0);
  }

  render() {
    return (
      <div id='imageSlider'>
        <BrowserView>
          <div id="prev" onMouseOver={this.loopPrev}>
            <ArrowLeft />
          </div>
          <div id="next" onMouseOver={this.loopNext}>
            <ArrowRight />
          </div>
        </BrowserView>


        <div className="sidebar" id='sliderWrapper'>
          {this.props.stations.map((station, index) => <button key={index} onClick={() => this.showAlert(station.code_name)} type="button" className="btn btn-outline-primary">{station.name}</button>)}
        </div>

      </div>
    );
  }
}

export default Sidebar;