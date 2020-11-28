import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
    render() { 
        return ( 
            <div>
                <div className='row cc about'>
                    <div className='col-4 card'>
                        <div className="card-header">
                            <h2 className='Titulos'>
                                <ins>
                                    Acerca del sitio
                                </ins>
                            </h2>
                        </div>
                        <div className='card-body'>
                            <p className="fonts">
                                Esta página fue desarrollada por estudiantes de la Universidad de Costa Rica con el proposito de agendar citas para asistencia psicológica
                            </p>
                        </div>
                    </div>
                </div>
                    <Footer/>
            </div>
         );
    }
}
 
export default Home;