import { useState, useEffect } from "react";
import { v4 as uniqueID } from "uuid";
import "./Register.css";

function getDataBase() {
  let data = localStorage.getItem("users");
  if (data) {
    return JSON.parse(data);
  } else {
    return localStorage.setItem("users", JSON.stringify([]));
  }
}
function Register() {
  // This state will fetch initial data on local storage
  const [userDataBase, setUserDataBase] = useState(getDataBase());
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

  useEffect(() => {
    if (Object.keys(errorLogs).length === 0 && errorStat) {
      setUserDataBase((prevState) => {
        const newUser = { id: uniqueID(), ...catalyst };
        return [...prevState, newUser];
      });
    }
  }, [errorLogs, errorStat, catalyst]);

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

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrorLogs(validator(registerUser));
    setCatalyst({ ...registerUser });
    setErrorStat(true);
  }

  function validator(data) {
    // const database = getDataBase();
    const regEx = /^[^\s@]+@[^\s@]+.[^\s@]{2,}$/;
    const error = {};
    const {
      usernameInput,
      emailInput,
      passwordInput,
      passwordReInput,
      firstName,
      lastName,
      phoneNumber,
    } = data;
    if (!usernameInput || usernameInput.length < 8) {
      error.usernameInput =
        "*  Username required and must be atleast 8 characters long!";
    }
    if (!emailInput) {
      error.emailInput = "*  Field cannot be empty";
    } else if (!regEx.test(emailInput)) {
      error.emailInput = "Invalid email format!";
    }
    if (!passwordInput || passwordInput.length < 8) {
      error.passwordInput =
        "*  Password is required and must be atleast 12 characters long!";
    }
    if (!passwordReInput || passwordReInput !== passwordInput) {
      error.passwordReInput = "*  The password you entered  did not match!";
    }
    if (!firstName) {
      error.firstName = "*    Field cannot be empty";
    }
    if (!lastName) {
      error.lastName = "*    Field cannot be empty";
    }
    if (phoneNumber.length !== 0 && phoneNumber.length < 10) {
      error.phoneNumber = "*  Invalid phone number";
    }
    return error;
  }

  return (
    <article>
      <div className="form-container">
        <h1>Register</h1>
        <form className="registration-form" onSubmit={handleSubmit}>
          <label className="registration-label">
            Username:
            <input
              autoComplete="off"
              onChange={handleChange}
              type="text"
              id="usernameInput"
              name="usernameInput"
              value={registerUser.usernameInput}
            />
            <small className="small-text">{errorLogs.usernameInput}</small>
          </label>

          <label className="registration-label">
            Email:
            <input
              autoComplete="off"
              onChange={handleChange}
              type="email"
              id="emailInput"
              name="emailInput"
              value={registerUser.emailInput}
            />
            <small className="small-text">{errorLogs.emailInput}</small>
          </label>

          <label className="registration-label">
            Password:
            <input
              autoComplete="off"
              onChange={handleChange}
              type="password"
              id="passwordInput"
              name="passwordInput"
              value={registerUser.passwordInput}
            />
            <small className="small-text">{errorLogs.passwordInput}</small>
          </label>

          <label className="registration-label">
            Confirm Password:
            <input
              autoComplete="off"
              onChange={handleChange}
              type="password"
              id="passwordReInput"
              name="passwordReInput"
              value={registerUser.passwordReInput}
            />
            <small className="small-text">{errorLogs.passwordReInput}</small>
          </label>

          <label className="registration-label">
            First Name:
            <input
              autoComplete="off"
              onChange={handleChange}
              type="text"
              id="firstName"
              name="firstName"
              value={registerUser.firstName}
            />
            <small className="small-text">{errorLogs.firstName}</small>
          </label>
          <label className="registration-label">
            Last Name:
            <input
              autoComplete="off"
              onChange={handleChange}
              type="text"
              id="lastName"
              name="lastName"
              value={registerUser.lastName}
            />
            <small className="small-text">{errorLogs.lastName}</small>
          </label>

          <label className="registration-label">
            Phone Number:
            <input
              autoComplete="off"
              onChange={handleChange}
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={registerUser.phoneNumber}
            />
            <sup className="small-text">
              {errorLogs.phoneNumber ? errorLogs.phoneNumber : "*Optional"}
            </sup>
          </label>
          <button>Register</button>
        </form>
      </div>
    </article>
  );
}

export default Register;
