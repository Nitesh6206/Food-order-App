import React from 'react';
import heroImage from '../../Assets/bg-hero.jpg';
import { Link } from 'react-router-dom';
import './HeroSection.css'; // Import the CSS file for animations

const HeroSection = () => {
  return (
    <div
      className="container-xxl py-5 mb-5"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'white',
        overflow: 'hidden', // Ensures no overflow from content
      }}
    >
      {/* Overlay for better text readability */}
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker overlay for better contrast
          zIndex: 1,
        }}
      ></div>
      <div className="container my-5 py-5" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center g-5">
          {/* Left Column - Text Section */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1
              className="display-3 animated fadeIn" // Added fadeIn class
              style={{
                animationDelay: '0.1s',
                fontSize: '3rem', // Larger font size for impact
                fontWeight: 'bold', // Bold text for emphasis
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow for depth
              }}
            >
              Enjoy Our<br />Delicious Meal
            </h1>
            <p className="animated fadeIn mb-4 pb-2" style={{
              animationDelay: '0.2s',
              fontSize: '1.25rem', // Slightly larger font size
              lineHeight: '1.5', // Improved line height for readability
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)', // Text shadow for depth
            }}>
              Explore a diverse selection of delicious meals, from local favorites to international delights. Order effortlessly and enjoy your culinary journey delivered right to your door!
            </p>
            <Link
              to="/Menu"
              className="btn py-sm-3 px-sm-5 me-3 animated fadeIn shadow-lg"
              style={{
                backgroundColor: '#ff8c00', // Consistent orange color
                color: 'white',
                textDecoration: 'none',
                animationDelay: '0.3s',
                borderRadius: '25px', // Rounded button corners for a modern look
                padding: '10px 20px', // Adjust padding for button
                transition: 'background-color 0.3s, transform 0.3s', // Add transition for hover effect
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e07b00')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff8c00')}
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
