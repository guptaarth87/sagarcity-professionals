import React from "react";
import "./Vision.css";
import Mission from "./ourmission.svg";
import Vission from "./ourvision.svg";
import Longterm from "./longterm.svg";

export default function Vision() {
  return (
    <>
      <div className="vision_grand row">
        <div className="card p-4 col-lg-3 col-md-5 col-sm-12">
          <img className="card-img-top" src={Mission} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title ">Our Mission</h3>
            <br></br>
           
            <p className="card-text fnt-description">
              Our mission: To empower businesses by providing strategic HR solutions that align with their goals, enhance operational efficiency, and drive sustainable growth. We aim to be a trusted partner, delivering quality HR services that simplify processes, attract top talent, and foster a supportive workplace culture.
            </p>
          </div>
        </div>
        <div className="card p-4 col-lg-3 col-md-5 col-sm-12">
          <img className="card-img-top" src={Vission} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title ">Our Vision</h3>
            <br></br>
            
            <p className="card-text fnt-description">
            To be a leading HR outsourcing firm known for our integrity, innovation, and excellence, transforming businesses through people-centered, impactful HR practices. We envision a future where every organization we partner with thrives through empowered, engaged, and effective workforces.

            </p>
          </div>
        </div>
        <div className="card p-4 col-lg-5 col-md-5 col-sm-12 ">
          <img className="card-img-top" src={Longterm} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title ">Values</h3>
            <br></br>
            
            <p className="card-text fnt-description">
            1. Integrity – We operate with transparency, honesty, and ethical practices, earning the trust of our clients and candidates alike.
             <br></br>
  
2. Excellence – We strive for the highest standards in every service, bringing quality, reliability, and a proactive approach to every engagement.

<br></br>
3. Client-Centricity – Our success is driven by our clients’ success. We are committed to understanding their unique needs and tailoring solutions that add measurable value.
<br></br>

4. Continuous Improvement – We believe in learning, evolving, and staying ahead of industry trends to deliver innovative solutions that meet modern HR challenges.
<br></br>

5. People-First – We champion respect, inclusivity, and collaboration, believing that a supportive environment leads to positive outcomes for our team, our clients, and their employees.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
