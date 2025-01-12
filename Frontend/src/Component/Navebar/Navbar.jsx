import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaHome, FaUtensils, FaServicestack, FaInfoCircle, FaPhoneAlt, FaShoppingCart } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/SignIn");
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow"
      style={{
        background: "#ff7e5f", // Navbar background color
        padding: "1rem 2rem",
      }}
    >
      <NavLink className="navbar-brand" to="/" style={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}>
        Foodie's
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {[
            { name: "Home", icon: <FaHome /> },
            { name: "Menu", icon: <FaUtensils /> },
            { name: "Service", icon: <FaServicestack /> },
            { name: "About", icon: <FaInfoCircle /> },
            { name: "Contact", icon: <FaPhoneAlt /> },
          ].map((item) => (
            <li className="nav-item" key={item.name}>
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                to={`/${item.name}`}
                style={({ isActive }) => ({
                  color: isActive ? "#ff7e5f" : "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                  backgroundColor: isActive ? "white" : "transparent",
                })}
              >
                <span style={{ marginRight: "5px" }}>{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Authentication Links */}
        <ul className="navbar-nav ms-auto">
          {auth.token ? (
            <>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  to="/Order"
                  style={({ isActive }) => ({
                    color: isActive ? "#ff7e5f" : "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    transition: "background-color 0.3s ease, transform 0.3s ease",
                    backgroundColor: isActive ? "white" : "transparent",
                  })}
                >
                  <FaShoppingCart />
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="btn"
                  onClick={handleLogout}
                  style={{
                    marginLeft: "10px",
                    padding: "0.5rem 1rem",
                    backgroundColor: "white",
                    color: "#ff7e5f",
                    fontWeight: "bold",
                    borderRadius: "4px",
                    border: "none",
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  to="/SignIn"
                  style={({ isActive }) => ({
                    color: isActive ? "#ff7e5f" : "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    transition: "background-color 0.3s ease, transform 0.3s ease",
                    backgroundColor: isActive ? "white" : "transparent",
                  })}
                >
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  to="/SignUp"
                  style={({ isActive }) => ({
                    color: isActive ? "#ff7e5f" : "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    transition: "background-color 0.3s ease, transform 0.3s ease",
                    backgroundColor: isActive ? "white" : "transparent",
                  })}
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
