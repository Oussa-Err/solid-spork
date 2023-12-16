import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import arrow from "../../../assets/Arrow.png";
import panier from "../../../assets/header-panier-min.jpg";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Navbar from "../navbar/Navbar";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_EMAIL_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact__container">
      <div className="contact__first-section">
        <Navbar />
        <div className="contact__heading">
          <h2 className="contact_us">Contactez nous</h2>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="contact__second-section">
          <div className="contact-body">
            <img id="panier" src={panier} alt="" />
            {success ? (
              <div className="success">
                <p>&#10004; Votre message a été envoyé avec succès</p>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail}>
                <input
                  required
                  placeholder="Nom"
                  type="text"
                  name="user_name"
                />
                <input
                  required
                  type="tel"
                  name="user_tel"
                  pattern="[0-9]{10}"
                  placeholder="Téléphone"
                />
                <input
                  required
                  placeholder="Email"
                  type="email"
                  name="user_email"
                />
                <label>
                  Message:
                  <textarea required name="user_message"></textarea>
                </label>
                <button id="contact_button" value="send" type="submit">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
