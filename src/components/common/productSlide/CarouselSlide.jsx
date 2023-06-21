import React, { useState } from 'react'
import './carouselSlide.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { slides } from './index'
import headerImg from '../../../assets/carousel-1.jpg'

const CarouselSlide = (data = slides) => {
  const { slide, setSlide } = useState(1)

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }

  return (
    <div className='carouselSlide__container'>
      {/* <div className='header__img'>
          <img src={ headerImg } alt="" />
      </div> */}
      <BsArrowLeftCircleFill className='arrow_carousel left-arrow' onClick={prevSlide} />
      {slides.map((item, index) => {
        return <img
          src={item.src}
          alt={item.alt}
          key={index}
          className={slide === index ? "slide" : "slide slide-hidden"} />
      })}
      <BsArrowRightCircleFill className='arrow_carousel right-arrow' onClick={nextSlide} />
      <span className='indicators'>
        {slides.map((_, index) => {
          return <button
            key={index}
            onClick={() => setSlide(index)}
            className={slide === index ? "indicator" : "indicator-inactive"}></button>
        })}
      </span>
    </div>
  )
}

export default CarouselSlide