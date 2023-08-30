import React from 'react'
import { styled } from 'styled-components'

function Portfolio() {
  return (
  <PortfolioHerosection>
  <div className='bloc-hero'>  
    <div className='bloc-title'> 
      <h3> Je suis </h3>
      <h1> UX UI designer et intégrateur web</h1>  
    </div>

    <div className='bloc-paragraph'>
      <p> Entre design et développement, je donne vie à des interfaces réalistes. Chaque projet est une occasion d'apprendre, d'innover et de créer des expériences uniques pour les utilisateurs.</p>
    </div>
  </div>  
  </PortfolioHerosection>
  )
}


const PortfolioHerosection = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  margin-right: 10%;
  margin-left: 10%;

  .bloc-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .bloc-title,
  .bloc-paragraph {
    padding: 1em;
  }


  .bloc-title h1 {
    margin: 0;
  }

  .bloc-paragraph {
    align-self: flex-end;
  }

  .bloc-paragraph p {
    margin: 0;
  }
`;

export default Portfolio;

