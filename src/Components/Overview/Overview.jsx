import React from 'react'
import './Overview.css';
import planning  from './planning.jpg';
import analytics from './analytics.jpg';
// import analytics from '../assets/analytics';

export default function Overview() {
  return (
    <>
    <div id = "overview">
    <h2 className="heading-color m-3">Overview</h2>
    <div className="row">
        <div className="col-lg-6 col-md-5 col-sm-12 m-3 description">
            <br></br><br></br>
            Our services include end-to-end recruitment, ensuring the right talent aligns with your
company’s vision.
 <br></br><br></br>       
 We specialize in talent management, employee engagement, and HR strategy, helping
 businesses build strong, motivated teams.
       <br></br><br></br>
        </div>
        <img src={planning} className="col-lg-4 col-md-5 col-sm-12 m-3"/>
    </div>
    <div className="row">
    <img src={analytics} className="col-lg-4 col-md-5 col-sm-12 m-3"/>
    <div className="col-lg-6 col-md-5 col-sm-12 m-3 description">
            <br></br><br></br>
            With expertise in HR compliance, training, and development, we ensure your workforce
remains skilled and up-to-date with industry standards.
          <br></br><br></br>
          Our consultancy extends to performance management, policy formulation, and
leadership development, all tailored to your unique needs. Partner with Sagacity
Professionals for expert guidance, seamless HR processes, and a people-centric
approach to business growth.
       <br></br><br></br>
        </div>
        </div>
    </div>
    </>
  )
}
