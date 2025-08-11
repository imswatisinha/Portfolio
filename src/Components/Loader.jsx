
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "../Css/Loader.css";

const Loader = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`premium-loader ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="loader-content">
        {/* Animated Logo */}
        <div className="loader-logo">
          <div className="logo-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </div>
          <div className="logo-text">
            <span className="logo-letter">S</span>
            <span className="logo-letter">S</span>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="loader-text">
          <span className="loading-word">Loading</span>
          <div className="loading-dots">
            <span className="dot dot-1">.</span>
            <span className="dot dot-2">.</span>
            <span className="dot dot-3">.</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="loader-bg-pattern">
        <div className="pattern-circle pattern-1"></div>
        <div className="pattern-circle pattern-2"></div>
        <div className="pattern-circle pattern-3"></div>
        <div className="pattern-circle pattern-4"></div>
      </div>
    </div>
  );
};

export default Loader;
