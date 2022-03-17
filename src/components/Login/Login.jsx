import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetData from "../utils/useGetData";
import useValidate from "../utils/useValidate";
import "./Login.css";

function Login({ setToken }) {
  const [user, setUser] = useState({ usernameInput: "", passwordInput: "" });
  const [errorLogs, setErrorLogs] = useState({});
  const [retrieveUserInfo, setRetrieveUserInfo] = useState(
    useGetData("currentUser", "obj")
  );
  const [errorStat, setErrorStat] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function useHandleSubmit(e) {
    e.preventDefault();
    setErrorLogs(useValidate(user, setRetrieveUserInfo));
    setErrorStat(true);
  }

  useEffect(() => {
    if (Object.keys(errorLogs).length === 0 && errorStat) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...retrieveUserInfo, isAuthenticated: true })
      );
      navigate("/profile");
    }
  }, [errorLogs, errorStat, setToken, navigate, retrieveUserInfo]);
  return (
    <div className="login-section">
      <div className="login-form-container">
        <form className="login-form" onSubmit={useHandleSubmit}>
          <h1> Log In</h1>
          <p> Already have an Account?</p>

          <label className="login-form-label">
            <input
              autoComplete="off"
              type="text"
              id="usernameInput"
              onChange={handleChange}
              name="usernameInput"
              value={user.usernameInput}
              placeholder="Username"
            />
          </label>
          <div className="small-text">
            <small>{errorLogs?.usernameInput}</small>
          </div>

          <label className="login-form-label">
            <input
              autoComplete="off"
              type="password"
              id="passwordInput"
              onChange={handleChange}
              name="passwordInput"
              value={user.passwordInput}
              placeholder="Password"
            />
          </label>
          <div className="small-text">
            <small>{errorLogs?.passwordInput}</small>
          </div>

          <div className="login-form-label bottom-area">
            <button className="login-btn">Login</button>

            <div className="divider"></div>
            <a href="/" className="register">
              Sign in with Google
            </a>
            <div className="divider"></div>
            <a href="/register" className="register">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
