import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './footer.css'

const Footer = () =>
  <>
    <div className='setCol'>
      <div className='footer__heading'>
        <h1>HEALTHY FARM</h1>
      </div>
      <div className='footer__pages-list'>
        <a href="/"><p>Home</p></a>
        <a href="/contact"><p>Contact</p></a>
        <a href="/products"><p>Nos Produits</p></a>
      </div>
      <div className='footer__links'>
        <SocialIcon className='footer_icon' url="https://www.instagram.com/healthyfarm.khemisset" />
        <SocialIcon className='footer_icon' url="	https://wa.me/21251551085?text=Bonjour,%20Je%20suis%20intéréssé%20" />
      </div>
    </div>
  </>

export default Footer