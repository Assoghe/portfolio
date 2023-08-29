import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import {BsLinkedin, BsBehance, BsGithub} from 'react-icons/bs';

function Menu() {
  return (
    <NavigationStyled>
    
    <div className='nom'>
      <h3> Soraya Gherras </h3>
    </div>

    <Link to='/'> Portfolio </Link>
    <Link to='/about'> A propos </Link>
    <Link to='/contact'> Contactez-moi ! </Link>

    <div className='socialnetworks'>
    <BsLinkedin/>
    <BsBehance/>
    <BsGithub/>

    </div>

    </NavigationStyled>
  )
}

const NavigationStyled = styled.div `
  width: 100%;
  padding: 1em 0;
  background-color: red;
`

export default Menu
