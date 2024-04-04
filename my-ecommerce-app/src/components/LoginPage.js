import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Header from './Header';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true); // true to show LoginForm, false for SignupForm

  return (
    <div>
      <Header />
      {showLogin ? (
        <div>
          <LoginForm />
          <button type="button" onClick={() => setShowLogin(false)}>Switch to Signup</button>
        </div>
      ) : (
        <div>
          <SignupForm />
          <button type="button" onClick={() => setShowLogin(true)}>Switch to Login</button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default LoginPage;
