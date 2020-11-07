import React, { Component } from 'react';

class MenuPrincipal extends Component {
    render() {
        //CAMBIAR LOS BOTONES POR LINKS Y DIV POR NAV || AGREGAR SWITCH PARA REDIRECCION 
        return ( 
            <div>
                <div className="btn-group-vertical">
                    <button type="button" className="btn btn-lg btnMenu" disabled>Nombre de usuario - Carné</button>
                    <button type="button" className="btn btn-lg btnMenu">Buscar cita</button>
                    <button type="button" className="btn btn-lg btnMenu">Asignar cita</button>
                    <button type="button" className="btn btn-lg btnMenu">Eliminar cita</button>
                    <button type="button" className="btn btn-lg btnMenu">Reprogramar cita</button>
                    <button type="button" className="btn btn-lg btnMenu">Mostrar cita</button>
                    <button type="button" className="btn btn-lg btnMenu">Salir</button>
                </div>
            </div>
        );
    }
}
export default MenuPrincipal;