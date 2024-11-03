import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faBriefcase,faFileUpload } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Logo from '../../Assets/sagacitylogo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>

        {/* Navbar Toggle for Mobile */}
        <button className="navbar-toggle btn theme-grad" type="button" onClick={toggleMenu}>
          MENU
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav" style={{ display: isOpen ? 'flex' : 'none' }}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faHome} /> Home
                <span className="underline"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBriefcase} /> Services
                <span className="underline"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faInfoCircle} /> About Us
                <span className="underline"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faEnvelope} /> Contact Us
                <span className="underline"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/uploadcv" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faFileUpload} /> Upload CV/Resume
                <span className="underline"></span>
              </Link>
            </li>

            <li className="nav-item">
            <button className="navbar-toggle btn theme-grad" type="button" onClick={toggleMenu}>
          Close
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;