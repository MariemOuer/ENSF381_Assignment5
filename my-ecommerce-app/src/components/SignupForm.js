import React, { useState } from 'react';

const SignupForm = ({ switchToLogin }) => {
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password, confirmPassword, email } = event.target.elements;

    if (!username.value || !password.value || !confirmPassword.value || !email.value) {
      setMessage({ text: 'All fields are required.', type: 'error' });
      return;
    }

    if (password.value !== confirmPassword.value) {
      setMessage({ text: 'Passwords do not match.', type: 'error' });
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
          email: email.value,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to sign up.');
      }

      setMessage({ text: 'User signed up successfully!', type: 'success' });
    } catch (error) {
      console.error('Error:', error);
      setMessage({ text: error.message, type: 'error' });
    }
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
          <input name="username" type="text" placeholder="Username" required />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input name="password" type="password" placeholder="Password" required />
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input name="confirmPassword" type="password" placeholder="Confirm Password" required />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input name="email" type="email" placeholder="Email" required />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
