import React, { Component } from "react";
import Moment from "moment";

class AppointmentCard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="card col-3 tc m-2">
        <div className="card-body">
          <h5 className="card-title">
            Fecha cita: &nbsp;
            {Moment(this.props.appointmentDate, "YYYY-MM-DD HH:mm").format(
              "DD/MM/YYYY HH:mm"
            )}
          </h5>
          <p className="card-text">{this.props.details}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Fecha de creación:{" "}
            {Moment(this.props.creationDate, "YYYY-MM-DD HH:mm").format(
              "DD/MM/YYYY HH:mm"
            )}
          </li>
        </ul>
        <div className="card-body tc">
          <button
            id={this.props.id}
            className="btn Buttons"
            onClick={this.props.cancelMethod}
            disabled={this.props.isCancel}
          >
            Cancelar cita
          </button>
        </div>
      </div>
    );
  }
}

export default AppointmentCard;
