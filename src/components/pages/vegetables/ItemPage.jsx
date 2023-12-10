import React from "react";
import "./vegetableForm.css";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="/">Acceuil</a>
    </p>
    <p>
      <a href="#us">À propos</a>
    </p>
    <p>
      <a href="/products">Nos Produit</a>
    </p>
  </>
);

const ItemPage = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="container">
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
              <a href="/contact">Contact</a>
            </button>
          </div>
          <div className="navbar__burger">
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="menu__container">
                <div className="menu__container-links">
                  <Menu />
                  <div className="navbar__menu-btn">
                    <a href="/contact">
                      <button type="button">Contact</button>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="item_details">hello world</div>
      </div>
    </>
  );
};

export default ItemPage;
