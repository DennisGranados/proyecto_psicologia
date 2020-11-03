import './App.css';
import React, { Component } from 'react';
import FormularioLogin from './Componentes/FormularioLogin';

class App extends Component{

  render(){
    return (
      <div>
        <div className="App-header">
        <img src="./ucrnombre.png" className="App-logo"/>
        <h3>Departamento de psicología</h3>
        </div>
        <FormularioLogin/>
      </div>
    );
  }
}

export default App;