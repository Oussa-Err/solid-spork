import React, { useEffect, useState } from "react";
import "./vegetableForm.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Arrow from "../../assets/Arrow.png";
import axios from "axios";

const UploadImage = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (err) => {
        reject(err);
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* header */}
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
            height="100px"
            className="potato"
            src={Arrow}
            alt="_"
          />
        </div>
      </div>
      {/* body */}
      <div>
        <form action="" onSubmit={handleSubmit}>
          <label>
            upload vegetable image:
            <input
              type="file"
              name="price"
              value={url}
              onChange={(e) => {
                setUrl(e.target.files);
              }}
              accept="image/png, image/jpeg, image/jpg, image/webp"
            />
          </label>
          <label>
            vegetable name:
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              id="name"
            />
          </label>
          <label>
            vegetable price:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </label>
          <button onSubmit={handleSubmit}>Enregistrer</button>
        </form>
      </div>
    </>
  );
};

export default UploadImage;
