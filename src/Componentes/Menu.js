import React, { Component } from 'react';

class MenuPrincipal extends Component {
    render() {
        //CAMBIAR LOS BOTONES POR LINKS Y DIV POR NAV || AGREGAR SWITCH PARA REDIRECCION 
        return ( 
            <div>
                <div className="btn-group-vertical">
                    <button type="button" className="btn btn-lg btn-primary" disabled>Nombre de usuario - Carné</button>
                    <button type="button" className="btn btn-lg btn-primary">Buscar cita</button>
                    <button type="button" className="btn btn-lg btn-primary">Asignar cita</button>
                    <button type="button" className="btn btn-lg btn-primary">Eliminar cita</button>
                    <button type="button" className="btn btn-lg btn-primary">Reprogramar cita</button>
                    <button type="button" className="btn btn-lg btn-primary">Mostrar cita</button>
                </div>
            </div>
        );
    }
}
export default MenuPrincipal;