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

<div className='navigation-right'>
    <Link to='/'> Portfolio </Link>
    <Link to='/about'> A propos </Link>
    <Link to='/contact'> Contactez-moi ! </Link>

    <div className='socialnetworks'>
    <BsLinkedin/>
    <BsBehance/>
    <BsGithub/>
    </div>
</div>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.div `
  width: auto;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #D9D9D9;
  background: #1A1C23;
  padding: 0 10%;

  h3 {
font-family: 'Philosopher', sans-serif; 
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.96px;
  }




  .navigation-right {
  display: flex;
  }

`

export default Menu
