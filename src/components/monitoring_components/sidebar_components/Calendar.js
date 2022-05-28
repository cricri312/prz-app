import React, { Component } from 'react';
import DatePicker from 'react-mobile-datepicker';
import { FcCalendar } from 'react-icons/fc'

class Calendar extends Component {


  constructor(props) {
    super(props)
    this.state = {
      time: new Date(),
      is_open: false,
      start_time: new Date("2022-03-01"),
    }
  }

  openDatePicker = () => {
    this.setState({ is_open: true });
  }

  handleSelect = (time) => {
    const getTime = this.dateFormat(time)
    this.setState({ is_open: false})
    this.props.datePicker(getTime);
    
  }
  handleCancel = () => {
    this.setState({ is_open: false });
  }
  dateFormat = (time) => {
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const monthResult = month < 10 ? '0' + month : month;
    const dayResult = day < 10 ? '0' + day : day;
    return year + '-' + monthResult + '-' + dayResult
  }
  render() {
    return (
      <div className='sidebar-calendar'>
        <div>
          <FcCalendar size={33} style={{ cursor: "pointer" }} onClick={this.openDatePicker} />End Date
        </div>
        <DatePicker
          value={this.state.time}
          isOpen={this.state.is_open}
          onSelect={this.handleSelect}
          onCancel={this.handleCancel}
          theme="default"
          confirmText="Ok"
          cancelText="Cancel"
          min={this.state.start_time}
        />
      </div>
    );
  }
}

export default Calendar;