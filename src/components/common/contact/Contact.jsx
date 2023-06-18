import React from 'react'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
// import { Arrow } from '../Arrow'
import { Button } from '@mui/material';
import arrow from '../../../assets/Arrow.png'
import './contact.css'
import panier from '../../../assets/header-panier-min.jpg'



const Menu = () => {
    return (<>
        <p><a href="/">Acceuil</a></p>
        <p><a href="/#us">À propos</a></p>
        <p><a href="/products">Nos Produit</a></p>
    </>
    )
}

const Contact = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='contact__container'>
            {/* <div className='contact__first-section'>
                <div className='navbar__contact-container'>
                    <div className='navbar__logo'>
                        <h2>HEALTHY FARM</h2>
                    </div>
                    <div className='navbar__links-container'>
                        <ul className='navbar__links'>
                            <li><a href="/">Acceuil</a></li>
                            <li><a href="/#Us">À propos</a></li>
                            <li><a href="/products">Nos Produit</a></li>
                        </ul>
                    </div>
                    <div className='navbar__btn'>
                        <Button href='/contact' variant="contained" color='success' disabled>Contact</Button>
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
                                        <Button href='/contact' variant="contained" color='success' disabled>Contact</Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='contact__heading'>
                    <h2 className='contact_us'>Contactez nous</h2>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
            <div className='contact__second-section'> */}
                {/* <div className="contact-body">
                    <img id='panier' src={panier} alt="" /> */}
                    <form
                        name="contact"
                        method="POST"
                        netlify
                        netlify-honeypot="bot-field"
                        onSubmit="submit"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <input required placeholder='Name' type="text" name="name" />
                        <input required type="tel" name="phone"
                            pattern="[0-9]{10}" placeholder='Téléphone'
                        />
                        <input required placeholder='Email' type="email" name="email" />
                        <label >Message: <textarea required name="message"></textarea></label>
                        <button id='contact_button' type="submit">Submit</button>
                    </form>
                {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Contact