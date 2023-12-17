import React from "react";
import { Footer, Map, CarouselSlide, Panier, Navbar } from "../common";
import nosProduit from "../../assets/Logo_crop1.png";

const About = () => (
  <>
    <div  className="product__container">
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
    <CarouselSlide />
    <Panier />
    <Map />
    <Footer />
  </>
);

export default About;
