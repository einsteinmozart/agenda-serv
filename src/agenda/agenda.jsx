import React, { Component } from 'react'
import AgendaList from './agendaList'
import Dados from '../posts.json'
import AgendaEdit from './agendaEdit'


class Agenda extends Component {
    render() {
        return (
            <div  className="container">
                <form>
                        <input name="procurar-data" id="procurar-data" type="text" className='form-control' placeholder="Coloque uma data"></input>
                        <a id= "procurar" className= "btn btn-success" href='#/agendaEdit'>Procurar</a>
                </form>
                <AgendaList tarefas={Dados}/>                
            </div>
        )
    }
}

export default Agenda