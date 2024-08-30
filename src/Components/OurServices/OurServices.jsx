import React from "react";
import "./OurServices.css";
import { useNavigate } from 'react-router-dom';


const OurServices = () => {
  const services = [
    {
      title: "service1",
      description: "Build dynamic and responsive websites with modern technologies.",
      image: "https://via.placeholder.com/350x200",
    },
    {
      title: "Mobile App Development",
      description: "Create user-friendly mobile applications for Android and iOS.",
      image: "https://via.placeholder.com/350x200",
    },
    {
      title: "E-Commerce Solutions",
      description: "Launch and manage your online store with our e-commerce services.",
      image: "https://via.placeholder.com/350x200",
    },
    {
      title: "Web Development",
      description: "Build dynamic and responsive websites with modern technologies.",
      image: "https://via.placeholder.com/350x200",
    },
    {
      title: "Mobile App Development",
      description: "Create user-friendly mobile applications for Android and iOS.",
      image: "https://via.placeholder.com/350x200",
    },
    {
      title: "E-Commerce Solutions",
      description: "Launch and manage your online store with our e-commerce services.",
      image: "https://via.placeholder.com/350x200",
    }
  ];

  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/servicedetails?service=${service.title}`);
  // };
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1>Our Services</h1>
        <p className="lead">We offer a variety of services to help you achieve your goals.</p>
      </div>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div className="card service-card">
              <img src={service.image} alt={service.title} />
              <div className="service-card-body">
                <h5 className="service-card-title">{service.title}</h5>
                <p className="service-card-text">{service.description}</p>
                <button className="btn theme-grad service-btn" onClick={()=>navigate(`/servicedetails?service=${service.title}`)}>Know More</button>
                <button className="btn btn-outline-secondary service-btn">Contact Us</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
