import React from "react";
import "./Rooms.css";

function Rooms() {
  return (
    <div id="rooms" className="rooms-section">
      <h2>Our Rooms</h2>
      <div className="room-card-container">
        <div className="room-card">
          <h3>Standard Room</h3>
          <p>Comfortable, affordable rooms with basic amenities.</p>
        </div>
        <div className="room-card">
          <h3>Deluxe Room</h3>
          <p>Spacious and stylish with additional amenities.</p>
        </div>
        <div className="room-card">
          <h3>Executive Room</h3>
          <p>Luxury experience with top-tier service and comfort.</p>
        </div>
      </div>
      <div className="blank-space"></div>
    </div>
  );
}

export default Rooms;
