import React, { Component } from "react";

class Dia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.year + "-" + this.props.month + "-" + this.props.day,
    };
    this.ShowAddAppointment = this.ShowAddAppointment.bind(this);
  }

  ShowAddAppointment() {
    this.props.addAppointment(this.state.date);
  }

  render() {
    return (
      <div className="calendar-day" onClick={this.ShowAddAppointment}>
        {this.props.day}
      </div>
    );
  }
}

export default Dia;
