import React from "react";
import "./spinner.css";

const Spinner = ({width, height}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <div className="spinner-container" style={{width: width, height: height}}>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default Spinner;
