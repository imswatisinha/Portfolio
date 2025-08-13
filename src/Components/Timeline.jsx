

import React, { useContext, memo } from "react";
import { Slide } from "react-awesome-reveal";
import "../Css/Timeline.css";
import { ThemeContext } from "./ThemeContext";

const Timeline = memo(({ timelineData, type = "experience" }) => {
  const { isDarkMode } = useContext(ThemeContext);

  // Handle cases where timelineData is null, undefined, or an empty array
  if (!timelineData || timelineData.length === 0) {
    return (
      <div className="timeline-empty" role="status" aria-live="polite">
        <h2>No Timeline Data Available</h2>
        <p>We're currently updating this section. Please check back soon!</p>
      </div>
    );
  }

  return (
    <div 
      className={`modern-timeline ${type}-timeline`}
      role="region"
      aria-labelledby={`${type}-timeline-heading`}
    >
      <div className="timeline-line" aria-hidden="true"></div>
      
      {timelineData.map((item, index) => (
        <Slide 
          key={`timeline-${type}-${index}`}
          triggerOnce 
          direction={item.type === "right-container" ? "right" : "left"}
          delay={index * 150}
        >
          <article 
            className={`timeline-item ${item.type} ${isDarkMode ? "dark" : "light"}`}
            aria-labelledby={`timeline-item-${index}-title`}
          >
            
            {/* Timeline Node */}
            <div 
              className={`timeline-node ${isDarkMode ? "dark" : "light"}`}
              role="img"
              aria-label={`Timeline milestone: ${item.title}`}
            >
              <div className="node-icon" aria-hidden="true">
                {item.icon || "📍"}
              </div>
              <div className="node-pulse" aria-hidden="true"></div>
            </div>

            {/* Content Card */}
            <div className={`timeline-card ${isDarkMode ? "dark" : "light"}`}>
              
              {/* Card Header */}
              <header className="card-header">
                <h3 
                  id={`timeline-item-${index}-title`}
                  className="card-title"
                >
                  {item.title}
                </h3>
                {item.location && (
                  <span className="location-badge" aria-label={`Location: ${item.location}`}>
                    📍 {item.location}
                  </span>
                )}
              </header>

              {/* Institute & Duration */}
              <div className="card-meta">
                <h4 className="institute">{item.institute}</h4>
                <time className="duration" dateTime={item.duration}>
                  📅 {item.duration}
                </time>
                {item.grade && (
                  <span className="grade" aria-label={`Grade: ${item.grade}`}>
                    🏆 {item.grade}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="card-description">{item.description}</p>

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <section className="achievements-section" aria-labelledby={`achievements-${index}`}>
                  <h5 id={`achievements-${index}`}>Key Achievements:</h5>
                  <ul className="achievements-list">
                    {item.achievements.map((achievement, idx) => (
                      <li key={`achievement-${index}-${idx}`}>
                        ✨ {achievement}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Skills */}
              {item.skills && item.skills.length > 0 && (
                <section className="skills-section" aria-labelledby={`skills-${index}`}>
                  <h5 id={`skills-${index}`}>Technologies & Skills:</h5>
                  <div className="skills-container" role="list" aria-label="Skills and technologies">
                    {item.skills.map((skill, idx) => (
                      <span 
                        key={`skill-${index}-${idx}`} 
                        className={`skill-tag ${isDarkMode ? "dark" : "light"}`}
                        role="listitem"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Card Arrow */}
              <div className={`card-arrow ${item.type}`} aria-hidden="true"></div>
            </div>
          </article>
        </Slide>
      ))}
    </div>
  );
});

Timeline.displayName = 'Timeline';

export default Timeline;
