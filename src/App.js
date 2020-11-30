import "./App.css";
import React, { Component } from "react";
import Navegator from "./Components/NavBar";
import UserProfile from "./Components/User";
import firebase from "firebase/app";
import "firebase/auth";
import LoadPage from "./Components/LoadPage";

class App extends Component {
  constructor() {
    super();
    this.state = { user: null, isLoading: true };
    // this.onChangeUser = this.onChangeUser.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.checkAuthStatus = this.checkAuthStatus.bind(this);
    let context = this;
    let temp = async () => {
      try {
        let user = await context
          .checkAuthStatus()
          .then(function (user) {
            if (user !== null) {
              context.setState({ user: UserProfile.getUser() });
              console.log(user);
            } else {
              console.log(user);
            }
            context.setState({ isLoading: false });
          })
          .catch(function (err) {
            console.log(err);
          });
        console.log(user);
      } catch (err) {
        return null;
      }
    };
    temp();
  }

  checkAuthStatus() {
    return new Promise((resolve, reject) => {
      try {
        firebase.auth().onAuthStateChanged((user) => resolve(user));
      } catch (err) {
        reject(err);
      }
    });
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
    function page(context) {
      if (context.state.isLoading) {
        return <LoadPage />;
      } else {
        return (
          <Navegator user={context.state.user} onLogout={context.onLogout} />
        );
      }
    }
    return <div className="container-fluid">{page(this)}</div>;
  }
}

export default App;
