import './Footer.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <> 
        <div id = "contactus" className=" wrapbox w-100 py-4 flex-shrink-0">
     
     
        <div className="footercomponent theme-grad ">
       
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 white">Sagarcity Professionals </h5>
                    <p className="small white subhead">Don't go anywhere every solution is here!</p>
                    <p className="small white mb-0">&copy; Copyrights. All rights reserved. Sagarcity Professionals</p>
                </div>
                <div className="subdiv col-lg-7 theme-grad">
                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <h5 className="mb-3 white">Quick links</h5>
                     <ul className="list-unstyled text-muted">
                        <li><HashLink className="link white" to="/">Home</HashLink></li>
                        <li><HashLink className="link white" to="/services">Services</HashLink></li>
                        <li><HashLink className="link white" to="/contactus">Contact us</HashLink></li>
                        <li><Link className="link white" to="/about">About us</Link></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="mb-3 white">Social Media</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a className="link white" href="#">Facebook</a></li>
                        <li><a className="link white" href="https://www.instagram.com/datasaltinsta/?igshid=MzRlODBiNWFlZA%3D%3D"  target="_blank">Instagram</a></li>
                        <li><a className="link white" href="#">Linkedin</a></li>
                        
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 ">
                    <h5 className="mb-3 white">Contact info</h5>
                    <ul className="list-unstyled text-muted">
                        <li className='white'>Phone No : +91 121121212</li>
                        <li className='white'>Email : sagarciry@gmail.com</li>
                        <li className='white'>Instagram : @sagarcity</li>
                        
                    </ul>
                </div>
               
               
                </div>
             </div>
            </div>
           
        </div>
       
         
        
    </div>
        
       
        
        </>
    )
}

export default Footer;