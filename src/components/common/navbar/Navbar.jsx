import "./navbar.css";
import React from "react";

const Navbar = () => {

  const handleScrolling = () => {
    if(document.body.style.overflow === "auto"){
      console.log("executed 1")
      document.body.style.overflow = "hidden"
    }else {
      console.log("executed 2")
      document.body.style.overflow = "auto"
    }
  }
  console.log()
  return (
    <div>
        <div className="navbar__container">
          <div className="navbar__logo">
            <h2>HEALTHY FARM</h2>
          </div>
          <div className="navbar__links-container">
            <ul className="navbar__links">
              <li>
                <a href="/">Acceuil</a>
              </li>
              <li>
                <a href="/about">À propos</a>
              </li>
              <li>
                <a href="/products">Nos Produit</a>
              </li>
            </ul>
          </div>
          <div className="navbar__btn">
            <button type="button">
              <a
                href="/contact"
                className="button_top"
                style={{ color: "#000000" }}
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      <div className="navbar">
        <div className="nav-container">
          <input className="checkbox" type="checkbox" name="" id="" onClick={handleScrolling}/>
          <div className="hamburger-lines" >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="menu-items">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">À propos</a>
            </li>
            <li>
              <a href="/products">Nos Produit</a>
            </li>
            <li>
              <a href="/login">Se Connecter</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
