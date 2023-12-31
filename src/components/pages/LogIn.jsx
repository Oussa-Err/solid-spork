import React from "react";
import "./pages-global.css";
import Navbar from "../common/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { email, password } = e.target;
    setInput((prev) => ({ ...prev, email, password }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://127.0.0.1:8080/api/v1/users/login`, input)
      .then((res) => {
        toast.success("you are now loged in.");
      })
      .catch(console.log);
  };

  return (
    <div className="login-signup-page">
      <Navbar />
      <div className="login-signup-body">
        <form className="form">
          <div className="title">
            Welcome,
            <br />
            <span>&nbsp; &nbsp;Log in to continue</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input"
            value={input.email}
            onChange={handleOnChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input"
            value={input.password}
            onChange={handleOnChange}
          />
          <p>
            <a className="logIn" href="/forgetpassword">
              Forgot password?
            </a>
          </p>
          <button className="button-confirm" onClick={handleSubmit}>
            Let`s go →
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
