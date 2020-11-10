import React, { Component } from "react";
import '../App.css';

class Modales extends Component {
  render() {
    return (
      <div id='exampleModal' className="modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header headerModal">
              <h5 className="modal-title headerModal">Registro exitoso</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body tc">
              <p>Su usuario ha sido creo de forma exitosa<br/>Ya puede ingresar al sistema</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary Buttons">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modales;
