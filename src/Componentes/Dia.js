import React, { Component } from 'react';

class Dia extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='calendar-day'>
                {this.props.day}
            </div>
         );
    }
}
 
export default Dia;