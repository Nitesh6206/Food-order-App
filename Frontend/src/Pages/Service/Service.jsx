import React from 'react';
import './service.css'

const Service = () => {
  const services = [
    {
      icon: 'fa-user-tie',
      title: 'Master Chefs',
      description: 'Our chefs are highly trained professionals who create exquisite dishes.',
    },
    {
      icon: 'fa-utensils',
      title: 'Quality Food',
      description: 'We provide top-quality food made from the freshest ingredients.',
    },
    {
      icon: 'fa-cart-plus',
      title: 'Online Order',
      description: 'Easily order your favorite meals online from the comfort of your home.',
    },
    {
      icon: 'fa-headset',
      title: '24/7 Service',
      description: 'We are available around the clock to cater to your needs.',
    },
    {
      icon: 'fa-shipping-fast',
      title: 'Fast Delivery',
      description: 'We ensure your food is delivered hot and fresh in no time.',
    },
    {
      icon: 'fa-seedling',
      title: 'Eco-Friendly',
      description: 'We use sustainable practices and eco-friendly packaging.',
    },
  ];

  return (
    <div className="service-container">
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 + index * 0.2}s`}
              key={index}
            >
              <div className="service-item">
                <div className="p-4 text-center">
                  <i className={`fa ${service.icon} service-icon`}></i>
                  <h5 className="service-title">{service.title}</h5>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
