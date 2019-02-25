import React, { Component } from 'react'

export default props => {

    const renderTarefas = () => {
        const tarefas = props.tarefas || []
        return tarefas.map(funcionario =>(

            <tr key={funcionario.name}>
                <td>{funcionario.name}</td>
                <td>{funcionario.beginWorkTime}</td>
                <td>{funcionario.endWorkTime}</td>     
                <td>
                    <table className='table'>
                        <thead>
                            <tr>                    
                                <th>Hora de início</th>
                                <th>Hora fim</th>
                                <th>Status</th>
                                <th>Nota</th>                    
                            </tr>   
                        </thead>

                        <tbody>
                            {
                                funcionario.appointments.map( tarefa => (
                                    <tr>
                                        <td>{tarefa.beginTime}</td>
                                        <td>{tarefa.endTime}</td>
                                        <td>{tarefa.status}</td>
                                        <td>{tarefa.notes}</td>
                                    </tr>                                    
                                    )                                    
                                )
                            }
                        </tbody>
                    </table>
                </td>                                    
            </tr>
                
        ))
    }

    return (
        <table className='table'>
            <thead>               
                <tr>
                    <th>Funcionário</th>
                    <th>Inicio de expediente</th>
                    <th>Fim de expediente</th>
                                        
                </tr>
            </thead>
            
            <tbody>
                 
                    {renderTarefas()}
            </tbody>
        </table>
    )
}



