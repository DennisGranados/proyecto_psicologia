import "./App.css";
import React, { Component } from "react";
import FormularioLogin from "./Componentes/FormularioLogin";
import FormularioRegistro from "./Componentes/FormularioRegistro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navegator from "./Componentes/NavBar";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navegator />
      </div>
    );
  }
}

export default App;
