import React from "react";
import { Route, useNavigate } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setAuthenticated(token);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : navigate("/login")
      }
    />
  );
}

export default PrivateRoute;
