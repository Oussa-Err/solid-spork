import React from "react";
import { Navbar, Hero, Footer, About, Us } from "../common";
import maticha from "../../assets/maticha.png";
import arrow from "../../assets/Arrow.png";

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
function Home() {
  return (
    <div className="app_container">
      <div className="container">
        <Navbar />
        <h1 className="duBio">DU BIO CHEZ NOUS</h1>
        <div className="navbar__maticha">
          <div className="arrow">
            <img src={arrow} alt="" />
          </div>
          <img src={maticha} alt="_" />
        </div>
      </div>
      <div className="hero__section">
        <Hero />
      </div>
      <Us />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
