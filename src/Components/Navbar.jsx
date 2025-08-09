
import React, { useState ,useContext} from "react";
import { NavLink} from "react-router-dom";
import "../Css/Navbar.css";
import { ThemeContext } from "./ThemeContext.js"; 
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaFileAlt,
  FaCode,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa"; 

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nav_item_text_class = `nav-item-text ${isDarkMode ? "dark" : "light"}`;
  const nav_item_cus_class = `nav-item-cus ${isDarkMode ? "dark" : "light"} `;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <nav className={`navbar-cus ${isDarkMode ? "dark" : "light"} ${isMenuOpen ? "navbar-cus-show-menu" : ""}`}>
      <div className={`navbar-brand-cus {nav_item_text_class}`}>
        <div className="nav-brand-name-wrap">
          <div className="nav-brand-name">
            <h2 className="brand-name-first">SWATI</h2>
            <h2 className="brand-name-second">SWATI</h2>
          </div>
        </div>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes style={{ color: "red", fontSize: "1.5rem" }} />
        ) : (
          <FaBars style={{ color: "#E4E4E4", fontSize: "1.5rem" }} />
        )}
      </div>
   
    <div className={`nav-items ${isMenuOpen ? "show-menu" : ""}`}>
        <ul>
          <li className={nav_item_cus_class}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu} 
            >
              <div className="nav-item-content">
                <FaHome className="nav-item-icon" />
                <span className={nav_item_text_class}>Home</span>
              </div>
            </NavLink>
          </li>
          <li className={nav_item_cus_class}>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu} 
            >
              <div className="nav-item-content">
                <FaUser className="nav-item-icon" />
                <span className={nav_item_text_class}>About</span>
              </div>
            </NavLink>
          </li>
          <li className={nav_item_cus_class}>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              <div className="nav-item-content">
                <FaProjectDiagram className="nav-item-icon" />
                <span className={nav_item_text_class}>Projects</span>
              </div>
            </NavLink>
          </li>
          <li className={nav_item_cus_class}>
            <NavLink
              to="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu} 
            >
              <div className="nav-item-content">
                <FaFileAlt className="nav-item-icon" />
                <span className={nav_item_text_class}>Resume</span>
              </div>
            </NavLink>
          </li>
          <li className={nav_item_cus_class}>
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              <div className="nav-item-content">
                <FaCode className="nav-item-icon" />
                <span className={nav_item_text_class}>Skills</span>
              </div>
            </NavLink>
          </li>
          <li className={nav_item_cus_class}>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu} 
            >
              <div className="nav-item-content">
                <FaEnvelope className="nav-item-icon" />
                <span className={nav_item_text_class}>Contact</span>
              </div>
            </NavLink>
          </li>

          <li className="theme-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <FaMoon style={{ color: "gray", fontSize: "1.75rem" }} />
            ) : (
              <FaSun style={{ color: "orange", fontSize: "1.75rem" }} />
            )}
          </li>
        </ul>
      
    </div>
    </nav>
  );
};

export default Navbar;
