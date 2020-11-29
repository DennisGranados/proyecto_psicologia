import React, { Component } from "react";
import "../App.css";
import Footer from "./Footer";
import firebase from "firebase/app";
import "firebase/auth";
import ModalReact from "./ModalMessage";
import UserProfile from "./User";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isMessageOpen: false,
      bodyMsg: "",
      titleMsg: "",
    };
    this.loginFunction = this.loginFunction.bind(this);
    this.ChangeEmail = this.ChangeEmail.bind(this);
    this.ChangePassword = this.ChangePassword.bind(this);
    this.disposeMessage = this.disposeMessage.bind(this);
    this.showMessage = this.showMessage.bind(this);
  }

  disposeMessage() {
    this.setState({ isMessageOpen: false });
  }

  showMessage(title, body) {
    this.setState({ isMessageOpen: true, titleMsg: title, bodyMsg: body });
  }

  referenceContext(context) {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function () {
        firebase
          .auth()
          .signInWithEmailAndPassword(
            context.state.email,
            context.state.password
          )
          .then(function (user) {
            context.showMessage(
              "Ingreso exitoso",
              "Ha ingresado de forma exitosa  "
            );
            firebase
              .database()
              .ref("/users/admin/" + user.user.uid)
              .once("value")
              .then(function (snapshot) {
                if (snapshot.exists()) {
                  var u = snapshot.val();
                  UserProfile.generateSessionId();
                  UserProfile.setName(u.name);
                  UserProfile.setEmail(user.user.email);
                  UserProfile.setStatus("A");
                 // context.props.onChangeUser(UserProfile.getUser());
                  window.location.href = "/schedule";
                } else {
                  firebase
                    .database()
                    .ref("/users/applicant/" + user.user.uid)
                    .once("value")
                    .then(function (snapshot) {
                      if (snapshot.exists()) {
                        var u = snapshot.val();
                        UserProfile.generateSessionId();
                        UserProfile.setName(u.name);
                        UserProfile.setCareer(u.career);
                        UserProfile.setIdStudent(u.idStudent);
                        UserProfile.setEmail(user.user.email);
                        UserProfile.setStatus("B");
                      //  context.props.onChangeUser(UserProfile.getUser());
                        window.location.href = "/schedule";
                      } else {
                        context.showMessage(
                          "Ingreso exitoso",
                          "Ha ingresado de forma exitosa  "
                        );
                      }
                    });
                }
              });
          })
          .catch(function (error) {
            context.showMessage(
              "Ingreso fallido",
              "Ha ingresado datos incorrectos o un usuario inexistente"
            );
            var errorCode = error.code;
            var errorMessage = error.message;
          });
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  loginFunction(event) {
    event.preventDefault();
    this.referenceContext(this);
  }

  ChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  ChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div>
        <ModalReact
          isOpen={this.state.isMessageOpen}
          title={this.state.titleMsg}
          message={this.state.bodyMsg}
          onHide={this.disposeMessage}
        />
        <div className="Forms row">
          <div className="card col-4 Forms">
            <form onSubmit={this.loginFunction}>
              <div className="card-header">
                <h2 className="Titulos">Inicio de sesión</h2>
              </div>
              <div className="Forms card-body">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg Inputs"
                    placeholder="Correo electrónico"
                    value={this.state.email}
                    onChange={this.ChangeEmail}
                  />
                  <input
                    type="password"
                    className="form-control form-control-lg Inputs"
                    placeholder="Contraseña"
                    value={this.state.password}
                    onChange={this.ChangePassword}
                    minLength="8"
                  />
                  <div className="form-group btn-group-vertical displayCSS">
                    <input
                      type="submit"
                      className="btn Buttons ButtonsFormat"
                      value="Aceptar"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LoginForm;
