import React, {Component} from 'react';
import '../App.css';

class Encabezado extends Component {
    render() { 
        return (
                <div className="App-header row">
                    <div className='col-4'>                    
                        <img src="./ucrnombre.png" width='210' className="float-left"/>
                    </div>
                    <div className='col-4'>  
                        <h3>Departamento de psicología</h3>
                    </div>  
                    <div className='col-4'>   
                        <img src="./ucrso-logo.svg" width='120' className="float-right"/>
                    </div>  
                </div>
        );
    }
}
 
export default Encabezado;