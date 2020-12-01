import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import LoadPage from "../LoadPage";
import AppointmentCard from "./AppointmentCard";
import ModalMessage from "../Modals/ModalMessage";

class MyAppointments extends Component {
  constructor() {
    super();
    this.state = {
      onLoad: true,
      listAppointments: [],
      isMessageOpen: false,
      titleMsg: "",
      bodyMsg: "",
    };
    this.CancelAppointment = this.CancelAppointment.bind(this);
    this.disposeMessage = this.disposeMessage.bind(this);
    this.showMessage = this.showMessage.bind(this);
    var context = this;
    var ref = firebase.database().ref("/appointments");
    ref
      .orderByChild("idApplicant")
      .equalTo(firebase.auth().currentUser.uid)
      .once("value")
      .then(function (snapshot) {
        if (snapshot.exists()) {
          let value = snapshot.val();
          for (const property in value) {
            context.state.listAppointments.push(
              <AppointmentCard
                id={property}
                appointmentDate={value[property]["appointmentDate"]}
                details={value[property]["details"]}
                creationDate={value[property]["creationDate"]}
                isCancel={value[property]["isCancel"]}
                cancelMethod={context.CancelAppointment}
              />
            );
          }
        } else {
        }
        context.setState({ onLoad: false });
      });
  }

  CancelAppointment(event) {
    var id = event.target.id;
    let context = this;
    firebase
      .database()
      .ref("/appointments/" + id)
      .once("value")
      .then(function (snapshot) {
        if (snapshot.exists()) {
          firebase
            .database()
            .ref("/appointments/" + id + "/isCancel")
            .set(true);
          context.showMessage(
            "Cita cancelada",
            "Se ha cancelado su cita con éxito"
          );
          window.location.href = "/myAppointments";
        }
      });
  }

  disposeMessage() {
    this.setState({ isMessageOpen: false });
  }

  showMessage(title, body) {
    this.setState({
      isMessageOpen: true,
      titleMsg: title,
      bodyMsg: body,
    });
  }
  render() {
    var content;
    if (this.state.onLoad) {
      content = <LoadPage />;
    } else {
      content = (
        <div className="row justify-content-around mt-3">
          <ModalMessage
            isOpen={this.state.isMessageOpen}
            title={this.state.titleMsg}
            message={this.state.bodyMsg}
            onHide={this.disposeMessage}
          />
          {this.state.listAppointments}
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

export default MyAppointments;
