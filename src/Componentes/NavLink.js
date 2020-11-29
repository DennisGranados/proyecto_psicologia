import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserProfile from "./User";

class NavLink extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.user);
    let nav;
    if (this.props.user === null) {
      nav = (
        <ul className="navbar-nav">
          <li>
            <Link to="/" className="navFonts nav-link" href="#">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/login" className="navFonts nav-link" href="#">
              Inicio de sesión
            </Link>
          </li>
          <li>
            <Link to="/registro" className="navFonts nav-link" href="#">
              Registro de usuario
            </Link>
          </li>
        </ul>
      );
    } else if (this.props.user.status === "A") {
      nav = (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/schedule" className="nav-link" href="#">
                  Calendario <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" href="#">
                  Estadisticas <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="form-inline my-2 my-lg-0 float-right">
            <input
              className="form-control mr-sm-2 tc"
              placeholder={this.props.user.name}
              disabled
            />
            <button
              className="btn btn Buttons my-2 my-sm-0"
              type="button"
              onClick={this.props.onLogout}
            >
              Desconectarse
            </button>
          </div>
        </div>
      );
    } else {
      nav = (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/schedule" className="nav-link" href="#">
                  Calendario <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" href="#">
                  Mis solicitudes <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="form-inline my-2 my-lg-0 float-right">
            <input
              className="form-control mr-sm-2 tc"
              placeholder={this.props.user.name}
              disabled
            />
            <button
              className="btn btn Buttons my-2 my-sm-0"
              type="button"
              onClick={this.props.onLogout}
            >
              Desconectarse
            </button>
          </div>
        </div>
      );
    }
    return <div className="w-nav">{nav}</div>;
  }
}

export default NavLink;
