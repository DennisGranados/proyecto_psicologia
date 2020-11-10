import React, { Component } from 'react';
import { ArrowForwardIos } from '@material-ui/icons';

class FlechaSiguiente extends Component {
    state = {  }
    render() { 
        return (  
            <button onClick={this.props.onclick}>
            <ArrowForwardIos color='disabled' fontSize="large"/>
            </button> 
        );
    }
}
 
export default FlechaSiguiente;