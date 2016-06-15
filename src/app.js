import React from 'react'
import ReactDOM from 'react-dom'

import './app.css'

import 'font-awesome/css/font-awesome.css'

import App from 'containers/App/App'

import {browserHistory, Router, Route} from 'react-router'

import makeRoutes from './routes'

const routes = makeRoutes()

const mountNode = document.querySelector('#root');
ReactDOM.render(<App history={browserHistory} routes={routes} />,mountNode);