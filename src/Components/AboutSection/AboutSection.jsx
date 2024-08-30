import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/600x400"
              alt="About Us Image"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2 className="about-title">Who We Are</h2>
            <p className="about-text">
              We are a dynamic team of professionals who specialize in various
              fields, from technology and design to marketing and business
              development. Our mission is to provide innovative and effective
              solutions that help our clients achieve their goals and succeed in
              their respective industries.
            </p>
            <p className="about-text">
              With years of experience and a deep understanding of the market,
              we are equipped to handle projects of all sizes and complexities.
              Our approach is client-focused, and we pride ourselves on
              delivering exceptional results that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
