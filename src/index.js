import React, { Component }                             from 'react'
import ReactDOM                                         from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { Provider }                                     from 'react-redux'

import AppContainer from './containers/AppContainer.js'

//import { connector, store } from './store/Store'
const store = ''

var mountNode = document.getElementById('app')

ReactDOM.render(
  <AppContainer store={ store }/>,
  mountNode
)
