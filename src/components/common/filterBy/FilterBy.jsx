import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataByGenre } from "../../../redux/actions/productAction";

const FilterBy = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    dispatch(fetchDataByGenre(genre));
  }, [dispatch, genre]);

  console.log(data);

  const filterByGenre = (e, oneGenre) => {
    if (oneGenre === "all") {
      setGenre("");
    }else{
      setGenre("?genre=" + oneGenre);
    }
  };

  return (
    <div>
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
            <a href="#all" onClick={(e) => filterByGenre(e, "all")}>
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
    </div>
  );
};

export default FilterBy;
