import React from 'react'
import { styled } from 'styled-components'

function Portfolio() {
  return (
    <PortfolioHerosection>
    <div className='bloc-title'>
      <h3> Je suis </h3>
      <h1> UX UI designer et intégrateur web</h1>  
    </div>

    <div className='bloc-paragraph'>
      <p> Entre design et développement, je donne vie à des interfaces réalistes. Chaque projet est une occasion d'apprendre, d'innover et de créer des expériences uniques pour les utilisateurs.</p>
    </div>

    </PortfolioHerosection>
  )
}

const PortfolioHerosection = styled.div`
  background-color: red;

  .bloc-title {
    background-color: blue;
  }

  .bloc-paragraph {
    background-color: green;
  }
`

export default Portfolio
