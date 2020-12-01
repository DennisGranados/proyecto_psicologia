import React, { Component } from "react";
import FormLogin from "../Components/Forms/FormLogin";
import FormRegister from "../Components/Forms/FormRegister";
import Home from "./Home";
import Footer from "../Components/Inc/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "../Components/Inc/Header";
import NavLink from "./NavLink";
import Schedule from "../Components/CalendarComponents/Schedule";
import UserProfile from "./User";
import MyAppointments from "./AppointmentComponents/MyAppointments";

class Navegator extends Component {
  constructor() {
    super();
  }

  render() {
    function verifyAdmin(user) {
      if (user === null) {
        return false;
      } else {
        if ("A" === user.status) {
          return true;
        } else {
          return false;
        }
      }
    }

    function verifyApplicant(user) {
      if (user === null) {
        return false;
      } else {
        if ("B" === user.status || "A" === user.status) {
          return true;
        } else {
          return false;
        }
      }
    }

    function ConditionalRedirect(user, location) {
      if (user !== null) {
        return (
          <Redirect
            to={{
              pathname: "/schedule",
              state: { from: location },
            }}
          />
        );
      } else {
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }
    }

    function ApplicantRoute({ children, ...rest }) {
      var user = UserProfile.getUser();
      return (
        <Route
          {...rest}
          render={({ location }) =>
            verifyApplicant(user)
              ? children
              : ConditionalRedirect(user, location)
          }
        />
      );
    }

    function AdminRoute({ children, ...rest }) {
      var user = UserProfile.getUser();
      return (
        <Route
          {...rest}
          render={({ location }) =>
            verifyAdmin(user) ? children : ConditionalRedirect(user, location)
          }
        />
      );
    }

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
              <NavLink user={this.props.user} onLogout={this.props.onLogout} />
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <FormLogin />
            </Route>
            <Route exact path="/registro">
              <FormRegister />
            </Route>
            <ApplicantRoute exact path="/schedule">
              <Schedule user={this.props.user} />
            </ApplicantRoute>
            <ApplicantRoute exact path="/myAppointments">
              <MyAppointments user={this.props.user} />
            </ApplicantRoute>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Navegator;
