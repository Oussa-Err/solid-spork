import "./productHeader.css";
import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import nosProduit from "../../../assets/nos-produit-hero-section.png";
import Navbar from "../navbar/Navbar";

const Menu = () => (
  <>
    <p>
      <a href="/">Acceuil</a>
    </p>
    <p>
      <a href="/about">À propos</a>
    </p>
    <p>
      <a href="/products">Nos Produit</a>
    </p>
  </>
);

function ProductHeader() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="product__container1">
      <Navbar />
      <div className="navbar__maticha">
        <img
          width="600px"
          height="300px"
          className="potato"
          src={nosProduit}
          alt="_"
        />
      </div>
    </div>
  );
}

export default ProductHeader;
