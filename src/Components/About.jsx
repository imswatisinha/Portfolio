
import React, { useContext } from "react";
import Lottie from "lottie-react";
import animationData from "../assests/Main Scene.json";
import { ThemeContext } from "./ThemeContext";
import { Fade, Slide } from "react-awesome-reveal";
import "../Css/About.css";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const highlight_class = `highlight ${isDarkMode ? "dark" : "light"}`;
  
  return (
    <div className={`about-section ${isDarkMode ? "dark" : "light"}`}>
      <div className="about-container">
        <Slide direction="left" triggerOnce>
          <div className="about-animation">
            <div className={`animation-wrapper ${isDarkMode ? "dark" : "light"}`}>
              <Lottie animationData={animationData} loop={true} className="lottie-animation" />
              <div className="animation-glow"></div>
            </div>
          </div>
        </Slide>

        <Slide direction="right" triggerOnce>
          <div className="about-text">
            <Fade cascade damping={0.1} triggerOnce>
              <div className={`section-badge ${isDarkMode ? "dark" : "light"}`}>
                <span className="badge-icon">👤</span>
                <span>About Me</span>
              </div>
              
              <h2 className={`section-title ${isDarkMode ? "dark" : "light"}`}>
                Get to <span className="gradient-text">Know Me</span>
              </h2>
            </Fade>

            <Fade delay={200} triggerOnce>
              <p className={`intro-paragraph ${isDarkMode ? "dark" : "light"}`}>
                I'm <span className={highlight_class}>Swati Sinha</span>, a{" "}
                <span className={highlight_class}>Computer Science student</span> at{" "}
                <span className={highlight_class}>MMMUT Gorakhpur</span> with an{" "}
                <span className={highlight_class}>8.25 SGPA</span>. Currently working as a{" "}
                <span className={highlight_class}>Data Science Intern</span> at{" "}
                <span className={highlight_class}>Sabudh Foundation</span> and{" "}
                <span className={highlight_class}>ISRO Project Intern</span> at{" "}
                <span className={highlight_class}>IIT Jodhpur</span>.
              </p>
            </Fade>

            <Fade delay={400} triggerOnce>
              <p className={`detail-paragraph ${isDarkMode ? "dark" : "light"}`}>
                I specialize in <span className={highlight_class}>Full-Stack Development</span>,{" "}
                <span className={highlight_class}>Data Science</span>, and{" "}
                <span className={highlight_class}>Cybersecurity</span>. Experienced with{" "}
                <span className={highlight_class}>React.js</span>,{" "}
                <span className={highlight_class}>Python</span>,{" "}
                <span className={highlight_class}>Django</span>, and{" "}
                <span className={highlight_class}>Machine Learning</span>. Active participant in{" "}
                <span className={highlight_class}>Smart India Hackathon</span> and{" "}
                <span className={highlight_class}>Flipkart GRiD 6.0</span>.
              </p>
            </Fade>

            <Fade delay={600} triggerOnce>
              <div className="about-stats">
                <div className={`stat-card ${isDarkMode ? "dark" : "light"}`}>
                  <div className="stat-number">8.25</div>
                  <div className="stat-label">SGPA</div>
                </div>
                <div className={`stat-card ${isDarkMode ? "dark" : "light"}`}>
                  <div className="stat-number">2</div>
                  <div className="stat-label">Internships</div>
                </div>
                <div className={`stat-card ${isDarkMode ? "dark" : "light"}`}>
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Projects</div>
                </div>
              </div>
            </Fade>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;
