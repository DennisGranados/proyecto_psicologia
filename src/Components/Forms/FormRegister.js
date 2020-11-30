import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import ModalReact from "../Modals/ModalMessage";
import UserProfile from "../User";

class RegistroLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      career: "",
      gender: "",
      idStudent: "",
      isMessageOpen: false,
      bodyMsg: "",
      titleMsg: "",
      genderList: [],
      careerList: [],
    };

    this.registerFunction = this.registerFunction.bind(this);
    this.ChangeEmail = this.ChangeEmail.bind(this);
    this.ChangePassword = this.ChangePassword.bind(this);
    this.ChangeName = this.ChangeName.bind(this);
    this.ChangeCareer = this.ChangeCareer.bind(this);
    this.ChangeGender = this.ChangeGender.bind(this);
    this.ChangeIdStudent = this.ChangeIdStudent.bind(this);
    this.referenceContext = this.referenceContext.bind(this);
    this.disposeMessage = this.disposeMessage.bind(this);
    this.getGender = this.getGender.bind(this);
    this.getCareer = this.getCareer.bind(this);
    this.getGender(this);
    this.getCareer(this);
  }

  getGender(context) {
    firebase
      .database()
      .ref("/users/qualifying/gender")
      .once("value")
      .then(function (snapshot) {
        var temp = Object.values(snapshot.val()).map((gender) => (
          <option value={gender}>{gender}</option>
        ));
        context.setState({ genderList: temp });
      });
  }

  getCareer(context) {
    firebase
      .database()
      .ref("/users/qualifying/career")
      .once("value")
      .then(function (snapshot) {
        var temp = Object.values(snapshot.val()).map((career) => (
          <option value={career}>{career}</option>
        ));
        context.setState({ careerList: temp });
      });
  }

  /**Agregar a la base */
  /* addCareers() {
    var careerArray = {
      1:"Informática empresarial",
      2:"Recurso hídrico",
      3:"Enseñanza de la matemática",
      4:"Turismo ecologico",
      5:"Trabajo social",
      6:"Laboratorista quimico",
      7:"Enseñanza de las ciencias naturales",
      8:"Funcionario UCR"
  };
      firebase.database().ref("/users/qualifying/career").set(careerArray);    
  }*/

  disposeMessage() {
    this.setState({ isMessageOpen: false });
  }

  showMessage(title, body) {
    this.setState({ isMessageOpen: true, titleMsg: title, bodyMsg: body });
  }

  referenceContext(context) {
    if (context.state.career !== "" && context.state.gender !== "") {
      if (context.state.career === "Funcionario UCR") {
        context.setState({ idStudent: "" });
      } else {
        if (context.state.idStudent === "") {
          context.showMessage(
            "Registro fallido",
            "El carné no puede estar vacio"
          );
          return;
        }
      }
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        context.state.email,
        context.state.password
      )
      .then(function (user) {
        console.log(user);
        firebase
          .database()
          .ref("users/applicant/" + user.user.uid)
          .set({
            name: context.state.name,
            gender: context.state.gender,
            career: context.state.career,
            idStudent: context.state.idStudent,
          });
        console.log(user);
        context.showMessage(
          "Registro exitoso",
          "Su usuario ya ha sido creado de forma exitosa Ya puede ingresar al sistema"
        );
        window.location.href = "/login";
      })
      .catch(function (error) {
        context.showMessage(
          "Registro fallido",
          "Ha ingresado datos incorrectos, vacios o el usuario ya existe"
        );
        //var errorCode = error.code;
        //var errorMessage = error.message;
      });
  }

  registerFunction(event) {
    event.preventDefault();
    this.referenceContext(this);
  }

  ChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  ChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  ChangeName(event) {
    this.setState({ name: event.target.value });
  }

  ChangeIdStudent(event) {
    this.setState({ idStudent: event.target.value });
  }

  ChangeCareer(event) {
    if (event.target.value !== "default") {
      if (event.target.value === "Funcionario UCR") {
        document.getElementById("inputCarne").disabled = true;
        document.getElementById("inputCarne").value = "";
        this.setState({ career: event.target.value });
      } else {
        document.getElementById("inputCarne").disabled = false;
        this.setState({ career: event.target.value });
      }
    } else {
      this.setState({ career: "" });
    }
  }

  ChangeGender(event) {
    if (event.target.value !== "default") {
      this.setState({ gender: event.target.value });
    } else {
      this.setState({ gender: "" });
    }
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
            <form id="registerForm" onSubmit={this.registerFunction}>
              <div className="card-header">
                <h2 className="Titulos">Registro de usuario</h2>
              </div>
              <div className="Forms card-body">
                <div className="form-group">
                  <input
                    type="text"
                    id="inputName"
                    className="form-control form-control-lg Inputs"
                    placeholder="Nombre completo"
                    value={this.state.name}
                    onChange={this.ChangeName}
                    required
                  />
                  <input
                    type="email"
                    id="inputMail"
                    className="form-control form-control-lg Inputs"
                    placeholder="Correo electrónico"
                    value={this.state.email}
                    onChange={this.ChangeEmail}
                    required
                  />
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control form-control-lg Inputs"
                    placeholder="Contraseña"
                    minLength="8"
                    value={this.state.password}
                    onChange={this.ChangePassword}
                    required
                  />
                  <select
                    className="custom-select buttonList"
                    id="inputCarrera"
                    onChange={this.ChangeCareer}
                  >
                    <option selected value={"default"}>
                      Seleccione una carrera
                    </option>
                    {this.state.careerList}
                  </select>
                  <input
                    id="inputCarne"
                    type="text"
                    className="form-control form-control-lg Inputs"
                    placeholder="Carné"
                    value={this.state.idStudent}
                    onChange={this.ChangeIdStudent}
                  />
                  <select
                    className="custom-select buttonList"
                    id="inputGenero"
                    onChange={this.ChangeGender}
                  >
                    <option selected value={"default"}>
                      Seleccione su género
                    </option>
                    {this.state.genderList}
                  </select>
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
      </div>
    );
  }
}

export default RegistroLogin;
