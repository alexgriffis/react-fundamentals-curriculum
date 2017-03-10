import React from 'react'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import ForecastContainer from '../containers/ForecastContainer'
import DetailContainer from '../containers/DetailContainer'

let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='forecast/:location' component={ForecastContainer} />
      <Route path='detail/:location' component={DetailContainer} />
    </Route>
  </Router>
)

export default routes
