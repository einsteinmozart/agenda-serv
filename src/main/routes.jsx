import React from 'react'
import { HashRouter, Route, Redirect} from 'react-router-dom'

import Agenda from '../agenda/agenda'
import AgendaList from '../agenda/agendaList'
import AgendaEdit from '../agenda/agendaEdit'

export default props => (
    <HashRouter ><div>
        <Route path='/agenda' component={Agenda} />
        <Route path='/agendaList' component={AgendaList} />
        <Route path='/agendaEdit' component={AgendaEdit} />
        <Redirect from='*' to='/agenda' />
        </div>
    </HashRouter>
)