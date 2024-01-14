import React, { useEffect, useState } from "react";
import "./pages-global.css";
import { logInUser } from "../../redux/actions/userAction";
import Navbar from "../common/navbar/Navbar";
import Spinner from "../common/spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.error);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const loginResponse = async () => {
    if (user.status === "success") {
      console.log("Executed on success!");
      toast.success("Logged in successful!");
    }
  };

  useEffect(() => {
    setErr(error);
    loginResponse();
  }, [error, user]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!input.email || !input.password) {
      setErr("All fields are required");
      setIsLoading(false);
      return;
    }

    const response = await dispatch(logInUser(input));
    setIsLoading(false);
  };

  return (
    <div className="login-signup-page">
      <Navbar />
      <div className="login-signup-body">
        <form className="form">
          <div className="title">
            Welcome,
            <br />
            <span>&nbsp;Log in to continue</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input"
            value={input.email}
            onChange={handleOnChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input"
            value={input.password}
            onChange={handleOnChange}
            required
          />
          {err && (
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
          )}
          <div className="text-center logIn">
            <span>
              Don't have an account?<a href="/signup">&nbsp; Sign up</a>
            </span>
          </div>
          {isLoading ? (
            <button className="button-confirm">
              <Spinner width={"50px"} height={"50px"} />
            </button>
          ) : (
            <button className="button-confirm" onClick={(e) => handleSubmit(e)}>
              Let`s go →
            </button>
          )}
          <a
            style={{ fontSize: "small", opacity: "70%" }}
            href="/forgetpassword"
          >
            Forgot password?&nbsp;
          </a>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LogIn;
