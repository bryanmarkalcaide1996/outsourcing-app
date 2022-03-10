import React from "react";
import { useState } from "react";
import useValidate from "../Register/useValidate";
import useValitade from "../Register/useValidate";
import "./Login.css";

function Login(props) {
  const [user, setUser] = useState({ usernameInput: "", passwordInput: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  // const x = useValidate(user);

  return (
    <div className="login-section">
      <div className="login-form-container">
        <form className="login-form">
          <label className="login-form-label">
            <h3> Username</h3>
            <input
              type="text"
              id="usernameInput"
              className="login-inputs"
              onChange={handleChange}
              name="usernameInput"
            />
          </label>

          <label className="login-form-label">
            <h3> Password</h3>
            <input
              type="password"
              id="passwordInput"
              className="login-inputs"
              onChange={handleChange}
              name="passwordInput"
            />
          </label>

          <label className="login-form-label">
            <button className="login-inputs">Login</button>
          </label>
        </form>
      </div>
    </div>
  );
}
export default Login;
