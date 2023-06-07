import React from 'react'
import './about.css'
import noBgLogo from '../../../assets/noBgLogo.png'

function About() {
  return (
      <div>
      <div className='about__container'>
            <div className='third__left-section'>
              <h3>Voyage culinaire envoûtant</h3>
              <p>Découvrez une expérience gustative BIO. Chaque bouchée est une explosion de saveurs, soigneusement cultivées pour captiver vos papilles.</p>
              <div className='hero__btn'>
                <a href="#NosProduits">Learn more</a>
                <div className='learn'></div>
              </div>
            </div>
            <div className='third__right-section'>
              <img src={ noBgLogo } alt="khedra" />
            </div>
          </div>
      <div>
        <p>Nous accordons un grand soin à votre commande. Nous disposons des fruits et légumes avec précaution afin qu'ils ne s'abîment pas pendant le transport. This correction ensures the use of "des fruits" to indicate the general category of fruits, rather than a specific set of fruits.</p>

      </div>
    </div>
  ) 
} 

export default About