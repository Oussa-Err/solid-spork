import "./carouselSlide.css";
import React from "react";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
} from "./index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselSlide = () => {
  return (
    <div className="offers__container">
      <Carousel className="carouselSlide__container">
        <div id="item">
          <img src={img1} alt="Image 1" />
          <p className="legend">Chou-fleur BIO</p>
        </div>
        <div id="item">
          <img src={img2} alt="Image 2" />
          <p className="legend">Oignon Jaune BIO</p>
        </div>
        <div id="item">
          <img src={img3} alt="Image 3" />
          <p className="legend">Radis Long BIO</p>
        </div>
        <div id="item">
          <img src={img4} alt="Image 4" />
          <p className="legend">Poireau Monstrueux BIO</p>
        </div>
        <div id="item">
          <img src={img5} alt="Image 5" />
          <p className="legend">Aubergine BIO</p>
        </div>
        <div id="item">
          <img src={img6} alt="Image 6" />
          <p className="legend">Carotte BIO</p>
        </div>
        <div id="item">
          <img src={img7} alt="Image 7" />
          <p className="legend">Poivron Marconi BIO</p>
        </div>
        <div id="item">
          <img src={img8} alt="Image 8" />
          <p className="legend">Poivron-Piment BIO</p>
        </div>
        <div id="item">
          <img src={img9} alt="Image 9" />
          <p className="legend">Gombo BIO</p>
        </div>
        <div id="item">
          <img src={img10} alt="Image 10" />
          <p className="legend">Comcombre BIO</p>
        </div>
        <div id="item">
          <img src={img11} alt="Image 11" />
          <p className="legend">Chicorée Frisée BIO</p>
        </div>
        <div id="item">
          <img src={img12} alt="Image 12" />
          <p className="legend">Cardon Plein Blanc BIO</p>
        </div>
        <div id="item">
          <img src={img13} alt="Image 6" />
          <p className="legend">Patate BIO</p>
        </div>
        <div id="item">
          <img src={img14} alt="Image 14" />
          <p className="legend">La Tomate BIO</p>
        </div>
        <div id="item">
          <img src={img15} alt="Image 15" />
          <p className="legend">Potiron BIO</p>
        </div>
        <div id="item">
          <img src={img16} alt="Image 16" />
          <p className="legend">Pasteque BIO</p>
        </div>
        <div id="item">
          <img src={img17} alt="Image 17" />
          <p className="legend">Melon Musqué BIO</p>
        </div>
        <div id="item">
          <img src={img18} alt="Image 18" />
          <p className="legend">Comcombre-feggous BIO</p>
        </div>
        <div id="item">
          <img src={img19} alt="Image 19" />
          <p className="legend">Chou-cabus BIO</p>
        </div>
        <div id="item">
          <img src={img20} alt="Image 20" />
          <p className="legend">Celeri BIO</p>
        </div>
        <div id="item">
          <img src={img21} alt="Image 21" />
          <p className="legend">brocoli BIO</p>
        </div>
        <div id="item">
          <img src={img22} alt="Image 22" />
          <p className="legend">Basilic BIO</p>
        </div>
        <div id="item">
          <img src={img23} alt="Image 23" />
          <p className="legend">Asperge BIO</p>
        </div>
      </Carousel>
      <div className="profiter-card">
        <p className="profiter-card-title">Profitez de notre offre spéciale</p>
        <p className="small-desc">
          Notre panier bio à seulement{" "}
          <span style={{ color: "green" }}> 180 dh</span>. Et pour plus de
          simplicité et de confort, nous vous offrons la livraison à domicile
          gratuite dans un rayon de 20km. Au dela, la livraison à{" "}
          <span style={{ color: "green" }}> 25 dh</span> par panier.
        </p>
        <div className="go-corner">
          <a className="go-arrow">→</a>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
