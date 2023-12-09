import React from "react";
import "./productItems.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductItems = () => {
  const [product, setProduct] = useState(null);

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

  console.log(product);
  if (!product) return null;
  return (
    <>
      <h1>
        <button>
          <a href="/vegetable-form">Edit vegetables</a>
        </button>
      </h1>
      <div className="cards">
        <div className="grid-container">
          {product.data.map((el, index) => (
            <div className="card" key={index}>
              <div>
                <img
                  src={el.photo_url.url || el.photo_url}
                  width="100"
                  height="100"
                  alt="Product Image"
                  className="image"
                />
              </div>
              <div className="content">
                <h2 className="product-title">{el.name}</h2>
                <p className="product-price">{el.price}</p>
                <button className="add-to-basket-button">Add to Basket</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductItems;
