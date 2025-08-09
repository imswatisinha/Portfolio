

import React, { useContext } from "react";
import "../Css/Timeline.css";
import "../Css/Education.css";
import placeholder from "../assests/education-icon.png";
import { ThemeContext } from "./ThemeContext";

const Timeline = ({ timelineData }) => {
  const { isDarkMode } = useContext(ThemeContext);

  // Handle cases where timelineData is null, undefined, or an empty array
  if (!timelineData || timelineData.length === 0) {
    return (
      <div className="timeline-empty">
        <h2>No Timeline Data Available</h2>
        <p>We're currently updating this section. Please check back soon!</p>
      </div>
    );
  }

  return (
    <div className="timeline">
      {timelineData.map((item, index) => (
        <div key={index} className={`containr ${item.type}`}>
          <img src={placeholder} alt="institute-icon" />
          <div className={`text-box ${isDarkMode ? "dark" : "light"}`}>
            <h2>{item.title}</h2>
            <h3>{item.institute}</h3>
            <small>{item.duration}</small>
            <p>{item.description}</p>
            <span className={`${item.type}-arrow`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
