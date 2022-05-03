import React, { Component } from 'react';



class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      station:[]
    }
  }

  render() {
    return (
      <div className='sidebar'>
        
      <ul> 
        <li>{this.props.stations.map(item => (<span>{item.name}</span>))}</li>
      </ul>
    </div>

    );
  }
}

export default Sidebar;