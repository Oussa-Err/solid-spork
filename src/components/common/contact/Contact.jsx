import React from 'react'
import './contact.css'
import { Arrow } from '../Arrow'

function Contact() {
  return (       
        <div className='contact__container'>
            <div className='contact__first-section'>
                <h2 className='contact_us'>Contactez nous</h2>
                <Arrow />
            </div>
            <div className='contact__second-section'>
                <div className='contact__block'>
                    <h2>Contact</h2>
                </div>               
            </div>
        </div>
  )
}

export default Contact