import React, { Component } from "react";
import Day from "./Day";
import ColumnBreak from "./ColumnBreak";
import Calendar from "calendar";
import ColumnTitle from "./ColumnTitle";
import NonDay from "./NonDay";
import BackwardArrow from "./BackwardArrow";
import ForwardArrow from "./ForwardArrow";
import NavCalendar from "./NavCalendar";
import firebase from "firebase/app";
import "firebase/auth";
import AddAppointmentForm from "../AppointmentComponents/AddAppointmentForm";

class Calendario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      days: [],
      months: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      addMessageOpen: false,
      onAdd: false,
      date: null,
    };
    this.BackMonth = this.BackMonth.bind(this);
    this.ForwardMonth = this.ForwardMonth.bind(this);
    this.disposeAddAppointment = this.disposeAddAppointment.bind(this);
    this.showAddAppointment = this.showAddAppointment.bind(this);
  }

  BackMonth() {
    if (this.state.month === 0) {
      this.setState({
        year: this.state.year - 1,
        month: 11,
      });
    } else {
      this.setState({
        month: this.state.month - 1,
      });
    }
  }

  ForwardMonth() {
    if (this.state.month === 11) {
      this.setState({
        year: this.state.year + 1,
        month: 0,
      });
    } else {
      this.setState({
        month: this.state.month + 1,
      });
    }
  }

  PatchDays(day) {
    if (day < 10) {
      return "0" + day;
    } else {
      return day;
    }
  }

  disposeAddAppointment() {
    this.setState({ onAdd: false });
  }

  showAddAppointment(event) {
    this.setState({ date: event.target.title, onAdd: true });
  }

  render() {
    let content;
    if (this.state.onAdd) {
      content = (
        <AddAppointmentForm
          date={this.state.date}
          disposeMethod={this.disposeAddAppointment}
        />
      );
    } else {
      let days = [];
      let cal = new Calendar.Calendar(1);
      let m = cal.monthDays(this.state.year, this.state.month);
      let nameDays = [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo",
      ];
      days = days.concat(
        nameDays.map((title) => <ColumnTitle title={title} />)
      );
      days.push(<ColumnBreak />);
      for (let i = 0; i < m.length; i++) {
        let daysTemp = m[i].map((day) =>
          day !== 0 ? (
            <Day
              day={this.PatchDays(day)}
              year={this.state.year}
              month={this.state.month}
              onClick={this.showAddAppointment}
            />
          ) : (
            <NonDay />
          )
        );
        daysTemp.push(<ColumnBreak />);
        days = days.concat(daysTemp);
      }

      this.state.days = days;

      content = (
        <div>
          {this.props.user.status === "A" ? <NavCalendar /> : ""}
          <div className="row calendar">
            <p className="calendar-month m-auto">
              {this.state.months[this.state.month]}{" "}
              <span className="float-right mr-3">{this.state.year}</span>
            </p>
            <div className="w-100"></div>
            <div className="back-arrow col-1" onClick={this.BackMonth}>
              <BackwardArrow />
            </div>
            <div className="col-10 text-align-center">{this.state.days}</div>
            <div className="forward-arrow col-1" onClick={this.ForwardMonth}>
              <ForwardArrow />
            </div>
          </div>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

export default Calendario;
