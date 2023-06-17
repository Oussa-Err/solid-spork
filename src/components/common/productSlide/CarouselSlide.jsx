import React, { useState } from 'react'
import './carouselSlide.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { slides } from './index'

const CarouselSlide = (data = slides) => {
  const { slide, setSlide } = useState(1)

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1)
  }
  return (
    <div className='carouselSlide__container'>
      <BsArrowLeftCircleFill className='arrow left-arrow' onClick={prevSlide} />
      {slides.map((item, index) => {
        return <img
          src={item.src}
          alt={item.alt}
          key={index}
          className={slide === index ? "slide" : "slide slide-hidden"} />
      })}
      <BsArrowRightCircleFill className='arrow right-arrow' onClick={nextSlide} />
      <span className='indicators'>
        {slides.map((_, index) => {
          return <button
            key={index}
            onClick={() => setSlide(index)}
            className={slide === index ? "indicator" : "indicatorinactive"}></button>
        })}
      </span>
    </div>
  )
}

export default CarouselSlide