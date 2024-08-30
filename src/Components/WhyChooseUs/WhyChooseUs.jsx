import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-section">
      <div className="container">
        <h2 className="why-choose-us-title">Why Choose Our Service</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Expertise</h5>
                <p className="card-text">
                  Our team consists of industry experts with years of experience
                  and in-depth knowledge. We bring this expertise to every
                  project, ensuring the best outcomes for our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Customization</h5>
                <p className="card-text">
                  We understand that every client is different. That’s why we
                  offer customized solutions that are tailored to meet your
                  specific needs, goals, and challenges.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Support</h5>
                <p className="card-text">
                  Our commitment to customer service is unmatched. We provide
                  dedicated support to ensure that your experience with our
                  service is seamless and satisfactory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
