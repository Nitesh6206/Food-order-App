// src/Pages/Authentication/SignIn.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Utils/api";
import { AuthContext } from "../../context/AuthContext";
import bgimage from "../../Assets/bgImage.avif";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { username, password });
      login(res.data.token); // Update auth state
      navigate("/"); // Redirect to Home
    } catch (err) {
      setError(err.response.data.msg || "Login failed");
    }
  };

  const containerStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    color: "#343a40", // Dark text color for labels
  };

  const inputStyle = {
    border: "2px solid #ff8c00",
    borderRadius: "5px",
    transition: "border-color 0.3s", // Smooth border color transition
  };

  const buttonStyle = {
    backgroundColor: "#ff8c00",
    borderColor: "#ff8c00",
    borderRadius: "5px",
    color: "white",
    transition: "background-color 0.3s, transform 0.3s",
  };

  const linkStyle = {
    color: "#ff8c00",
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = "#e07b00"; // Darker on hover
    e.currentTarget.style.transform = "scale(1.05)"; // Slight zoom on hover
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = "#ff8c00"; // Original color
    e.currentTarget.style.transform = "scale(1)"; // Reset zoom
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 className="text-center mb-4 text-black text-white">Sign In</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-white" style={labelStyle}>
              Username
            </label>
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
            <label htmlFor="password" className="form-label text-white" style={labelStyle}>
              Password
            </label>
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
          <button
            type="submit"
            className="btn w-100"
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Sign In
          </button>
        </form>
        <p className="text-center mt-3 text-white">
          <span>
            Don't have an account?{" "}
            <a style={linkStyle} href="/SignUp">
              Sign Up
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
