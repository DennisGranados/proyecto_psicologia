import React, { Component } from 'react';
import { ArrowBackIos } from '@material-ui/icons';

class FlechaAtras extends Component {
    state = {  }
    render() { 
        return ( 
            <button onClick={this.props.onclick}>
                <ArrowBackIos color='disabled' fontSize="large" />
            </button>
         );
    }
}
 
export default FlechaAtras;