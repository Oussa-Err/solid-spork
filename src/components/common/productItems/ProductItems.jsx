import "./productItems.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiCloseLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../spinner/Spinner";
import SearchBar from "../searchBar/SearchBar";

const ProductItems = () => {
  const [product, setProduct] = useState(null);
  const [details, setDetails] = useState([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8080/api/v1/products/${genre}`)
      .then((res) => {
        setTimeout(() => {
          setProduct(res.data);
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        setErrorMessage("Unable to fetch user list");
        setIsLoading(false);
      });
  }, [genre, page]);

  const viewItem = (prod) => {
    setDetails([{ ...prod }]);
  };

  const setPageHandler = (no) => {
    
  };

  const filterByGenre = (e, genre) => {
    e.preventDefault();
    if (genre.toString().length > 0) {
      setGenre("?genre=" + genre);
    } else {
      setGenre("");
    }
    setPage(1);
  };

  if (isLoading) return <Spinner />;

  if (!product) {
    return (
      errorMessage && (
        <div className="notifications-container">
          <div className="error-alert">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="error-svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="error-prompt-container">
                <p className="error-prompt-heading">
                  something went wrong please try again later
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }

  return (
    <div className="product_items-container">
      <div
        className="filter_by-container"
        style={{
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <details>
          <summary style={{ fontSize: "15px" }}>
            Filter by
            <svg
              height="21"
              viewBox="0 0 21 21"
              width="21"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "15px" }}
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
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
          </summary>
          <nav className="menu">
            <a href="#all" onClick={(e) => filterByGenre(e, "")}>
              All
            </a>
            <a href="#oil" onClick={(e) => filterByGenre(e, "oil")}>
              Oil
            </a>
            <a
              href="#vegetables"
              onClick={(e) => filterByGenre(e, "vegetables")}
            >
              Vegetables
            </a>
            <a href="#meat" onClick={(e) => filterByGenre(e, "meat")}>
              Meat
            </a>
            <a href="#eggs" onClick={(e) => filterByGenre(e, "eggs")}>
              Eggs
            </a>
          </nav>
        </details>
      </div>
      <div className="filter_bar-container">
        <SearchBar placeholder="SEARCH..." data={product.data} />
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
      <div className="grid-container" id="products-items">
        {isLoading ? (
          <Spinner />
        ) : (
          product.data.slice(page * 6 - 6, page * 6).map((elem, index) => (
            <div className="card" key={index}>
              <FontAwesomeIcon
                className="ellipsis-icon"
                icon={faEllipsisVertical}
              />
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
                <button
                  className="card-btn"
                  onClick={() => {
                    viewItem(elem),
                    (document.body.style.overflow = "hidden");
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                    <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                    <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                    <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {product.data.length > 0 && (
        <div className="pagination_container">
          <ul className="pagination">
            <li
              style={page === 1 ? { display: "none" } : { display: "block" }}
              onClick={() => {
                setPageHandler(page - 1);
              }}
            >
              see less
            </li>
  
            <li
              style={
                page === Math.ceil(product.data.length / 6)
                  ? { display: "none" }
                  : { display: "block" }
              }
              onClick={(e) => {
                setPageHandler(page + 1)
              }}
            >
              see more
            </li>
          </ul>
        </div>
      )}

      {details.map((elem, i) => (
        <div
          className="card-view"
          style={{
            backdropFilter: details.length > 0 ? "blur(10px)" : "none",
            zIndex: details.length > 0 ? "3" : "-1",
          }}
          key={i}
        >
          <div className="cards" key={i}>
            <RiCloseLine
              color="#fff"
              className="faCircleMinus"
              size={27}
              onClick={() => {setDetails([]),(document.body.style.overflow = "auto")}}
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
                <button>
                  <span className="button_top">Add to Basket</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItems;
