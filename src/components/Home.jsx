import React from 'react';
import './Home.css';

function Home() {
  return (
    <div id="home" className="home-banner">
      <div className="overlay">
        <h1>Welcome to Lantana Hotel</h1>
        <p>Your perfect stay in Kitui Town</p>
        <a href="#rooms" className="cta-btn">View Rooms</a>
      </div>
    </div>
  );
}

export default Home;
