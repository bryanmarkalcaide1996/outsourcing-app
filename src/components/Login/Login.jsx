import React from "react";
import { useState, useEffect } from "react";
import useValidate from "../utils/useValidate";
import "./Login.css";

function Login({ setToken }) {
  const [user, setUser] = useState({ usernameInput: "", passwordInput: "" });
  const [errorLogs, setErrorLogs] = useState({});
  const [errorStat, setErrorStat] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function useHandleSubmit(e) {
    e.preventDefault();
    setErrorLogs(useValidate(user));
    setErrorStat(true);
  }

  useEffect(() => {
    if (Object.keys(errorLogs).length === 0 && errorStat) {
      setToken(true);
    }
  }, [errorLogs, errorStat, setToken]);
  return (
    <div className="login-section" onSubmit={useHandleSubmit}>
      <div className="login-form-container">
        <form className="login-form">
          <label className="login-form-label">
            <h3> Username</h3>
            <input
              autoComplete="off"
              type="text"
              id="usernameInput"
              className="login-inputs"
              onChange={handleChange}
              name="usernameInput"
              value={user.usernameInput}
            />
          </label>
          <small>{errorLogs?.usernameInput}</small>

          <label className="login-form-label">
            <h3> Password</h3>
            <input
              autoComplete="off"
              type="password"
              id="passwordInput"
              className="login-inputs"
              onChange={handleChange}
              name="passwordInput"
              value={user.passwordInput}
            />
          </label>
          <small>{errorLogs?.passwordInput}</small>

          <label className="login-form-label">
            <button className="login-inputs">Login</button>
          </label>
        </form>
      </div>
    </div>
  );
}
export default Login;
