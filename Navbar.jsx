import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Portfolio.css';
import Contact from './Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Optional: Auto-close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="nav-bar">
      <div className="navbar-logo">
        {/* Hamburger Icon */}
        <span className="hamburger-icon" onClick={toggleMenu}>☰</span>
      </div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
           <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/hackathons">Hackathons</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
