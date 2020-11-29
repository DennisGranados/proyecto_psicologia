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
    // this.onChangeUser = this.onChangeUser.bind(this);
    this.onLogout = this.onLogout.bind(this);
    let context = this;

    let checkLoginStatusReactSide = async () => {
      try {
        let user = await UserProfile.checkAuthStatus();
        if (user !== null) {
          context.setState({ user: UserProfile.getUser() });
        } else {
          UserProfile.deleteUser();
        }
      } catch (err) {
        UserProfile.deleteUser();
        console.log("catch | error: ", err);
      }
    };
    checkLoginStatusReactSide();
  }

  onLogout() {
    firebase.auth().signOut();
    UserProfile.deleteUser();
    this.setState({ user: null });
    window.location.href = "/login";
  }

  /*onChangeUser(user) {
    this.setState({ user: user });
  }*/

  render() {
    return (
      <div className="container-fluid">
        <Navegator
          user={this.state.user}
          // onChangeUser={this.onChangeUser}
          onLogout={this.onLogout}
        />
      </div>
    );
  }
}

export default App;
