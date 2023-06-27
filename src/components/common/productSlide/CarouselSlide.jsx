import React, { useState } from 'react'
import './carouselSlide.css'

import { img1, img2, img3, img4, img5 } from './index'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { text } from '@fortawesome/fontawesome-svg-core';

const CarouselSlide = () => {
  return (
    <div className='offers__container' >
      <Carousel className='carouselSlide__container'>
        <div id='item'>
          <img src={img1} alt="Image 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div id='item'>
          <img src={img2} alt="Image 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div id='item'>
          <img src={img3} alt="Image 3" />
          <p className="legend">Legend 3</p>
        </div>
        <div id='item'>
          <img src={img4} alt="Image 4" />
          <p className="legend">Legend 3</p>
        </div>
        <div id='item'>
          <img src={img5} alt="Image 5" />
          <p className="legend">Legend 3</p>
        </div>
        <div id='item'>
          <img src={img3} alt="Image 6" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <div className='description'>
        <div className='splatter'></div>
        <h2>Profitez de notre offre spéciale avec notre panier bio à seulement <span style={{ color: 'green'}}> 180 dh</span>. Et pour plus de simplicité et de confort, nous vous offrons la livraison à domicile gratuite.</h2>
      </div>
    </div>
  )
}

export default CarouselSlide