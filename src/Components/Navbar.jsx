
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    // Ensure scroll to top when menu is closed and navigation happens
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
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
        <div className="navbar-brand" onClick={scrollToTop}>
          <div className="brand-content">
            <div className="brand-logo">
              <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#59a3f7" />
                    <stop offset="50%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                </defs>
                <path
                  d="M8 12C8 8 12 6 16 8C18 9 19 10 20 12C21 10 22 9 24 8C28 6 32 8 32 12C32 14 30 15 28 15H24C22 15 21 16 20 18C21 20 22 21 24 21H28C30 21 32 22 32 24C32 28 28 30 24 28C22 27 21 26 20 24C19 26 18 27 16 28C12 30 8 28 8 24C8 22 10 21 12 21H16C18 21 19 20 20 18C19 16 18 15 16 15H12C10 15 8 14 8 12Z"
                  fill="url(#logoGradient)"
                  className="logo-path"
                />
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-name">S.Sinha</span>
              <span className="brand-dot">•</span>
              <span className="brand-role">Developer</span>
            </div>
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
              <span className="brand-name">S.Sinha</span>
              <span className="brand-dot">•</span>
              <span className="brand-role">Developer</span>
            </div>
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
