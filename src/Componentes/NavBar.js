import React, { Component } from "react";
import FormularioLogin from "./FormularioLogin";
import FormularioRegistro from "./FormularioRegistro";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import NavLink from "./NavLink";
import UserProfile from "./User";
import Schedule from "./Schedule";
import firebase from "firebase/app";
import "firebase/auth";

class Navegator extends Component {
  constructor() {
    super();
    this.state = { user: UserProfile.getUser() };
    this.setUser = this.setUser.bind(this);
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        this.setState({ user: UserProfile.getUser() });
      } else {
        // No user is signed in.
      }
    });
  }

  setUser(user) {
    this.setState({ user: user });
  }

  render() {
    console.log(this.state.user);
    /* if (this.state.user === null) {
      if (UserProfile.getSessionId() !== null) {
        if (this.state.user.id !== UserProfile.getSessionId()) {
          this.setState({ user: UserProfile.getUser() });
        }
      }
    } else {
      if (this.state.user.id !== UserProfile.getSessionId()) {
        this.setState({ user: UserProfile.getUser() });
      }
    }*/
    return (
      <Router>
        <div>
          <Header />
          <nav
            id="nav-principal"
            className="navbar navbar-expand-lg navbar-light bg-light"
          >
            <a className="navbar-brand">Gestor de citas</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <NavLink user={this.state.user} />
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <FormularioLogin user={this.setUser} />
            </Route>
            <Route exact path="/registro">
              <FormularioRegistro />
            </Route>
            <Route exact path="/schedule">
              <Schedule />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navegator;
