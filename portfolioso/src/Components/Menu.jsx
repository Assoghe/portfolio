import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

function Navigation() {
  return (
    <NavigationStyled>
    <Link to='/'> Portfolio </Link>
      <Link to='/about'> A propos </Link>
      <Link to='/contact'> Contactez-moi ! </Link>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.div `
  width: 100%;
  padding: 1em 0;
  background-color: red;
`

export default Navigation
