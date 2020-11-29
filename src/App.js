import "./App.css";
import React, { Component } from "react";
import Navegator from "./Componentes/NavBar";
import UserProfile from "./Componentes/User";
import firebase from "firebase/app";
import "firebase/auth";

class App extends Component {
  constructor() {
    super();
    this.state = { user: UserProfile.getUser() };
    this.onChangeUser = this.onChangeUser.bind(this);
    let context = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        context.setState({ user: UserProfile.getUser() });
      } else {
        // No user is signed in.
      }
    });
  }

  onChangeUser(user) {
    this.setState({ user: user });
  }

  render() {
    return (
      <div className="container-fluid">
        <Navegator user={this.state.user} onChangeUser={this.setUser}/>
      </div>
    );
  }
}

export default App;
