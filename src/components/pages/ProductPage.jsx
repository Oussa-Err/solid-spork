import React from "react";
import { Footer, ProductHeader, ProductItems } from "../common";
import "./signUp.css";

const ProductPage = () => {
  return (
    <>
      <ProductHeader />
      <div className="productpage">
        <ProductItems />
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
