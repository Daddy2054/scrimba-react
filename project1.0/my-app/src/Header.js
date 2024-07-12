import React from 'react';
    

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="logo512.png" className="nav-logo" alt="React logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>)
}
export default Header