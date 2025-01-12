// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Ensure correct import

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    user: null,
  });

  useEffect(() => {
    if (auth.token) {
      try {
        const decoded = jwtDecode(auth.token);
        setAuth((prev) => ({ ...prev, user: decoded.userId }));
      } catch (err) {
        console.error('Invalid token');
        setAuth({ token: null, user: null });
        localStorage.removeItem('token');
      }
    }
  }, [auth.token]);

  const login = (token) => {
    localStorage.setItem('token', token);
    setAuth({ token, user: jwtDecode(token).userId });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
