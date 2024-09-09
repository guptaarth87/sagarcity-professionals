import React from "react";
import "./AboutSection.css";
import { AboutUs } from "../../TextData";

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
              {AboutUs.about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
