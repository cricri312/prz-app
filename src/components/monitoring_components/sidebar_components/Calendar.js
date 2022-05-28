import React, { Component } from 'react';
import DatePicker from 'react-mobile-datepicker';
import {FcCalendar} from 'react-icons/fc'
class Calendar extends Component {


  constructor(props) {
    super(props)
    this.state = {
        time: new Date(),
        is_open:false,
        time_now: ""
    }
  }

  openDatePicker = () => {
    this.setState({ is_open: true });
  }


  render() {
    return (
      <div className='sidebar-calendar'>
          <FcCalendar size={33} style={{cursor:"pointer"}} onClick={this.openDatePicker}/>
          <DatePicker
        //   value={this.state.time}
        //   isOpen={this.state.is_open}
        //   onSelect={this.handleSelect}
        //   onCancel={this.handleCancel} 
          theme="default"
          confirmText="Ok"
          cancelText="Cancel"
        />
      </div>
    );
  }
}

export default Calendar;