import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <nav className='c-menu'>
    <div className='container-page'>
      <Link to={'/'} className='c-menu__link'>Home</Link>
    </div>
  </nav>
)
