'use client';
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../style/navbar.css"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo">ℋ𝓘</div>

      {/* Desktop menu */}
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <a href="#hero">Home</a>
        </li>
        <li className="navbar-menu-item">
          <a href="#about">About</a>
        </li>
        <li className="navbar-menu-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar-menu-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="navbar-menu-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Mobile menu icon */}
      <AiOutlineMenu className="navbar-menu-icon" onClick={toggleMenu} />

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="mobile-menu">
          <li className="mobile-menu-item">
            <a href="#hero" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li className="mobile-menu-item">
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className="mobile-menu-item">
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li className="mobile-menu-item">
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li className="mobile-menu-item">
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
