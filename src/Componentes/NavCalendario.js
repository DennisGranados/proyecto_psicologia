import React, { Component } from 'react';

class NavegadorMenu extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">Acción:</span>
            </div>
            <select className="custom-select" id="action-type" aria-label="Seleccionar el tipo de acción">
                <option value="any" selected>Escoger</option>
                <option value=""></option>
            </select>
            <div className="input-group-prepend">
                <span className="input-group-text">Solicitante:</span>
            </div>
            <select className="custom-select" id="objective-type" aria-label="Seleccionar el tipo de objetivo">
                <option value="any" selected>Todos</option>
                <option value="">Denilson Granados</option>
            </select>
            <div className="input-group-prepend">
                <label for="audit_startTime" className="input-group-text">Mes/Año:</label>
            </div>
            <input type="month" className="form-control" id="audit_startTime" name="audit_startTime" required/>
            <div className="input-group-append">
                <button className="btn Buttons" type="button" onClick="">Filtrar</button>
            </div>
        </div>
         );
    }
}
 
export default NavegadorMenu;