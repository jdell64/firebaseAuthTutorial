export interface User {
  username: string; // required, must be 5-8 characters
  email: string; // required, must be valid email format
  password: string; // required, value must be equal to confirm password.
  confirmPassword: string; // required, value must be equal to password.
}
// https://scotch.io/tutorials/how-to-implement-a-custom-validator-directive-confirm-password-in-angular-2
