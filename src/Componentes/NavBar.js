import React, { Component } from "react";
import FormularioLogin from "./FormularioLogin";
import FormularioRegistro from "./FormularioRegistro";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import NavLink from "./NavLink";
import Schedule from "./Schedule";

class Navegator extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
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
              <NavLink user={this.props.user} />
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <FormularioLogin onChangeUser={this.onChangeUser} />
            </Route>
            <Route exact path="/registro">
              <FormularioRegistro />
            </Route>
            <Route exact path="/schedule">
              <Schedule />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Navegator;
