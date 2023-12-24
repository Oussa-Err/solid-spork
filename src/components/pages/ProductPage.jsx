import React from "react";
import { Footer, ProductHeader, ProductItems, Testimonials } from "../common";
import "./pages-global.css";

const ProductPage = () => {
  return (
    <div style={{width: '100dvw'}}>
      <ProductHeader />
      <div className="productpage">
        <ProductItems />
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default ProductPage;
