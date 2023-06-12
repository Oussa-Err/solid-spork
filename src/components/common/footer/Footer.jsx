import React from 'react'
import './footer.css'
import logo from '../../../assets/noBgLogo.png'
import { SocialIcon } from 'react-social-icons';


const Footer = () =>
  <>
    <div className='setCol'>
      <div className='footer__heading'>
        <h1>HEALTHY FARM</h1>
      </div>
      <div className='footer__pages-list'>
        <a href="/contactPage"><p>Contact</p></a>
        <a href="/productPage"><p>Nos Produits</p></a>
      </div>
      <div className='footer__links'>
        <SocialIcon url="https://twitter.com/jaketrent" />
        <SocialIcon url="" />
      </div>
    </div>
  </>

export default Footer