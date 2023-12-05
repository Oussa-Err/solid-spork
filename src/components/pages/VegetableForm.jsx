import React, { useEffect } from "react";
import "./vegetableForm.css";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Arrow from "../../assets/Arrow.png";
import axios from "axios";

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

const VegetableForm = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [file, setFile] = useState(false);
  
  useEffect(() => {
    axios.post("http://127.0.0.1:8080/api/v1/products/", file)
    .then(console.log)
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.files.target);
    setFile(e.file.target);
  };

  return (
    <>
      <div className="product__container1">
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
                    <button type="button">
                      <a href="/contact">Contact</a>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="navbar__maticha">
          <img
            width="100px"
            height="200px"
            className="potato"
            src={Arrow}
            alt="_"
          />
        </div>
      </div>
      <div className="vegetable-form-container">
        <form className="vegetable-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" required />

          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="photo_url"
            accept="image/jpg, image/jfif, image/png, image/jpg"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default VegetableForm;
