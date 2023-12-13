import React from "react";
import "./productItems.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { RiCloseLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const ProductItems = () => {
  const [product, setProduct] = useState(null);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/v1/products/")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const viewItem = (prod) => {
    // console.log([{ ...prod }]);
    setDetails([{ ...prod }]);
  };

  console.log(product);
  if (!product) return null;
  return (
    <div>
      <h1>
        <button>
          <a href="/vegetable-form" style={{ color: "white" }}>
            Edit vegetables
          </a>
        </button>
      </h1>
      <div className="grid-container">
        {product.data.map((elem, index) => (
          <div className="card" key={index}>
            <div className="card-img">
              <img src={elem.photo_url.url} alt="" width="100" height="100" />
            </div>
            <div className="card-title">{elem.name}</div>
            <div className="card-subtitle">
              Product description. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </div>
            <hr className="card-divider" />
            <div className="card-footer">
              <div className="card-price">
                <span>MAD</span> {elem.price}
              </div>
              <button className="card-btn" onClick={() => viewItem(elem)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                  <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                  <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                  <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        className="card-view"
        style={{
          backdropFilter: details.length > 0 ? "blur(10px)" : "none",
          zIndex: details.length > 0 ? "1" : "-1",
        }}
      >
        {details.map((elem, i) => (
          <div className="cards">
            <RiCloseLine
              color="#fff"
              className="faCircleMinus"
              size={27}
              onClick={() => setDetails([])}
              style={{ cursor: "pointer", color: "black", fontSize: "larger" }}
            />
            <div className="card-img">
              <img
                src={elem.photo_url.url}
                width="100"
                height="100"
                alt="Product Image"
              />
              <div className="content">
                <h2 className="card-title">{elem.name}</h2>
                <div className="card-subtitle">
                  Product description. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit.
                </div>
                <div className="card-price">
                  <span>MAD</span> {elem.price}
                </div>
                <button className="button_top">Add to Basket</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItems;
