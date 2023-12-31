import React, { useState, useEffect } from "react";
import "./productItems.css";
import { RiCloseLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../spinner/Spinner";
import SearchBar from "../searchBar/SearchBar";
import FilterBy from "../filterBy/FilterBy";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/actions/productAction";
import Pagination from "../pagination/Pagination";

const ProductItems = () => {
  const [details, setDetails] = useState([]);
  const [more, setMore] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    const fetchDataAndSetLoading = async () => {
      setIsLoading(true);
      await dispatch(fetchData())
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    };
    fetchDataAndSetLoading();
  }, [dispatch]);

  const viewItem = (prod) => {
    setDetails([{ ...prod }]);
  };

  const setPageHandler = (no) => {
    if (no > 0 && no <= Math.round(data.data.length / 4) && no !== more)
      setMore(no);
  };

  console.log(isLoading);
  if (isLoading) {
    console.log("spinner executed...");
    return <Spinner />;
  }

  if (!data) {
    return (
      error && (
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
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    fillRule="evenodd"
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
      <FilterBy  />
      <div className="filter_bar-container" id="products-items">
        <SearchBar placeholder="SEARCH..." data={data.data} />
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
        {data.data.slice(0, more * 4).map((elem, index) => (
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
                  viewItem(elem), (document.body.style.overflow = "hidden");
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
        ))}
      </div>
      <Pagination data={data} onPageChange={setPageHandler} more={more} />
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
              onClick={() => {
                setDetails([]), (document.body.style.overflow = "auto");
              }}
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
