import React from 'react'
import './hero.css'
import paper from '../../../assets/taken_by_khoukh.jpeg'
import oeuf from '../../../assets/oeuf.png'

function Hero() {
  return (
      <div className='m-50 rounded-md grid hero__container'>
        <div className='first'>
          <div className='first__left-section'>
            <h3>Manger bio, Pourquoi ?</h3>
            <p>C’est bien connu : nous sommes ce que nous mangeons. Ainsi, personne ne voudrait manger des produits chimiques et des légumes pauvres en nutriments, transformés et désavantageux pour la santé.</p>
            <div className='hero__btn'>
              <a href="#NosProduits">Learn more</a>
              <div></div>
            </div>
          </div>
          <div className='first__right-section'>
              <img src={ paper } alt="logo" />
          </div>
        </div>
        <div className='second'>
          <div className='second__left-section'>
            <img src={ oeuf } alt="lbid" />
          </div>
          <div className='second__right-section'>
              <h3>Besoin de composer vous-même votre panier de légumes bio ?</h3>
              <p>Vous pouvez créer vous-même votre assortiment, en fonction de vos goûts et des produits disponibles. Pas de gâchis, vous n’achetez que les légumes BIO qui vous font envie à vous et à votre famille.</p>
          </div>
        </div>
        <div className='third'>
          <div className='third__left-section'>

          </div>
          <div className='third__right-section'>

          </div>
        </div>

      </div>
  )
}

export default Hero