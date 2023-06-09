import React from 'react'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import potato from '../../../assets/potatoUpdated.png'
import arrow from '../../../assets/Arrow.png'
import './product.css'

const Menu = () => <>
    <p><a href="/">Acceuil</a></p>
    <p><a href="/#us">À propos</a></p>
    <p><a href="/products">Nos Produit</a></p>
  </>

function Product() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='product__container'>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <h2>HEALTHY FARM</h2>
        </div>
        <div className='navbar__links-container'>
          <ul className='navbar__links'>
            <li><a href="/">Acceuil</a></li>
            <li><a href="/#us">À propos</a></li>
            <li><a href="/products">Nos Produit</a></li>
          </ul>
        </div>
        <div className='navbar__btn'>
          <button type='button'><a href="/contact">Contact</a></button>
        </div>
        <div className='navbar__burger'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='menu__container'>
              <div className='menu__container-links'>
                <Menu />
                <div className='navbar__menu-btn'>
                  <button type='button'><a href="/contact">Contact</a></button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <h1  className='nos_produit'>NOS PRODUITS</h1>
      <div className='navbar__potato'>
        <div className='arrow'>
          <img src={arrow} alt="" />
        </div>
        <img width='700px' height='300px' className='potato' src={potato} alt="potato" />
      </div>
    </div>
  )
}

export default Product