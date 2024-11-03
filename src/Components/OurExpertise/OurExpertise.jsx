import React from 'react'
import good_team from './good_team.svg';
import freinds from './freinds.svg';

export default function OurExpertise() {
  return (
   <>
    <div className="expertise-section" id="ourexpertise">
        <h2 className = "alignCentre heading-color m-5 ">Our Expertise</h2>
        <div className="row">
        <div className="col-lg-6 col-md-5 col-sm-12 m-3 description">
            <br></br>
            <h3>1. Talent Acquisition</h3>
            <br></br>
            In-Depth Candidate Assessments: We conduct rigorous assessments and interviews to ensure
candidates not only possess the required skills but also fit well within your organizational
culture.
            <br></br><br></br>       
            Expansive Talent Network: Our extensive network and innovative sourcing techniques allow
us to tap into a diverse pool of candidates, providing you with top talent that meets your
specific needs.

       <br></br><br></br>
        </div>
        <img src={freinds} className="col-lg-4 col-md-5 col-sm-12 m-3"/>
    </div>
    <div className="row">
    <img src={good_team} className="col-lg-4 col-md-5 col-sm-12 m-3"/>
    <div className="col-lg-6 col-md-5 col-sm-12 m-3 description">
            <br></br>
            <h3>2. Compliance & Regulatory Support</h3>
            <br></br>
            Proactive Compliance Audits: Our team conducts regular audits to identify potential
compliance risks, helping you stay ahead of regulatory changes and avoid penalties.

              <br></br><br></br>
              Tailored Compliance Solutions: We develop compliance strategies specific to your industry
              and organization, ensuring you meet all legal requirements without unnecessary complexity.
         </div>
        </div>
     </div>
   </>
  )
}
