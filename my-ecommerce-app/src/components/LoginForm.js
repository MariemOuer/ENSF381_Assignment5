import React from 'react';
import Header from './Header';
import Footer from './Footer';

const LoginForm = ({ switchToSignup }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    if (!username.value || !password.value) {
      alert('Both fields are required.');
      return;
    }
    // Here you would handle the login logic
    console.log('Logging in with', username.value, password.value);
  };

  return (
    <form onSubmit={handleSubmit} name="loginForm">
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
      <button type="submit">Login</button>
      <div>
        <button type="button" onClick={switchToSignup}>Switch to Signup</button>
      </div>
    </form>
  );
};

export default LoginForm;
