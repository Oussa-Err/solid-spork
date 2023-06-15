import React from 'react'
import './hero.css'
import { paper, article2img } from './import.js'

function Hero() {
  return (
      <div className='hero__container'>
        <div className='first'>
          <div className='first__left-section'>
            <h3>Manger bio, Pourquoi ?</h3>
            <p>C’est bien connu : nous sommes ce que nous mangeons. Ainsi, personne ne voudrait manger des produits chimiques et des légumes pauvres en nutriments, transformés et désavantageux pour la santé.</p>
            <div className='hero__btn'>
              <a href="/products">Learn more</a>
              <div></div>
            </div>
          </div>
          <div className='first__right-section'>
              <img src={ paper } alt="logo" />
          </div>
        </div>
        <div className='second'>
          <div className='second__left-section'>
            <img src={ article2img } alt="lbid" />
          </div>
          <div className='second__right-section'>
              <h3>Besoin de composer vous-même votre panier de légumes bio ?</h3>
              <p>Vous pouvez créer vous-même votre assortiment, en fonction de vos goûts et des produits disponibles. Pas de gâchis, vous n’achetez que les légumes BIO qui vous font envie à vous et à votre famille.</p>
          </div>
        </div>

      </div>
  )
}

export default Hero