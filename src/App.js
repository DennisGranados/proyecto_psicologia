import './App.css';
import React, { Component } from 'react';
import FormularioLogin from './Componentes/FormularioLogin';
import FormularioRegistro from './Componentes/FormularioRegistro';
import Inicio from './Componentes/Inicio';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navegator from './Componentes/Nav';

class App extends Component{
  render(){
    return (
    <div>
      <Navegator/>
    </div>
    );
  }
}

export default App;