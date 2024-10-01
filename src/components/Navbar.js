import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h2>Juan Camilo Restrepo</h2>
      <button className="menu-button" onClick={toggleMenu}>
        <FaBars />
      </button>
      <ul className={menuOpen ? "show" : ""}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
