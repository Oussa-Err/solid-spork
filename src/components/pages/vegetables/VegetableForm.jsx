import React from "react";
import { Navbar } from "../../common";
import "./vegetableForm.css";
import "react-toastify/dist/ReactToastify.css";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";
import GetUsers from "./GetUsers";
import Footer from "../../common/footer/Footer";

const VegetableForm = () => {
  return (
    <>
      <div style={{ minHeight: "100dvh", backgroundColor: "#baae98" }}>
        <Navbar />
        <div className="vegetable-edit-container">
          <UpdateProduct />
          <CreateProduct />
          <GetUsers />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VegetableForm;
