import React, { Component } from "react";
import FormularioLogin from "./FormularioLogin";
import FormularioRegistro from "./FormularioRegistro";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import Header from "./Header";
import NavLink from "./NavLink";
import Schedule from "./Schedule";
import UserProfile from "./User";

class Navegator extends Component {
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
              <NavLink
                user={this.props.user}
                //onChangeUser={this.props.onChangeUser}
                onLogout={this.props.onLogout}
              />
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <FormularioLogin />
            </Route>
            <Route exact path="/registro">
              <FormularioRegistro />
            </Route>
            <ApplicantRoute exact path="/schedule">
              <Schedule />
            </ApplicantRoute>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Navegator;
