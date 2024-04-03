import React from 'react';
import Header from './Header';
import Footer from './Footer';

const SignupForm = ({ switchToLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, confirmPassword, email } = event.target.elements;
    if (!username.value || !password.value || !confirmPassword.value || !email.value) {
      alert('All fields are required.');
      return;
    }
    if (password.value !== confirmPassword.value) {
      alert('Passwords do not match.');
      return;
    }
    // Here you would handle the signup logic
    console.log('Signing up with', username.value, email.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username
          <input name="username" type="text" placeholder="Username" />
        </label>
      </div>
      <div>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
      </div>
      <div>
        <label>
          Confirm Password
          <input name="confirmPassword" type="password" placeholder="Confirm Password" />
        </label>
      </div>
      <div>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={switchToLogin}>Switch to Login</button>
    </form>
  );
};

export default SignupForm;
