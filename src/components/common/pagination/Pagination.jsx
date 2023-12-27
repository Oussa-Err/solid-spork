import "./pagination.css";
import React from "react";

const Pagination = ({ data, onPageChange, more }) => {
  return (
    <div>
      <div className="pagination_container" id="pagination_container">
        {data.data.length > 0 && data.data.length > 4 && (
          <ul className="pagination">
            <a href="#pagination_container">
              <li
                style={more === 1 ? { display: "none" } : { display: "block" }}
                onClick={() => {
                  onPageChange(more - 1);
                }}
              >
                see less
              </li>
            </a>
            <li
              style={
                more === Math.ceil(data.data.length / 4)
                  ? { display: "none" }
                  : { display: "block" }
              }
              onClick={() => {
                onPageChange(more + 1);
              }}
            >
              see more
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Pagination;
