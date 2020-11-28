import React, { Component } from 'react';
import Calendario from './Componentes/Schedule';
import Header from './Componentes/Header';


class PruebaInterfaz extends Component {
    render() { 
        return (  
            <div>
            <Header/>
            <Calendario/>
            </div>
        );
    }
}
 
export default PruebaInterfaz;