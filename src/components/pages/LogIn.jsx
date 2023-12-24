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
    <>
      <Navbar />
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
        <button className="button-confirm">Let`s go →</button>
      </form>
    </>
  );
};

export default SignUp;
