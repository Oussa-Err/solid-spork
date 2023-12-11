import React from 'react'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import maticha from '../../../assets/maticha.png'
import arrow from '../../../assets/Arrow.png'


const Menu = () => <>
    <p><a href="/">Acceuil</a></p>
    <p><a href="/about">À propos</a></p>
    <p><a href="/products">Nos Produit</a></p>
  </>

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='container'>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <h2>HEALTHY FARM</h2>
        </div>
        <div className='navbar__links-container'>
          <ul className='navbar__links'>
            <li><a href="/">Acceuil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/products">Nos Produit</a></li>
          </ul>
        </div>
        <div className='navbar__btn'>
          <button type='button'><a href="/contact" style={{ color: "white" }}>Contact</a></button>
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
                  <a href="/contact"><button type='button' style={{ color: "white" }}>Contact</button></a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <h1 className='duBio'>DU BIO CHEZ NOUS</h1>
      <div className='navbar__maticha'>
        <div className='arrow'>
          <img src={arrow} alt="" />
        </div>
        <img src={maticha} alt="_" />
      </div>
    </div>

  )
}

export default Navbar
