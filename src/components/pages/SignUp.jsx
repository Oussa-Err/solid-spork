import React, { useState } from "react";
import "./pages-global.css";
import Navbar from "../common/navbar/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../common/spinner/Spinner";

const SignUp = () => {
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(input);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    if (
      !input.name ||
      !input.email ||
      !input.password ||
      !input.confirmedPassword
    ) {
      setErr("All fields are required.");
      console.log("executed" + err);
      return;
    } else if (input.password.length < 8) {
      setErr("Password must be at least 8 characters long.");
      return;
    } else if (input.password !== input.confirmedPassword) {
      setErr("Confirmed password should match password");
      return;
    }

    setErr(null);

    setIsLoading(true);
    await axios
      .post(`http://127.0.0.1:8080/api/v1/users/signup`, input)
      .then(() => {
        console.log("success");
        toast.success("user created Successfully");
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response?.data?.message || "An error occurred");
        console.log(err.response?.data?.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="login-signup-page">
      <Navbar />
      <div className="login-signup-body">
        <form className="form">
          <div className="title">
            Welcome,
            <br />
            <span>sign up to continue</span>
          </div>
          <input
            required
            type="name"
            placeholder="Name"
            name="name"
            className="input"
            value={input.name}
            onChange={handleChange}
          />
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            className="input"
            value={input.email}
            onChange={handleChange}
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            className="input"
            value={input.password}
            onChange={handleChange}
            minLength="8"
          />
          <input
            required
            type="password"
            placeholder="Confirm password"
            name="confirmedPassword"
            className="input"
            value={input.confirmedPassword}
            onChange={handleChange}
            minLength="8"
          />
          {err && (
            <div className="">
              <div className="error-alert">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="error-svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="error-prompt-container">
                    <p className="error-prompt-heading">
                      {err.split(":")[2] || err}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <p className="already">
            Already have an account?
            <a className="logIn" href="/login">
              &nbsp;Log In
            </a>
          </p>
          {isLoading ? (
            <button className="button-confirm" >
              <Spinner width={"50px"} height={"50px"}/>
            </button>
          ) : (
            <button className="button-confirm" onClick={(e) => handleSubmit(e)}>
              Let`s go →
            </button>
          )}
          <p style={{ fontSize: "small", opacity: "70%" }}>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
