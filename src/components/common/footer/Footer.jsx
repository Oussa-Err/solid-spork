import React from 'react'
import './footer.css'
import { SocialIcon } from 'react-social-icons';


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
        <SocialIcon url="https://twitter.com/jaketrent" />
        <SocialIcon url="	https://wa.me/21251551085?text=I'm%20interested%20in%20your%20car%20for%20sale" />
      </div>
    </div>
  </>

export default Footer