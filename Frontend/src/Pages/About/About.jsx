import React from 'react';
import about1 from '../../Assets/about-1.jpg';  // Replace with actual image path
import about2 from '../../Assets/about-2.jpg';  // Replace with actual image path
import about3 from '../../Assets/about-3.jpg';  // Replace with actual image path
import about4 from '../../Assets/about-4.jpg';  // Replace with actual image path

const About = () => {
  return (
    <div className="about-container container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.1s"
                  src={about1}
                  alt="About Image 1"
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.3s"
                  src={about2}
                  alt="About Image 2"
                  style={{ marginTop: '25%' }}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.5s"
                  src={about3}
                  alt="About Image 3"
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.7s"
                  src={about4}
                  alt="About Image 4"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">
              About Us
            </h5>
            <h1 className="mb-4">
              Welcome to <i className="fa fa-utensils text-primary me-2"></i>Food
            </h1>
            <p className="mb-4">
              We are proud to present our restaurant, where culinary excellence meets a warm and inviting atmosphere.
            </p>
            <p className="mb-4">
              With years of experience in the culinary arts, our team is dedicated to providing you with an exceptional dining experience. Our chefs use only the finest ingredients to create dishes that will delight your palate.
            </p>
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">
                    15
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0">Experience</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">
                    50
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Popular</p>
                    <h6 className="text-uppercase mb-0">Master Chefs</h6>
                  </div>
                </div>
              </div>
            </div>
            <a className="btn py-3 px-5 mt-2" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
