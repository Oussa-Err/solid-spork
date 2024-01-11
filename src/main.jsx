import "./index.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "../src/redux/store";
import { Provider } from "react-redux";
import Global_spinner from "./components/common/global_spinner/Global_spinner";

const MainApp = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return <Provider store={store}>{loading ? <Global_spinner /> : <App />}</Provider>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
