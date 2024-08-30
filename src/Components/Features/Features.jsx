// Features.jsx
import React from "react";

const Features = ({ features }) => {
  return (
    <div className="feature-section">
      <div className="container">
        <h3 className="feature-title">Key Features</h3>
        <ul className="feature-list">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
