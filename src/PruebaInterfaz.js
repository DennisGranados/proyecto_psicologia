import React, { Component } from 'react';
import Calendario from './Componentes/Calendario';
import Encabezado from './Componentes/Encabezado';
import PlantillaMenu from './Componentes/Plantilla Menu';


class PruebaInterfaz extends Component {
    render() { 
        return (  
            <div>
            <Encabezado/>
            <Calendario/>
            </div>
        );
    }
}
 
export default PruebaInterfaz;