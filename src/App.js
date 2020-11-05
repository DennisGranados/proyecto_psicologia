import './App.css';
import React, { Component } from 'react';
import FormularioLogin from './Componentes/FormularioLogin';
import Encabezado from './Componentes/Encabezado';
class App extends Component{

  render(){
    return (
      <div>
        <Encabezado/>
        <FormularioLogin/>
      </div>
    );
  }
}

export default App;