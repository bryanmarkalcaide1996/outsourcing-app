import useGetData from "./useGetData";

export default function useValidate(data) {
  let db = useGetData();
  const regEx = /^[^\s@]+@[^\s@]+.[^\s@]{2,}$/;
  const regX =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
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

  const foundData = db.find(
    ({ usernameInput: username }) => usernameInput === username
  );

  if (Object.keys(data).length > 6) {
    if (foundData) {
      error.usernameInput = "* Username already taken";
    }

    if (!usernameInput || usernameInput?.length < 8) {
      error.usernameInput =
        "*  Username required and must be atleast 8 characters long!";
    }
    if (!emailInput) {
      error.emailInput = "*  Field cannot be empty";
    } else if (!regEx.test(emailInput)) {
      error.emailInput = "Invalid email format!";
    }
    if (!passwordInput || passwordInput.length <= 8) {
      error.passwordInput =
        "*  Password is required and must be atleast 9 characters long!";
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

    if (!regX.test(phoneNumber)) {
      if (phoneNumber.length <= 0) {
        return error;
      } else {
        error.phoneNumber = "*  Please enter a valid phone number";
      }
    }
    return error;
  } else {
    if (foundData) {
      if (foundData.passwordInput !== passwordInput) {
        error.passwordInput = "* Invalid password !";
      }
    } else {
      error.usernameInput = "* Username does not exist !";
    }

    if (!usernameInput || usernameInput?.length < 8) {
      error.usernameInput =
        "*  Username required and must be atleast 8 characters long!";
    }
    if (!passwordInput || passwordInput.length <= 8) {
      error.passwordInput =
        "*  Password is required and must be atleast 9 characters long!";
    } else if (!foundData) {
      error.passwordInput = "* Invalid password";
    }
    return error;
  }
}
