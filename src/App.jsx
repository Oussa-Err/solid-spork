import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  ContactPage,
  ProductPage,
  Terms,
  Privacy,
  AboutPage,
  VegetableForm,
  LogIn,
  ItemPage,
  SignUp
} from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/vegetable-form" element={<VegetableForm />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/item" element={<ItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
