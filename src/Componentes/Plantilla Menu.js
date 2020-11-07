import React, { Component } from 'react';
import MenuPrincipal from './Menu';

class PlantillaMenu extends Component {
    render() { 
        return (  
            <div>
                <div className='about'>
                    <div className='row'>
                        <div id='menuIzquierdo' className='col-3 tc'>
                            <MenuPrincipal/>
                        </div>
                        <div id='menuDerecho' className='col-8 tc bg'>
                            <div >
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PlantillaMenu;