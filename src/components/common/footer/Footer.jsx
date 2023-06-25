import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
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
          <a href="https://www.instagram.com/healthyfarm.khemisset" target="_blank">
          <FontAwesomeIcon className='insta' icon={faInstagram} /></a>
          <a href="https://wa.me/212651551085?text=Bonjour,%20Je%20suis%20intéréssé%20" target="_blank">
          <FontAwesomeIcon className='whats' icon={faWhatsapp} /></a>
      </div>
    </div>
  </>

export default Footer