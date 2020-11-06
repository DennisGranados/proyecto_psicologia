import '../App.css';
import React, { Component } from 'react';

class RegistroLogin extends Component {
    render() { 
        return (          
      <div className="Forms row">
      <div className="card col-4 Forms">
        <form>
            <div className="card-header">
            <h2 className="Titulos">Registro de usuario</h2>
            </div>
            <div className="Forms card-body">
                <div className="form-group">
                <input type="email" className="form-control form-control-lg Inputs" placeholder="Correo electrónico"/>
                <input type="password" className="form-control form-control-lg Inputs" placeholder="Contraseña"/>
                <input type="text" className="form-control form-control-lg Inputs" placeholder="Carné"/>
                <select className="custom-select buttonList" id="inputCarrera">
                <option selected>Seleccione una carrera</option>
                <option value="1">Informática empresarial</option>
                <option value="2">Recurso hídrico</option>
                <option value="3">Enseñanza de la matemática</option>
                <option value="4">Funcionario</option>
                </select>
                <select className="custom-select buttonList" id="inputGenero">
                <option selected>Seleccione su género</option>
                <option value="1">Masculino</option>
                <option value="2">Femenino</option>
                <option value="3">Otro</option>
                </select>
                <div className="form-group btn-group-vertical displayCSS">
                    <input type="submit" className="btn Buttons ButtonsFormat" value="Aceptar"/>
                </div>
                </div>
            </div>
        </form>
      </div>
    </div>
        );
    }
}
 
export default RegistroLogin;