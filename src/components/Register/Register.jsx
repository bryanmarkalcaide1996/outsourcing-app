import { useState, useEffect } from "react";
import { v4 as uniqueID } from "uuid";
import "./Register.css";
import useValidate from "../utils/useValidate";
import { Navigate, useNavigate } from "react-router-dom";

function Register({ database }) {
  // This state will fetch initial data on local storage
  const [userDataBase, setUserDataBase] = useState(database);
  const [registerUser, setRegisterUser] = useState({
    usernameInput: "",
    emailInput: "",
    passwordInput: "",
    passwordReInput: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [errorLogs, setErrorLogs] = useState({});
  const [errorStat, setErrorStat] = useState(false);
  const [catalyst, setCatalyst] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  }

  function useHandleSubmit(e) {
    e.preventDefault();
    setErrorLogs(useValidate(registerUser));
    setCatalyst({ ...registerUser });
    setErrorStat(true);
  }

  useEffect(() => {
    if (Object.keys(errorLogs).length === 0 && errorStat) {
      setUserDataBase((prevState) => {
        const newUser = { id: uniqueID(), ...catalyst };
        return [...prevState, newUser];
      });
      navigate("/reg-success");
    }
  }, [errorLogs, errorStat, catalyst, navigate]);

  useEffect(() => {
    userDataBase && localStorage.setItem("users", JSON.stringify(userDataBase));
    setRegisterUser({
      usernameInput: "",
      emailInput: "",
      passwordInput: "",
      passwordReInput: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    });
  }, [userDataBase]);

  return (
    <article>
      <div className="form-container">
        <form className="registration-form" onSubmit={useHandleSubmit}>
          <div className="form-banner">
            <h2>Register</h2>
          </div>
          <div className="fields">
            <label className="registration-label" htmlFor="usernameInput">
              <span>Username:</span>
              <input
                className="input-fields"
                autoComplete="off"
                onChange={handleChange}
                type="text"
                id="usernameInput"
                name="usernameInput"
                value={registerUser.usernameInput}
              />
            </label>
            <small className="small-text">{errorLogs.usernameInput}</small>

            <label className="registration-label" htmlFor="emailInput">
              <span> Email:</span>
              <input
                className="input-fields"
                autoComplete="off"
                onChange={handleChange}
                type="email"
                id="emailInput"
                name="emailInput"
                value={registerUser.emailInput}
              />
            </label>
            <small className="small-text">{errorLogs.emailInput}</small>

            <label className="registration-label" htmlFor="passwordInput">
              <span> Password:</span>
              <input
                className="input-fields"
                autoComplete="off"
                onChange={handleChange}
                type="password"
                id="passwordInput"
                name="passwordInput"
                value={registerUser.passwordInput}
              />
            </label>
            <small className="small-text">{errorLogs.passwordInput}</small>

            <label className="registration-label" htmlFor="passwordReInput">
              <span> Confirm Password:</span>
              <input
                className="input-fields"
                autoComplete="off"
                onChange={handleChange}
                type="password"
                id="passwordReInput"
                name="passwordReInput"
                value={registerUser.passwordReInput}
              />
            </label>
            <small className="small-text">{errorLogs.passwordReInput}</small>

            <label className="registration-label" htmlFor="firstName">
              <span> First Name:</span>
              <input
                className="input-fields"
                autoComplete="off"
                onChange={handleChange}
                type="text"
                id="firstName"
                name="firstName"
                value={registerUser.firstName}
              />
            </label>
            <small className="small-text">{errorLogs.firstName}</small>

            <label className="registration-label" htmlFor="lastName">
              <span>Last Name:</span>
              <input
                className="input-fields"
                autoComplete="off"
                onChange={handleChange}
                type="text"
                id="lastName"
                name="lastName"
                value={registerUser.lastName}
              />
            </label>
            <small className="small-text">{errorLogs.lastName}</small>

            <label className="registration-label" htmlFor="phoneNumber">
              <span> Phone Number:</span>
              <input
                className="input-fields"
                autoComplete="off"
                onChange={handleChange}
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={registerUser.phoneNumber}
              />
            </label>
            <sup className="small-textOptional">
              {errorLogs.phoneNumber ? errorLogs.phoneNumber : "*Optional"}
            </sup>

            <label htmlFor="regBtn" className="registration-label">
              <span>Reg</span>
              <button className="input-fields reg-btn" id="regBtn">
                Register
              </button>
            </label>
          </div>
        </form>
      </div>
    </article>
  );
}

export default Register;
