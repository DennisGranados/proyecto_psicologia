import React, { Component } from "react";
import Day from "./Day";
import ColumnBreak from "./ColumnBreak";
import Calendar from "calendar";
import ColumnTitle from "./ColumnTitle";
import NonDay from "./NonDay";
import FlechaAtras from "./FlechaAtras";
import FlechaSiguiente from "./FlechaSiguiente";
import NavegadorMenu from "./NavCalendario";
import firebase from "firebase/app";
import "firebase/auth";

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
    };
    this.BackMonth = this.BackMonth.bind(this);
    this.ForwardMonth = this.ForwardMonth.bind(this);
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

  render() {
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
    days = days.concat(nameDays.map((title) => <ColumnTitle title={title} />));
    days.push(<ColumnBreak />);
    for (let i = 0; i < m.length; i++) {
      let daysTemp = m[i].map((day) =>
        day !== 0 ? <Day day={day} /> : <NonDay />
      );
      daysTemp.push(<ColumnBreak />);
      days = days.concat(daysTemp);
    }

    this.state.days = days;

    return (
      <div>
        <NavegadorMenu />
        <div className="row calendar">
          <p className="calendar-month m-auto">{this.state.months[this.state.month]}</p>
          <div className="w-100"></div>
          <div className="back-arrow col-1" onClick={this.BackMonth}>
            <FlechaAtras />
          </div>
          <div className="col-10 text-align-center">{this.state.days}</div>
          <div className="forward-arrow col-1" onClick={this.ForwardMonth}>
            <FlechaSiguiente />
          </div>
        </div>
      </div>
    );
  }
}

export default Calendario;
