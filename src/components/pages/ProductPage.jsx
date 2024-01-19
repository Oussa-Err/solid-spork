import React from "react";
import { Footer, ProductItems, Testimonials } from "../common";
import "./pages-global.css";
import nosProduit from "../../assets/nos-produit-hero-section.png";
import Navbar from "../common/navbar/Navbar";

const ProductPage = () => {
  return (
    <>
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
      <ProductItems />
      <Testimonials />
      <Footer />
    </>
  );
};

export default ProductPage;
