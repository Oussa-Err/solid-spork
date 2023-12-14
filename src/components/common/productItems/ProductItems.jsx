import "./productItems.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { RiCloseLine } from "react-icons/ri";
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
    setDetails([{ ...prod }]);
  };

  console.log(product);
  if (!product) return null;
  return (
    <div>
      <div className="filter_bar-container">
        <div style={{display: "flex", gap: "10px", cursor: "pointer"}}>
          <p style={{fontSize: "15px"}}>Filter by</p>
          <svg
            height="21"
            viewBox="0 0 21 21"
            width="21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              transform="translate(2 4)"
            >
              <path d="m4.5 0c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1z" />
              <path d="m16.5 2h-11" />
              <path d="m3.5 2h-3" />
              <path d="m4.5 10c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1z" />
              <path d="m16.5 12h-11" />
              <path d="m3.5 12h-3" />
              <path d="m12.5 5c.5522847 0 1 .44771525 1 1v2c0 .55228475-.4477153 1-1 1s-1-.44771525-1-1v-2c0-.55228475.4477153-1 1-1z" />
              <path d="m11.5 7h-11" />
              <path d="m16.5 7h-3" />
            </g>
          </svg>
        </div>
        <div class="input-container">
          <input
            type="text"
            name="text"
            class="input"
            placeholder="search..."
          />
          <span class="icon">
            <svg
              width="19px"
              height="19px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  opacity="1"
                  d="M14 5H20"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  opacity="1"
                  d="M14 8H17"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                  stroke="#000"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  opacity="1"
                  d="M22 22L20 20"
                  stroke="#000"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
        </div>
        <button>
          <a
            href="/vegetable-form"
            className="button_top"
            style={{ color: "#000000" }}
          >
            Edit
          </a>
        </button>
      </div>
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
                <button><span className="button_top">Add to Basket</span></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItems;
