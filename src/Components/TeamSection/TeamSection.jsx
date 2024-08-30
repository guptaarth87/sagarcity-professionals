import React from "react";
import "./TeamSection.css";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image: "https://via.placeholder.com/350x300",
  },
  {
    name: "Jane Smith",
    position: "Lead Developer",
    image: "https://via.placeholder.com/350x300",
  },
  {
    name: "Michael Johnson",
    position: "Project Manager",
    image: "https://via.placeholder.com/350x300",
  },
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <div className="container">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-md-4" key={index}>
              <div className="card team-card">
                <img src={member.image} alt={member.name} />
                <div className="team-card-body">
                  <h5 className="team-card-title">{member.name}</h5>
                  <p className="team-card-text">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
