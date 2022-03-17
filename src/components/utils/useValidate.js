import useGetData from "./useGetData";

export default function useValidate(data, retrieveInfo) {
  let db = useGetData("users", "arr");
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
    id,
  } = data;

  // This line will retrieve data from database based on the criteria given below
  const foundData = db.find(
    ({ usernameInput: username, emailInput: email }) =>
      usernameInput === username || emailInput === email
  );

  // This validation section is used to validate registration inputs it checks for the number of index and if the Object.keys count tallies with the given condition, it will enter inside the registration validation.
  if (Object.keys(data).length > 6) {
    if (foundData) {
      if (foundData.usernameInput === usernameInput) {
        error.usernameInput = "* Username already taken";
      }
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
    if (foundData?.emailInput === emailInput) {
      error.emailInput = "*Email already taken";
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
  }
  // This section validates Login Page
  else {
    if (foundData) {
      if (foundData.passwordInput !== passwordInput) {
        error.passwordInput = "* Invalid password !";
      } else if (foundData.usernameInput !== usernameInput) {
        error.usernameInput = "* Username does not exist !";
      } else {
        retrieveInfo(foundData);
        return error;
      }
    } else {
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
