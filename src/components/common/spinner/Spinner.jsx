import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div style={{width: "100dvw", display: "flex", justifyContent: "center"}}>
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default Spinner;
