import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'

import Home from './home'

export default <Router history={hashHistory}>
  <Route
    path='/'
    component={ Home }
  />
</Router>
