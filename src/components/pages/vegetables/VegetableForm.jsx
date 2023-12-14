import React, { useState } from "react";
import "./vegetableForm.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";
import Footer from "../../common/footer/Footer";
import GetUsers from "./GetUsers";

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
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <>
      <div style={{ minHeight: "100dvh", backgroundColor: "#baae98" }}>
        <div className="vegetable-edit-container">
          {/* header */}
          <div
            className="navbar__container"
            style={{
              position: "absolute",
              top: "20px",
              width: "100dvw",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
                <a href="/contact"  className="button_top" style={{ color: "#000000" }}>Contact</a>
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
                      <button type="button" className="button_top">
                        <a href="/contact" style={{ color: "white" }} >
                          Contact
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <UpdateProduct />
          <CreateProduct />
          <GetUsers />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VegetableForm;
