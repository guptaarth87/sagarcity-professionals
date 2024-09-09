import React, { useState } from 'react';
import './ContactForm.css';
// import Img from '../../assets/authentication_vector1.svg';
// import Logo from '../../assets/Logo.png';
import { db } from '../../_helpers/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function ContactForm() {
  const usersCollectionRef = collection(db, 'Queries');

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone_no: '',
    query: ''
  });

  const handleInput = (e) => {
    const data = e.target.value;
    const name = e.target.name;
    setUser({ ...user, [name]: data });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name: user.name,
      Email: user.email,
      PhoneNo: user.phone_no,
      Query: user.query
    };
    await addDoc(usersCollectionRef, data);
    window.alert('Thank you for contacting us! We will get back to you soon.');
    window.location.reload();
  };

  return (
    <div className="contactus-container theme-grad">
      <div className="form-card">
        <div className="form-left">
          {/* <img src={Img} alt="Contact Us" className="form-image" /> */}
        </div>
        <div className="form-right">
          {/* <img src={Logo} alt="Logo" className="form-logo" /> */}
          <h2 className="form-titlex ">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-groupx">
              <label htmlFor="name ">Name*</label>
              <input
                type="text"
                className="form-controlx"
                id="name"
                name="name"
                value={user.name}
                onChange={handleInput}
                required
              />
            </div>
            <div className="form-groupx">
              <label htmlFor="email" className=''>Email*</label>
              <input
                type="email"
                className="form-controlx"
                id="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                required
              />
            </div>
            <div className="form-groupx">
              <label htmlFor="phone_no">Phone No.</label>
              <input
                type="text"
                className="form-controlx"
                id="phone_no"
                name="phone_no"
                value={user.phone_no}
                onChange={handleInput}
                required
              />
            </div>
            <div className="form-groupx">
              <label htmlFor="query">Leave a Query</label>
              <textarea
                className="form-controlx"
                id="query"
                name="query"
                value={user.query}
                onChange={handleInput}
                rows="4"
              />
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
         
        </div>
      </div>
    </div>
  );
}
