import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="nav-logo">EV-olution</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
