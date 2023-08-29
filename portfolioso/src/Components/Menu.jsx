import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <>
    <nav>
    <Link to='/'> Portfolio </Link>
      <Link to='/about'> A propos </Link>
      <Link to='/contact'> Contactez-moi ! </Link>
    </nav>

    
    </>
  )
}

export default Navigation
