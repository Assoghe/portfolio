import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import {BsLinkedin, BsBehance, BsGithub} from 'react-icons/bs';
import { index } from '..';

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
  padding: 0 10%;
  position: sticky;
  background-color: ${index.backgroundDark.backgroundColorSecondary};
  color: ${index.textColor.textStyle},
  display: flex;




  .navigation-right {
  display: flex;
  }

  .navigation-right a, svg {
    margin-right: 1.5em;
    text-decoration: none;
    color: ${index.textColor.textStyle};
  }

  .navigation-right a {
    font-family: Mulish, sans-serif;
    font-size: ${index.size.hfour};
    font-style: normal;
    font-weight: ${index.weight.four};
    line-height: 2.25rem;
  }


  .navigation-right svg {
    font-size: ${index.size.hfour};
    align-item: center;
  }

  .socialnetworks {
    align-items: center;
    display: flex;
  }
`

export default Menu
