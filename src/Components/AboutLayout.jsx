import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import "../Css/About.css";
import { ThemeContext } from "./ThemeContext";

const AboutLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode } = useContext(ThemeContext);

  // Scroll to top when the about layout mounts or path changes
  useEffect(() => {
    const tabContent = document.querySelector('.tab-content');
    if (tabContent) {
      tabContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
    // Additional scroll to top after navigation for tab content
    setTimeout(() => {
      const tabContent = document.querySelector('.tab-content');
      if (tabContent) {
        tabContent.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className={`about-container about-layout ${isDarkMode ? "dark" : "light"}`}>
      <div className={`sub-navbar ${isDarkMode ? "dark" : "light"}`}>
        <Slide direction="left" triggerOnce>
          <button 
            className={`nav-button ${location.pathname === "/about" ? "active" : ""}`}
            onClick={() => handleNavigation("/about")}
          >
            About Me
          </button>
        </Slide>
        <Slide direction="up" triggerOnce>
          <button 
            className={`nav-button ${location.pathname === "/about/education" ? "active" : ""}`}
            onClick={() => handleNavigation("/about/education")}
          >
            Education
          </button>
        </Slide>
        <Slide direction="right" triggerOnce>
          <button 
            className={`nav-button ${location.pathname === "/about/experience" ? "active" : ""}`}
            onClick={() => handleNavigation("/about/experience")}
          >
            Experience
          </button>
        </Slide>
      </div>

      {/* Outlet to render child components */}
      <div className={`tab-content${location.pathname === "/about" ? " no-scroll" : ""}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default AboutLayout;
