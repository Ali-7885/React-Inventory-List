import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { IndexPage } from './modules/IndexPage'
import { AddItemForm } from './modules/ui/AddItemForm'
import { PageNotFound } from './modules/PageNotFound'

const routes=(
   <Router history={hashHistory}>
        <Route path='/' component={IndexPage}>
            <Route path='/add' component={AddItemForm}/>
        </Route>
        <Route path='*' component={PageNotFound}/>
    </Router>
)

export default routes
