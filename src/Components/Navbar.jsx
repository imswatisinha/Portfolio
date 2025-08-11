
import React, { useState, useContext, useEffect } from "react";
import { NavLink} from "react-router-dom";
import "../Css/Navbar.css";
import { ThemeContext } from "./ThemeContext.js"; 
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaFileAlt,
  FaCode,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"; 

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  const navItems = [
    { path: "/", icon: FaHome, label: "Home" },
    { path: "/about", icon: FaUser, label: "About" },
    { path: "/projects", icon: FaProjectDiagram, label: "Projects" },
    { path: "/skills", icon: FaCode, label: "Skills" },
    { path: "/contact", icon: FaEnvelope, label: "Contact" }
  ];

  return (
    <nav className={`navbar-premium ${isDarkMode ? "dark" : "light"} ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="navbar-brand">
          <div className="brand-content">
            <div className="brand-text">
              <span className="brand-primary">SWATI</span>
              <span className="brand-secondary">SINHA</span>
            </div>
            <div className="brand-tagline">Full Stack Developer</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  <item.icon className="nav-icon" />
                  <span className="nav-text">{item.label}</span>
                  <div className="nav-indicator"></div>
                </NavLink>
              </li>
            ))}
            
            {/* Resume Link */}
            <li className="nav-item">
              <a
                href={`${process.env.PUBLIC_URL}/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                onClick={closeMenu}
              >
                <FaFileAlt className="nav-icon" />
                <span className="nav-text">Resume</span>
                <div className="nav-indicator"></div>
              </a>
            </li>
          </ul>
        </div>

        {/* Theme Toggle */}
        <div className="navbar-actions">
          <button 
            className="theme-toggle-btn" 
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
          >
            <div className="theme-toggle-inner">
              {isDarkMode ? (
                <FaSun className="theme-icon sun-icon" />
              ) : (
                <FaMoon className="theme-icon moon-icon" />
              )}
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <div className="mobile-brand">
            <div className="brand-text">
              <span className="brand-primary">SWATI</span>
              <span className="brand-secondary">SINHA</span>
            </div>
            <div className="brand-tagline">Full Stack Developer</div>
          </div>
          
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="mobile-nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  <item.icon className="mobile-nav-icon" />
                  <span className="mobile-nav-text">{item.label}</span>
                </NavLink>
              </li>
            ))}
            
            <li className="mobile-nav-item">
              <a
                href={`${process.env.PUBLIC_URL}/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                <FaFileAlt className="mobile-nav-icon" />
                <span className="mobile-nav-text">Resume</span>
              </a>
            </li>
          </ul>

          <div className="mobile-social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
