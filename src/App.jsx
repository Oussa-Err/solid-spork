import "./App.css";
import React, { useEffect, useState } from "react";
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
  SignUp,
  Dashboard,
  PrivateRoute,
} from "./components";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const loggedInUser = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    if (loggedInUser && loggedInUser !== "null") {
      setIsAuth(true)
    }
  }, [isAuth])


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
        <Route path="/dashboard" element={isAuth? <Dashboard user={loggedInUser}/> : <LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
