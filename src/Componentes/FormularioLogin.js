import React, { Component } from 'react';
import '../App.css';
import './FormularioRegistro';



class LoginForm extends Component{
    render(){
    return (
      <div className="Forms row">
        <div className="card col-4 Forms">
      <form>
          <div className="card-header">
            <h2 className="Titulos">Inicio de sesión</h2>
          </div>
            <div className="Forms card-body">
              <div className="form-group">
                <input type="email" className="form-control form-control-lg Inputs" placeholder="Correo electrónico"/>
                <input type="password" className="form-control form-control-lg Inputs" placeholder="Contraseña"/>
                <div className="form-group btn-group-vertical displayCSS">
                  <input type="submit" className="btn Buttons ButtonsFormat" value="Aceptar"/>
                  <input type="button" className="btn Buttons ButtonsFormat" value="No estoy registrado"/>
                  <a href= "https://facebook.com"> Click aquí</a>
                  <a href= "/FormularioRegistro"> test</a>
                </div>
              </div>
            </div>
      </form>
        </div>
      </div>
    );
  }
  }
  
  export default LoginForm;