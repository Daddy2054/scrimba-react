import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo--image">
          <img src="src/assets/world.svg" alt="" className="world-icon" />
        </div>
        <div className="logo--title">my travel journal </div>
      </div>
    </nav>
  );
}
