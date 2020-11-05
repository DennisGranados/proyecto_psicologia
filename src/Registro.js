import './App.css';
import React, { Component } from 'react';
import FormularioRegistro from './Componentes/FormularioRegistro';
import Encabezado from './Componentes/Encabezado';


class RegistroForm extends Component {
    render(){
        return (
            <div>
                <Encabezado/>
            </div>
        )
    }
}

export default RegistroForm;
