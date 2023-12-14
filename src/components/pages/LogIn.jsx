import React from "react";
import "./signUp.css";

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
    <form class="form">
      <div class="title">
        Welcome,
        <br />
        <span>Log in to continue</span>
      </div>
      <input type="email" placeholder="Email" name="email" class="input" />
      <input
        type="password"
        placeholder="Password"
        name="password"
        class="input"
      />
      <button class="button-confirm">Let`s go →</button>
    </form>
  );
};

export default SignUp;
