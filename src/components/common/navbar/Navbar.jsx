import { useSelector } from "react-redux";
import "./navbar.css";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isUser, setIsUser] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      setIsUser(true);
    }
  }, []);

  const handleScrolling = () => {
    if (
      document.body.style.overflow === "auto" ||
      document.body.style.overflow === ""
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div>
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
          {isUser ? (
            <button type="button">
            <a
              href="/dashboard"
              className="button_top"
              style={{ color: "#000000" }}
            >
              profile
              <svg
                fill="#323232"
                width="30px"
                height="30px"
                viewBox="0 0 128.00 128.00"
                id="Layer_1"
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                stroke="#323232"
                strokeWidth="5.632"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.256"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M30,49c0,18.7,15.3,34,34,34s34-15.3,34-34S82.7,15,64,15S30,30.3,30,49z M90,49c0,14.3-11.7,26-26,26S38,63.3,38,49 s11.7-26,26-26S90,34.7,90,49z"></path>{" "}
                    <path d="M24.4,119.4C35,108.8,49,103,64,103s29,5.8,39.6,16.4l5.7-5.7C97.2,101.7,81.1,95,64,95s-33.2,6.7-45.3,18.7L24.4,119.4z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
          </button>
          ) : (
            <button type="button">
              <a
                href="/signup"
                className="button_top"
                style={{ color: "#000000" }}
              >
                Se Connecter
                <svg
                  fill="#323232"
                  width="30px"
                  height="30px"
                  viewBox="0 0 128.00 128.00"
                  id="Layer_1"
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                  stroke="#323232"
                  strokeWidth="5.632"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0.256"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M30,49c0,18.7,15.3,34,34,34s34-15.3,34-34S82.7,15,64,15S30,30.3,30,49z M90,49c0,14.3-11.7,26-26,26S38,63.3,38,49 s11.7-26,26-26S90,34.7,90,49z"></path>{" "}
                      <path d="M24.4,119.4C35,108.8,49,103,64,103s29,5.8,39.6,16.4l5.7-5.7C97.2,101.7,81.1,95,64,95s-33.2,6.7-45.3,18.7L24.4,119.4z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </a>
            </button>
          )}
        </div>
      </div>
      <div className="navbar">
        <div className="nav-container">
          <input
            className="checkbox"
            type="checkbox"
            name=""
            id=""
            onClick={handleScrolling}
          />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="menu-items">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">À propos</a>
            </li>
            <li>
              <a href="/products">Nos Produit</a>
            </li>
            <li>
              <a href="/signup">Se Connecter</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
