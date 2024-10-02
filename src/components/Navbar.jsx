import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Lantana Hotel</h2>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#rooms">Accommodation</a></li>
        <li><a href="#restaurant">Restaurant</a></li>
        <li><a href="#conference">Conferences</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
