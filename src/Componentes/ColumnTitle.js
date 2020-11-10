import React, { Component } from 'react';

class ColumnTitle extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='calendar-title'>
                {this.props.title}
            </div>
         );
    }
}
 
export default ColumnTitle;