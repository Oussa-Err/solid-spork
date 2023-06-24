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
            <a href="/products">Learn more</a>
            <div className='learn'></div>
          </div>
        </div>
        <div className='third__right-section'>
          <img src={noBgLogo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default About