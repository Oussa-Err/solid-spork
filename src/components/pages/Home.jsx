import React from "react";
import { Navbar, Hero, Footer } from "../common";
import maticha from "../../assets/maticha.png";
import arrow from "../../assets/Arrow.png";
import noBgLogo from "../../assets/noBgLogo.png";

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
      <div className="QuiNous_somme" id="us">
        <h2>Qui somme-nous ?</h2>
        <div className="content_QuiNous_somme">
          <p>
            Située à Ait ourible à 18 km de Khemisset, La Ferme de Fruits et
            Légumes Bio de Healthy Farm est bien plus qu'un simple projet
            agricole. Elle incarne les valeurs et l'engagement d'une équipe unie
            autour d'une même philosophie de vie. Nous sommes convaincus de
            l'importance de prendre des mesures positives pour préserver notre
            planète et notre environnement. C'est pourquoi nous avons créé cette
            ferme biologique avec des objectifs nobles : offrir chaque semaine
            des paniers remplis de légumes bio, fraîchement récoltés le jour
            même, qui regorgent de saveurs et de nutriments.
          </p>
          <p>
            Chez Healthy Farm, nous croyons en l'agriculture biologique comme
            solution durable pour nourrir notre corps et protéger notre
            écosystème. En cultivant nos fruits et légumes sans utiliser de
            produits chimiques ni d'engrais synthétiques, nous préservons la
            santé des sols, encourageons la biodiversité, permaculture et
            garantissons la qualité exceptionnelle de nos produits.
          </p>
        </div>
      </div>
      <div className="about__container">
        <div className="third__left-section">
          <h3>Voyage culinaire envoûtant</h3>
          <p>
            Découvrez une expérience gustative BIO. Chaque bouchée est une
            explosion de saveurs, soigneusement cultivées pour captiver vos
            papilles.
          </p>
          <div className="hero__btn">
            <a href="/products">En savoir plus</a>
            <div className="learn"></div>
          </div>
        </div>
        <div className="third__right-section">
          <img src={noBgLogo} alt="logo" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
