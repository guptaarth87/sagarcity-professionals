// ServiceDetails.jsx
import React from "react";
import "./ServiceDetails.css";

const ServiceDetails = ({ title, description }) => {
  return (
    <div className="service-details-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="service-details-title">{title}</h2>
            <p className="service-details-text">{description}</p>
          </div>
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Service Image"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
