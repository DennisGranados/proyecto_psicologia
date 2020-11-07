import React, { Component } from 'react';
import Encabezado from './Componentes/Encabezado';
import PlantillaMenu from './Componentes/Plantilla Menu';


class PruebaInterfaz extends Component {
    render() { 
        return (  
            <div>
            <Encabezado/>
            <PlantillaMenu/>
            </div>
        );
    }
}
 
export default PruebaInterfaz;