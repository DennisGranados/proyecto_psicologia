import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row cc about">
          <div className="col-4 card">
            <div className="card-header">
              <h2 className="Titulos">
                <p>Acerca del sitio</p>
              </h2>
            </div>
            <div className="card-body">
              <p className="fonts">
                Esta página fue desarrollada por estudiantes de la Universidad
                de Costa Rica con el propósito de agendar citas para asistencia
                psicológica.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
