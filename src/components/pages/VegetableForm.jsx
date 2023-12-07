import React, { useEffect, useState } from "react";
import "./vegetableForm.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Arrow from "../../assets/Arrow.png";
import axios from "axios";

const VegetableForm = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: "",
    photo_url: "",
  });

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

  const handle = (e) => {
    const { name, price, value } = e.target;
    console.log(data)
    setData((prevData) => ({
      ...prevData,
      [price]: value,
      [name]: value,
    }));
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const base64 = await convertBase64(file);
      setData((prevData) => ({
        ...prevData,
        photo_url: base64,
      }));
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://127.0.0.1:8080/api/v1/products/",
        data
      );
      console.log(res);
      alert("Vegetable Uploaded Successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
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
      <form onSubmit={submit}>
        <label>
          Upload vegetable image:
          <input
            type="file"
            id="photo_url"
            name="photo_url"
            onChange={uploadImage}
            accept="image/png, image/jpeg, image/jpg, image/webp"
          />
        </label>
        <label>
          Vegetable name:
          <input
            required
            type="text"
            onChange={handle}
            value={data.name}
            id="name"
            name="name"
          />
        </label>
        <label>
          Vegetable price:
          <input
            required
            type="number"
            id="price"
            name="price"
            value={data.price}
            onChange={handle}
          />
        </label>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default VegetableForm;
