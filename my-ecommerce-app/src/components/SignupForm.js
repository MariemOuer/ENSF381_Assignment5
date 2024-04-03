import React, { useState } from 'react';

const SignupForm = ({ switchToLogin }) => {
  const [message, setMessage] = useState({ text: '', type: '' }); // Updated to handle both error and success messages

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage({ text: '', type: '' }); // Reset message on new submission attempt
    const { username, password, confirmPassword, email } = event.target.elements;
    
    // Check for empty fields
    if (!username.value || !password.value || !confirmPassword.value || !email.value) {
      setMessage({ text: 'All fields are required.', type: 'error' });
      return;
    }
    
    // Check if passwords match
    if (password.value !== confirmPassword.value) {
      setMessage({ text: 'Passwords do not match.', type: 'error' });
      return;
    }
    
    // Simulate successful signup
    console.log('Signing up with', username.value, email.value);
    setMessage({ text: 'User signed up successfully!', type: 'success' }); // Set success message
  };

  return (
    <form onSubmit={handleSubmit}>
      {message.text && (
        <div style={{ color: message.type === 'error' ? 'red' : 'green', marginBottom: '10px' }}>
          {message.text}
        </div>
      )}
      <div>
        <label>
          Username:
          <input name="username" type="text" placeholder="Username" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input name="password" type="password" placeholder="Password" />
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input name="confirmPassword" type="password" placeholder="Confirm Password" />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input name="email" type="email" placeholder="Email" />
        </label>
      </div>
      <button type="submit">Submit</button>
      <div>
        <button type="button" onClick={switchToLogin}>Switch to Login</button>
      </div>
    </form>
  );
};

export default SignupForm;
