import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Homepage from "./components/Homepage/Homepage";
import { useState } from "react";
import Register from "./components/Register/Register";
import useGetData from "./components/utils/useGetData";
import { useEffect } from "react";

function App() {
  const [database] = useState(useGetData("users", "arr"));
  const [token, setToken] = useState(useGetData("isLoggedIn", "bool"));

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(token));
  }, [token]);

  return (
    <div className="App">
      <Router>
        <nav className="navigation-bar">
          <ul className="navigation-container">
            <li className="navigation-link-container">
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li className="navigation-link-container">
              <Link to="/register" className="links">
                Register
              </Link>
            </li>
            <li className="navigation-link-container">
              <Link to="/users" className="links">
                Users
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          {token && (
            <Route path="/">
              <Homepage setToken={setToken} />
            </Route>
          )}

          <Route exact path="/">
            <Login setToken={setToken} />
          </Route>

          <Route path={"/register"}>
            <Register database={database} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
