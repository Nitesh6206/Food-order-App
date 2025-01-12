import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="container-fluid bg-black text-light py-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Company Section */}
        <div className="mb-2 mb-md-0 text-center text-md-start">
          <h5 className="text-uppercase text-orange mb-2">Company</h5>
          <a className="text-muted d-block mb-1" href="#">About Us</a>
          <a className="text-muted d-block mb-1" href="#">Contact Us</a>
          <a className="text-muted d-block" href="#">Terms & Conditions</a>
        </div>
        
        {/* Social Media Section */}
        <div className="mb-2 mb-md-0 text-center">
          <h5 className="text-uppercase text-orange mb-2">Follow Us</h5>
          <div className="d-flex justify-content-center">
            <a className="text-light mx-2" href="#" style={{ fontSize: '1.5rem' }}>
              <FaTwitter />
            </a>
            <a className="text-light mx-2" href="#" style={{ fontSize: '1.5rem' }}>
              <FaFacebookF />
            </a>
            <a className="text-light mx-2" href="#" style={{ fontSize: '1.5rem' }}>
              <FaYoutube />
            </a>
            <a className="text-light mx-2" href="#" style={{ fontSize: '1.5rem' }}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-md-end">
          <small className="text-muted">&copy; 2024 Your Site Name. All Rights Reserved.</small>
          <br />
          <small className="text-muted">Designed by <a className="text-orange text-decoration-none" href="/">Nitesh Kumar</a></small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
