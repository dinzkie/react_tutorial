import React from 'react'
import {browserHistory, Router, Route} from 'react-router'

const Home = React.createClass({
  render: function() {
    return (<div>Hello world</div>)
  }
})

export const makeRoutes = (
  <Router>
    <Route path="/" component={Home} />
  </Router>
)

export default makeRoutes