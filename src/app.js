'use strict'

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// Componentes
import Products from './components/products'
import Description from './components/description'

import './css/style.scss'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Products} />
          <Route path='/:id' component={Description} />
        </div>
      </ Router>
    )
  }
}

export default App
