// ServiceDetails.jsx
import React from "react";
import "./ServiceDetails.css";

const ServiceDetails = ({ title, description , Img }) => {
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
              src={Img}
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
