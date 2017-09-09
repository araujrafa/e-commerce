'use strict'

import React, { Component } from 'react'

// Componentes
import Products from './components/products'

import './css/style.scss'

class App extends Component {
  render () {
    return (
      <div>
        <Products />
      </div>
    )
  }
}

export default App
