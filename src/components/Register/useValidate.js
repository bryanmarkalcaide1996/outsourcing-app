export default function useValidate(data) {
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
