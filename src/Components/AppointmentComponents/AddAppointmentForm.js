import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import moment from "moment";
import momentTimeZome from "moment-timezone";
import ModalMessage from "../Modals/ModalMessage";

class AddAppointmentForm extends Component {
  constructor() {
    super();
    this.ChangeDetails = this.ChangeDetails.bind(this);
    this.ChangeTime = this.ChangeTime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.disposeMessage = this.disposeMessage.bind(this);
    this.showMessage = this.showMessage.bind(this);
    this.ConfirmMessage = this.ConfirmMessage.bind(this);
    this.state = {
      date: null,
      time: "00:00",
      details: "",
      daysName: {
        1: "monday",
        2: "tuesday",
        3: "wednesday",
        4: "thursday",
        5: "friday",
      },
      isMessageOpen: false,
      titleMsg: "",
      bodyMsg: "",
      typeDispose: null,
    };
  }

  ChangeTime(event) {
    let time = event.target.value;
    time = time.split(":");
    this.setState({ time: time[0] + ":" + "00" });
  }

  ChangeDetails(event) {
    this.setState({ details: event.target.value });
  }

  PatchDays(day) {
    if (day < 10) {
      return "0" + day;
    } else {
      return day;
    }
  }

  onSubmit(event) {
    event.preventDefault();
    let context = this;
    if (this.state.time && this.state.date) {
      let d = new Date(this.state.date);
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        firebase
          .database()
          .ref("/service-config")
          .once("value")
          .then(function (snapshot) {
            if (snapshot.exists()) {
              var u = snapshot.val();
              let daySchedule = u[context.state.daysName[d.getDay()]];
              var time = moment(context.state.time, "hh:mm");
              var dayScheduleStart = moment(daySchedule["start"], "hh:mm");
              var dayScheduleEnd = moment(daySchedule["end"], "hh:mm");
              if (
                time.isBefore(dayScheduleEnd) &&
                time.isSameOrAfter(dayScheduleStart)
              ) {
                var timeString = context.state.date + " " + context.state.time;
                time = moment(timeString, "YYYY-MM-DD HH:mm").format(
                  "YYYYMMDDHHmm"
                );
                firebase
                  .database()
                  .ref("/appointments/" + time)
                  .once("value")
                  .then(function (snapshot) {
                    if (snapshot.exists()) {
                      context.showMessage(
                        "No disponible",
                        "Este espacio ya se encuentra reservado",
                        context.disposeMessage
                      );
                    } else {
                      firebase
                        .database()
                        .ref("/appointments/" + time)
                        .set({
                          appointmentDate: timeString,
                          creationDate: momentTimeZome()
                            .tz("America/Costa_Rica")
                            .format("YYYY-MM-DD HH:mm"),
                          details: context.state.details,
                          idApplicant: firebase.auth().currentUser.uid,
                          isCancel: false,
                          isConfirmed: false,
                        });
                      context.showMessage(
                        "Éxito",
                        "Se ha reservado su espacio y se ha agregado a tu apartado Mi solicitudes",
                        context.ConfirmMessage
                      );
                    }
                  });
              } else {
                context.showMessage(
                  "No disponible",
                  "No existe servicio a esta hora",
                  context.disposeMessage
                );
              }
            } else {
              console.log("No hay horarios");
            }
          });
      }
    }
  }

  disposeMessage() {
    this.setState({ isMessageOpen: false });
  }

  showMessage(title, body, typeMethod) {
    this.setState({
      isMessageOpen: true,
      titleMsg: title,
      bodyMsg: body,
      typeDispose: typeMethod,
    });
  }

  ConfirmMessage() {
    this.setState({ isMessageOpen: false });
    window.location.href = "/schedule";
  }

  render() {
    this.state.date = this.props.date;
    return (
      <div className="col-6 m-auto">
        <ModalMessage
          isOpen={this.state.isMessageOpen}
          title={this.state.titleMsg}
          message={this.state.bodyMsg}
          onHide={this.state.typeDispose}
        />
        <form
          id="form-create-appointment"
          name="formCreateAppointment"
          onSubmit={this.onSubmit}
        >
          <div className="form-group">
            <label for="date">Fecha de cita</label>
            <input
              name="dateAppointment"
              type="date"
              className="form-control"
              id="date-appointment"
              value={this.state.date}
              disabled
            />
          </div>
          <div className="form-group">
            <label for="date">Hora de cita</label>
            <input
              name="timeAppointment"
              type="time"
              className="form-control"
              id="time-appointment"
              value={this.state.time}
              onChange={this.ChangeTime}
            />
          </div>
          <div className="form-group">
            <label for="detailsAppointment">Detalles</label>
            <input
              name="detailsAppointment"
              type="text"
              className="form-control"
              id="details-appointment"
              aria-describedby="detailHelp"
              onChange={this.ChangeDetails}
              value={this.state.details}
            />
            <small id="detailHelp" className="form-text text-muted">
              Puede agregar detalles o dejar el espacio vacio.
            </small>
          </div>
          <div className="tc">
            <input type="submit" className="Buttons btn mr-3" value="Agregar" />
            <input
              type="button"
              className="Buttons btn"
              onClick={this.props.disposeMethod}
              value="Cancelar"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddAppointmentForm;
