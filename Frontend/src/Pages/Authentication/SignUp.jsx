// src/Pages/Authentication/SignUp.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../Utils/api';
import { AuthContext } from '../../context/AuthContext';
import bgimage from '../../Assets/bgImage.avif';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', { username, email, password });
      login(res.data.token); // Update auth state
      navigate('/'); // Redirect to Home
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed');
    }
  };

  // Inline styles
  const containerStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle = {
    maxWidth: '400px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
    color: '#212529', // Changed to a dark color for contrast
    backdropFilter: 'blur(10px)', // Glassmorphism effect
    WebkitBackdropFilter: 'blur(10px)', // For Safari support
    border: '1px solid rgba(255, 255, 255, 0.3)',
  };

  const labelStyle = {
    color: '#212529', // Changed to a dark color for contrast
  };

  const inputStyle = {
    border: '2px solid #ff8c00',
    borderRadius: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#ff8c00',
    borderColor: '#ff8c00',
    borderRadius: '5px',
  };

  const linkStyle = {
    color: '#ff8c00',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 className="text-center mb-4 text-white">Sign Up</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-white" style={labelStyle}>Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={onChange}
              required
              style={inputStyle}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white" style={labelStyle}>Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              style={inputStyle}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white" style={labelStyle}>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              style={inputStyle}
            />
          </div>
          <button type="submit" className="btn w-100" style={buttonStyle}>
            Sign Up
          </button>
          <p className="text-center mt-3 text-white">
          <span>Already have an account? <a style={linkStyle} href="/SignIn">Sign In</a></span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
