import React from 'react'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
// import { Arrow } from '../Arrow'
import { Button } from '@mui/material';
import arrow from '../../../assets/Arrow.png'
import './contact.css'

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
            <div className='contact__first-section'>
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
            <div className='contact__second-section'>
                <div className="contact-body">
                    <h2>Contact Us</h2>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Nom:</label>
                                <input type="text" id="name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Téléphone:</label>
                            <input type="text" id="phone" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" rows="4"></textarea>
                        </div>

                        <button id='contact_button' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact