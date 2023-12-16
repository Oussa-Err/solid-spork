import "./navbar.css";
import React from "react";

const Navbar = () => {
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
      <div class="navbar">
        <div class="nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div class="menu-items">
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
