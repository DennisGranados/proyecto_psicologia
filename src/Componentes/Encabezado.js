import React, {Component} from 'react';
import '../App.css';

class Encabezado extends Component {
    render() { 
        return (  
            <div>
                <div className="App-header">
                    <img src="./ucrnombre.png" className="App-logo"/>
                    <h3>Departamento de psicología</h3>
                </div>
            </div>
        );
    }
}
 
export default Encabezado;