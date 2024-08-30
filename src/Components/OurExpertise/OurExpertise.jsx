import React from 'react'
import hotelbooking from './hotelbooking.jpg';
import digital_card from './digital_card.svg';

export default function OurExpertise() {
  return (
   <>
    <div className="expertise-section" id="ourexpertise">
        <h2 className = "alignCentre heading-color m-5 ">Our Expertise</h2>
        <div className="row">
        <div className="col-lg-6 col-md-5 col-sm-12 m-3 description">
            <br></br>
            <h3>1. Digital card</h3>
            <br></br>
            In a vibrant city where innovation meets tradition, the bustling marketplace thrives with energy and creativity. Artisans showcase their unique crafts, while tech enthusiasts explore cutting-edge gadgets. Amidst this dynamic fusion, people from diverse backgrounds come together, creating a melting pot of culture, ideas, and opportunity.<span style={{color:"#18345A"}}><strong> 14,999 INR</strong></span>.
            <br></br><br></br>       
       Elevate your online presence and streamline operations with our feature-rich solution. Embrace the future of digital transformation with our affordable and dynamic website package!
       <br></br><br></br>
        </div>
        <img src={digital_card} className="col-lg-4 col-md-5 col-sm-12 m-3"/>
    </div>
    <div className="row">
    <img src={hotelbooking} className="col-lg-4 col-md-5 col-sm-12 m-3"/>
    <div className="col-lg-6 col-md-5 col-sm-12 m-3 description">
            <br></br>
            <h3>2. Personalised booking website</h3>
            <br></br>
            In a vibrant city where innovation meets tradition, the bustling marketplace thrives with energy and creativity. Artisans showcase their unique crafts, while tech enthusiasts explore cutting-edge gadgets. Amidst this dynamic fusion, people from diverse backgrounds come together, creating a melting pot of culture, ideas, and opportunity.<span style={{color:"#18345A"}}><strong> 14,999 INR</strong></span>.
          <br></br><br></br>
          In a vibrant city where innovation meets tradition, the bustling marketplace thrives with energy and creativity.           <br></br><br></br>
        </div>
        </div>
     </div>
   </>
  )
}
