import React from "react";
import "./pages-global.css";
import Navbar from "../common/navbar/Navbar";

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
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
            <span>&nbsp; &nbsp;Log in to continue</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input"
          />
          <p>
            <a className="logIn" href="/forgetpassword">
              Forgot password?
            </a>
          </p>
          <button className="button-confirm">Let`s go →</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
