import React, { Component } from "react";

class Dia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date:
        this.props.year + "-" + (this.props.month + 1) + "-" + this.props.day,
    };
  }

  render() {
    return (
      <div
        className="calendar-day"
        onClick={this.props.onClick}
        title={this.state.date}
      >
        {this.props.day}
      </div>
    );
  }
}

export default Dia;
