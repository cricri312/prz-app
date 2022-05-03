import React, { Component } from 'react';



class News extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <div className='News'>
        {this.props.test}
        <h5>News:{this.props.station_name}</h5>
        
      </div>

    );
  }
}

export default News;