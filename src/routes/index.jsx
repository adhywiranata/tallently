import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Home from './Home';
import Services from './Services';

export default <Router history={hashHistory}>
  <Route
    path="/"
  >
    <IndexRoute
      component={Home}
    />
    <Route
      path="/services"
      component={Services}
    />
  </Route>
</Router>;
