import "./product.css";
import React from "react";
import nosProduit from "../../../assets/Logo_crop1.png";
import Navbar from "../navbar/Navbar";

function Product() {
  return (
    <div className="product__container">
      <Navbar />
      <div className="navbar__maticha">
        <img
          width="400px"
          height="300px"
          className="potato"
          src={nosProduit}
          alt="_"
        />
      </div>
    </div>
  );
}

export default Product;
