import React from "react";

export default function Header() {
  return (
    <header>

    <nav className="navbar">
      <div className="logo">
          <img src="src/assets/Troll Face.png" alt="" className="logo--image" />
        <div className="logo--title">Meme Generator </div>
      </div>
      <h3 className="logo--description">React Course - Project 3</h3>

    </nav>
    </header>
  );
}
