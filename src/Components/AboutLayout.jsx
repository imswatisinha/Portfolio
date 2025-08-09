import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import "../Css/About.css";
import { ThemeContext } from "./ThemeContext";

const AboutLayout = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={`about-container ${isDarkMode ? "dark" : "light"}`}>
      <div className={`sub-navbar ${isDarkMode ? "dark" : "light"}`}>
        <Slide left>
          <button className="nav-button" onClick={() => navigate("/about")}>
            About Me
          </button>
        </Slide>
        <Slide top>
          <button className="nav-button" onClick={() => navigate("/about/education")}>
            Education
          </button>
        </Slide>
        <Slide right>
          <button className="nav-button" onClick={() => navigate("/about/experience")}>
            Experience
          </button>
        </Slide>
      </div>

      {/* Outlet to render child components */}
      <div className="tab-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AboutLayout;
