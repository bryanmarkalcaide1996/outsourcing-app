import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Homepage from "./components/Homepage/Homepage";
import { useState } from "react";
import Register from "./components/Register/Register";

function App() {
  const [token, setToken] = useState(false);

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
