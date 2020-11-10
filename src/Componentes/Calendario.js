import React, { Component } from 'react';
import Day from './Dia';
import ColumnBreak from './ColumnBreak';
import Calendar from 'calendar';
import ColumnTitle from './ColumnTitle';
import NonDay from './NonDay';
import FlechaAtras from './FlechaAtras';
import FlechaSiguiente from './FlechaSiguiente';
import NavegadorMenu from './NavCalendario';
import NavLogout from './NavLogout';


class Calendario extends Component {
    constructor(props){
        super(props);
        this.state = { 
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            days: []
        }
        this.BackMonth = this.BackMonth.bind(this);
        this.ForwardMonth = this.ForwardMonth.bind(this);
    }

    BackMonth(){
        if(this.state.month === 0){
            this.setState({
                year: this.state.year -1,
                month: 11
            });
        }else{
            this.setState({
               month: this.state.month -1 
            })
        }  
    }

    ForwardMonth(){
        if(this.state.month === 11){
            this.setState({
                year: this.state.year + 1,
                month: 0
            });
        }else{
            this.setState({
               month: this.state.month + 1 
            })
        }  
    }

    render() { 
        let cal = new Calendar.Calendar(1);              
        let m = cal.monthDays(this.state.year, this.state.month);
        let nameDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
        this.state.days = this.state.days.concat(nameDays.map((title)=> <ColumnTitle title={title}/>))
        this.state.days.push(<ColumnBreak/>)
        for (let i=0; i<m.length; i++){
            let daysTemp = m[i].map((day) => day!==0 ? <Day day={day}/> : <NonDay/>)
            daysTemp.push(<ColumnBreak/>)
            this.state.days = this.state.days.concat(daysTemp)
        }

        return ( 
            <div>
                <NavLogout/>
                <NavegadorMenu/>
                <div className='row'>
                    <div className='col-1 d-flex align-items-center justify-content-end'>
                        <FlechaAtras onClick={this.BackMonth} />
                    </div>
                    <div className='col-10 text-align-center'>
                        {this.state.days}
                    </div>
                    <div className='col-1 d-flex align-items-center'>
                        <FlechaSiguiente/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Calendario;