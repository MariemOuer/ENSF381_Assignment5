import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Redirect them to the /login page, but save the current location they were trying to go to
    return <Navigate to="/login" replace />;
  }

  return children;
};
