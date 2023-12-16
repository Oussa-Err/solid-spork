import "./vegetableForm.css";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";
import Footer from "../../common/footer/Footer";
import GetUsers from "./GetUsers";
import { Navbar } from "../../common";

const VegetableForm = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
