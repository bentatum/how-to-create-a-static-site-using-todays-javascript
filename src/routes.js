import { default as React } from 'react'
import * as views from './components'
import { IndexRoute, Route } from 'react-router'

export default (
  <Route path='/' component={views.App}>
    <IndexRoute component={views.Home} />
    <Route path='about' component={views.About} />
    <Route path='*' component={views.Error404} />
  </Route>
)
