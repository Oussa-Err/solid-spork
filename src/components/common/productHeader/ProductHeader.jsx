import "./productHeader.css";
import React from "react";
import nosProduit from "../../../assets/nos-produit-hero-section.png";
import Navbar from "../navbar/Navbar";

function ProductHeader() {

  return (
    <div className="product-page-header-container">
      <Navbar />
      <div className="nos-produit-hero_image">
        <img
          width="400px"
          height="300px"
          className="nos-produit-image"
          src={nosProduit}
          alt="_"
        />
      </div>
    </div>
  );
}

export default ProductHeader;
