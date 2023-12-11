import React from "react";
import "./productItems.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { RiCloseLine } from "react-icons/ri";

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
    console.log([{ ...prod }]);
    setDetails([{ ...prod }]);
  };

  console.log(product);
  if (!product) return null;
  return (
    <div>
      <h1>
        <button>
          <a href="/vegetable-form" style={{ color: "white" }}>Edit vegetables</a>
        </button>
      </h1>
      <div className="cards">
        <div className="grid-container">
          {product.data.map((el, index) => (
            <div className="card" key={index}>
              <div>
                <img
                  src={el.photo_url.url || el.photo_url}
                  width="300"
                  height="200"
                  alt="Product Image"
                  className="image"
                />
              </div>
              <div className="content">
                <h2 className="product-title">{el.name}</h2>
                <p className="product-price">{el.price}</p>
                <button
                  className="add-to-basket-button"
                  onClick={() => viewItem(el)}
                >
                  view
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card-view" style={{backdropFilter: details.length>0 ? "blur(10px)" : "none", zIndex: details.length>0 ? "1" : "-1"}}>
        {details.map((elem, i) => (
          <div className="details" key={i}>
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setDetails([])}
              style={{ cursor: "pointer" }}
            />
            <div className="card-detailed">
              <div>
                <img
                  src={elem.photo_url.url || elem.photo_url}
                  width="100"
                  height="100"
                  alt="Product Image"
                  className="image"
                />
              </div>
              <div className="content">
                <h2 className="product-title">{elem.name}</h2>
                <p className="product-price">{elem.price}</p>
                <button className="add-to-basket-button">Add to Basket</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItems;
