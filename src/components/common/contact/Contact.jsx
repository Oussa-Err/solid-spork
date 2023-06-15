import React, { useRef } from 'react'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
// import { Arrow } from '../Arrow'
import { Button } from '@mui/material';
import arrow from '../../../assets/Arrow.png'
import './contact.css'

// import emailjs from "@emailjs/browser";
// import styled from "styled-components";

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

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "replace with service id",
                "replace with template id",
                form.current,
                "replace with user id"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

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
                                <input type="text" placeholder='Nom' id="name" />
                            </div>

                            <div className="form-group">
                                <input type="email" placeholder='Email' id="email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder='Téléphone' id="phone" />
                        </div>
                        <div className="form-group">
                            <textarea id="message" placeholder='Message' rows="3"></textarea>
                        </div>

                        <button id='contact_button' type="submit">Submit</button>
                    </form>

                    {/* <StyledContactForm>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>
                        </StyledContactForm>*/}
                </div>
            </div>
        </div>
    )
}

export default Contact

// const StyledContactForm = styled.div`
//   width: 400px;

//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;

//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     label {
//       margin-top: 1rem;
//     }

//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;