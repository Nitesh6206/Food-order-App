import React from 'react';

const Contact = () => {
    return (
        <div style={{ backgroundColor: 'white', color: 'black', padding: '0' }}>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-4">
                                    <h5 style={{ color: 'orange' }} className="section-title ff-secondary fw-normal text-start">
                                        Booking
                                    </h5>
                                    <p>
                                        <i className="fa fa-envelope-open text-primary me-2"></i>nitesh6206@gmail.com
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <h5 style={{ color: 'orange' }} className="section-title ff-secondary fw-normal text-start">
                                        General
                                    </h5>
                                    <p>
                                        <i className="fa fa-envelope-open text-primary me-2"></i>nitesh6206@gmail.com
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <h5 style={{ color: 'orange' }} className="section-title ff-secondary fw-normal text-start">
                                        Technical
                                    </h5>
                                    <p>
                                        <i className="fa fa-envelope-open text-primary me-2"></i>nitesh6206@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <iframe
                                className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.933862602524!2d77.5945669151015!3d12.971598790856033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c3d8fadd%3A0x1b420f8d50813e1!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1722231364123!5m2!1sen!2sin"
                                frameBorder="0"
                                style={{ minHeight: '350px', border: '0' }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    required
                                                    style={{ backgroundColor: '#f9f9f9', color: 'black' }} // Light background for input
                                                />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    required
                                                    style={{ backgroundColor: '#f9f9f9', color: 'black' }} // Light background for input
                                                />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="Subject"
                                                    required
                                                    style={{ backgroundColor: '#f9f9f9', color: 'black' }} // Light background for input
                                                />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: '150px', backgroundColor: '#f9f9f9', color: 'black' }} // Light background for textarea
                                                    required
                                                ></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button
                                                className="btn w-100 py-3"
                                                type="submit"
                                                style={{ backgroundColor: 'orange', borderColor: 'orange', color: 'white' }}
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
