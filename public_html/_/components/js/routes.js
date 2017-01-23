import React from 'react'
import { render } from 'react-dom'
import { IndexPage } from './modules/IndexPage'
import { PageNotFound } from './modules/PageNotFound'
import { Router, Route, hashHistory } from 'react-router'

const routes=(
    <Router history={hashHistory}>
        <Route path='/' component={IndexPage}/>
        <Route path='*' component={PageNotFound}/>
    </Router>
)

export default routes 