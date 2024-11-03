import React from 'react'
import './Hero.css'
import Img from './starterSection.png';
import {HashLink as Link} from 'react-router-hash-link'
export default function Hero() {
  return (
    <>
        <div className="starterdiv theme-grad" id="startersection ">
            <div className="container mt-4">
            <div className="row ">
           
              <div className="col-lg-6 col-md-6 col-sm-12">
              <h3 className=" white starter_txt">
              <br></br>
              <br></br>
              Sagacity Professionals is a leading HR consulting firm dedicated to providing
customized solutions that drive organizational success.

              <br></br><br></br>
              <Link className="pos_button theme-grad" to="/services">See Services</Link>
              </h3>
              <br></br>
              </div>
              <br></br>
            
                <img  className="col-lg-6 col-md-6 col-sm-12 animated" src={Img}/>
           
            </div>
            </div>
        </div>
    </>
  )
}
