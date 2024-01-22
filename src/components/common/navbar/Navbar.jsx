import { useDispatch } from "react-redux";
import "./navbar.css";
import React, { useEffect, useState } from "react";
import { logOutUser } from "../../../redux/actions/userAction";

const Navbar = () => {
  const [isUser, setIsUser] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch()
  const loggedInUser = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {

    if (loggedInUser && loggedInUser !== "null") {
      setUser(loggedInUser);
      setIsUser(true);
    }
  }, [isUser]);

  const onLogout = () => {
    dispatch(logOutUser())
    setIsUser(false)
    localStorage.clear()
  }

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
    <>
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
            <div className="two_btns">
              <button type="button">
                <a
                  href="/dashboard"
                  className="button_top"
                  style={{ color: "#000000" }}
                >
                  Hi {user.userData.name}
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
              <button
                type="button"
                style={{ color: "#000000", width: "70px", margin: "0" }}
              >
                <a
                  href="/"
                  onClick={onLogout}
                  className="logout_button"
                  style={{ color: "#000000" }}
                >
                  <svg
                    fill="#000000"
                    height="30px"
                    width="30px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="-38.5 -38.5 461.97 461.97"
                    xmlSpace="preserve"
                    stroke="#000000"
                    strokeWidth="10.394217000000001"
                    transform="matrix(1, 0, 0, 1, 0, 0)"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="0.769942"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g id="Sign_Out">
                          <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z"></path>{" "}
                          <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"></path>{" "}
                        </g>
                        <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      </g>
                    </g>
                  </svg>
                </a>
              </button>
            </div>
          ) : (
            <button type="button">
              <a
                href="/login"
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
                <a href="/contact">Contacter Nous</a>
              </li>
            {isUser ? (
              <li>
                <a href="/" onClick={onLogout}>Logout</a>
              </li>
            ) : (
              <li>
                <a href="/login">Se Connecter</a>
              </li>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
