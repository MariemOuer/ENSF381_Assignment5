import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import { AuthProvider } from './components/AuthContext'; // Ensure this is the only import for AuthProvider
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate replace to="/homepage" />} /> {/* Redirect to homepage */}
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/products" element={
              <ProtectedRoute>
                <Productpage />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
