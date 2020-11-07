import React, { Component } from 'react';
import FormularioLogin from './FormularioLogin';
import FormularioRegistro from './FormularioRegistro';
import Inicio from './Inicio';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Encabezado from './Encabezado';

class Navegator extends Component {
    render() { 
        return ( 
            <Router>
            <div>
            <Encabezado/>  
            <nav id='nav-principal' className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className='navbar-nav'>
                  <li>
                    <Link to="/" className='navFonts nav-link' href='#'>Inicio</Link>
                  </li>
                  <li>
                    <Link to="/login" className='navFonts nav-link' href='#'>Inicio de sesión</Link>
                  </li>
                  <li >
                    <Link to="/registro" className='navFonts nav-link' href='#'>Registro de usuario</Link>
                  </li>
                </ul>
                </div>
            </nav>
              <Switch>
                <Route exact path="/">
                  <Inicio/>
                </Route>
                <Route exact path="/login">
                  <FormularioLogin/>
                </Route>
                <Route exact path="/registro">
                  <FormularioRegistro/>
                </Route>
              </Switch>
            </div> 
          </Router> 
         );
    }
}
 
export default Navegator;