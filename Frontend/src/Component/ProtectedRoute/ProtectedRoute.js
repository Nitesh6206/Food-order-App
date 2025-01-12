// src/components/ProtectedRoute/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth.token) {
    return <Navigate to="/SignIn" replace />;
  }

  return children;
};

export default ProtectedRoute;