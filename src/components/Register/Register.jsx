import { useState, useEffect } from "react";
import { v4 as uniqueID } from "uuid";
import "./Register.css";

function getDataBase() {
  let usersData = JSON.parse(localStorage.getItem("users"));
  if (usersData) {
    return usersData;
  } else {
    localStorage.setItem("users", JSON.stringify([]));
  }
}

function Register(props) {
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

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrorLogs(validator(registerUser));
    setTimeout(() => {
      setErrorLogs({});
    }, 3000);

    // setUserDataBase((prevState) => {
    //   const newUser = { id: uniqueID(), ...registerUser };
    //   return [...prevState, newUser];
    // });

    // setRegisterUser("");
  }

  function validator(data) {
    const database = getDataBase();
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
    if (!passwordInput || passwordInput.length < 8) {
      error.passwordInput =
        "*  Password is required and must be atleast 12 characters long!";
    }
    if (!passwordReInput || passwordReInput !== passwordInput) {
      error.passwordReInput = "*  The password you entered  did not match!";
    }
    return error;
  }

  useEffect(() => {
    userDataBase && localStorage.setItem("users", JSON.stringify(userDataBase));
  }, [userDataBase]);

  return (
    <article>
      <div className="form-container">
        <h1>Register</h1>
        <form className="registration-form" onSubmit={handleSubmit}>
          <label className="registration-label">
            Username:
            <input
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
              onChange={handleChange}
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={registerUser.phoneNumber}
            />
            <small className="small-text">{errorLogs.Input}</small>
          </label>
          <button>Register</button>
        </form>
      </div>
    </article>
  );
}

export default Register;
