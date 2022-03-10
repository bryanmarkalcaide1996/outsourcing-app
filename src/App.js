import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Homepage from "./components/Homepage/Homepage";
import { useState } from "react";
import Register from "./components/Register/Register";
import { useEffect } from "react";

function getDataBase() {
  let data = localStorage.getItem("users");
  if (data !== null) {
    return JSON.parse(localStorage.getItem("users"));
  } else {
    return localStorage.setItem("users", JSON.stringify([]));
  }
}
function App() {
  const [token, setToken] = useState(false);
  useEffect(() => {
    getDataBase();
  });

  return (
    <div className="App">
      <Router>
        <Link to="/register">Register</Link>

        <Switch>
          {token && (
            <Route path="/">
              <Homepage />
            </Route>
          )}

          <Route exact path="/">
            <Login />
          </Route>

          <Route path={"/register"}>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
