import React, { useState } from 'react'
import './carouselSlide.css'

import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, } from './index'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSlide = () => {
  return (
    <div className='offers__container' >
      <Carousel className='carouselSlide__container'>
        <div id='item'>
          <img src={img1} alt="Image 1" />
          <p className="legend">Chou-fleur</p>
        </div>
        <div id='item'>
          <img src={img2} alt="Image 2" />
          <p className="legend">Oignon Jaune</p>
        </div>
        <div id='item'>
          <img src={img3} alt="Image 3" />
          <p className="legend">Radis Long</p>
        </div>
        <div id='item'>
          <img src={img4} alt="Image 4" />
          <p className="legend">Poireau Monstrueux</p>
        </div>
        <div id='item'>
          <img src={img5} alt="Image 5" />
          <p className="legend">Aubergine</p>
        </div>
        <div id='item'>
          <img src={img6} alt="Image 6" />
          <p className="legend">Carotte</p>
        </div>
        <div id='item'>
          <img src={img7} alt="Image 6" />
          <p className="legend">Poivron Marconi</p>
        </div>
        <div id='item'>
          <img src={img8} alt="Image 6" />
          <p className="legend">Poivron-Piment</p>
        </div>
        <div id='item'>
          <img src={img9} alt="Image 6" />
          <p className="legend">Gombo</p>
        </div>
        <div id='item'>
          <img src={img10} alt="Image 6" />
          <p className="legend">Comcombre</p>
        </div>
        <div id='item'>
          <img src={img11} alt="Image 6" />
          <p className="legend">Chicorée Frisée</p>
        </div>
        <div id='item'>
          <img src={img12} alt="Image 6" />
          <p className="legend">Cardon Plein Blanc</p>
        </div>
        <div id='item'>
          <img src={img13} alt="Image 6" />
          <p className="legend">Potato</p>
        </div>
      </Carousel>
      <div className='description'>
        <div className='splatter'></div>
        <h2>Profitez de notre offre spéciale avec notre panier bio à seulement <span style={{ color: 'green' }}> 180 dh</span>. Et pour plus de simplicité et de confort, nous vous offrons la livraison à domicile gratuite.</h2>
      </div>
    </div>
  )
}

export default CarouselSlide