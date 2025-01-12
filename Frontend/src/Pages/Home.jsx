// src/pages/Home/Home.js

import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Service from './Service/Service';
import About from './About/About';



const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Service/>
      <About/>
    </div>
  );
};

export default Home;
