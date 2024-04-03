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
        <LoginForm switchToSignup={() => setShowLogin(false)} />
      ) : (
        <SignupForm switchToLogin={() => setShowLogin(true)} />
      )}
      <Footer />
    </div>
  );
};

export default LoginPage;
