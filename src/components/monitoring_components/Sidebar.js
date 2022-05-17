import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';


class Sidebar extends Component {


  constructor(props) {
    super(props)
    this.state = {
    }
  }
  showAlert(value) {
    this.props.onClick(value)
  }

  render() {
    return (
      <div className='sidebar'>
        <ListGroup as="ul">
          {this.props.stations.map((station, index) => <ListGroup.Item action key={index} onClick={() => this.showAlert(station.code_name)}>{station.name}</ListGroup.Item>)}
        </ListGroup>

      </div>

    );
  }
}

export default Sidebar;