import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import "../Css/LandingPage.css";
import animationData from "../assests/landing-page.json";

const LandingPage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle resume download
  const handleDownloadResume = () => {
    const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Swati_Sinha_Resume.pdf";
    link.click();
  };

  // Handle navigate to contact
  const handleContactNavigation = () => {
    navigate('/contact');
  };

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Typed text effect for skills
  const [currentSkill, setCurrentSkill] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const skills = ["Data Science Intern", "ISRO Project Intern", "Full-Stack Developer", "Cybersecurity Enthusiast", "AI/ML Expert"];
    
    let timeout;
    if (isTyping) {
      if (displayText.length < skills[currentSkill].length) {
        timeout = setTimeout(() => {
          setDisplayText(skills[currentSkill].slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentSkill((prev) => (prev + 1) % skills.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentSkill]);

  return (
    <div className={`wrap-landing-page ${isDarkMode ? "dark" : "light"}`}>
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div 
          className={`floating-element element-1 ${isDarkMode ? "dark" : "light"}`}
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        />
        <div 
          className={`floating-element element-2 ${isDarkMode ? "dark" : "light"}`}
          style={{
            transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`
          }}
        />
        <div 
          className={`floating-element element-3 ${isDarkMode ? "dark" : "light"}`}
          style={{
            transform: `translate(${mousePosition.x * 0.07}px, ${mousePosition.y * 0.07}px)`
          }}
        />
      </div>

      <div className={`landing-page-main ${isDarkMode ? "dark" : "light"}`}>
        <Slide direction="left" triggerOnce>
          <div className="intro">
            <div className={`intro-badge ${isDarkMode ? "dark" : "light"}`}>
              <span className="badge-icon">✨</span>
              <span>Welcome to my portfolio</span>
            </div>

            <Fade cascade damping={0.1} triggerOnce>
              <h1 className={`intro-heading ${isDarkMode ? "dark" : "light"}`}>
                Hi, I'm{" "}
                <span className="my-name gradient-text" data-text="Swati Sinha">Swati Sinha</span>
                <span role="img" className="wave" aria-label="waving hand">
                  👋
                </span>
              </h1>
            </Fade>

            <div className="dynamic-subtitle">
              <span className={`static-text ${isDarkMode ? "dark" : "light"}`}>I'm a </span>
              <span className={`dynamic-text ${isDarkMode ? "dark" : "light"}`}>
                {displayText}
                <span className="cursor">|</span>
              </span>
            </div>

            <Fade delay={400} triggerOnce>
              <p className={`intro-description ${isDarkMode ? "dark" : "light"}`}>
                Currently pursuing <strong>B.Tech in Computer Science</strong> from MMMUT with <strong>8.73 SGPA</strong>. 
                Working as <span className="highlight">Data Science Intern at Sabudh Foundation</span> and 
                <span className="highlight"> ISRO Project Intern at IIT Jodhpur</span>, specializing in AI/ML, web development, and cybersecurity.
              </p>
            </Fade>

            <div className="stats-container">
              <Zoom cascade damping={0.1} delay={600} triggerOnce>
                <div className={`stat-item ${isDarkMode ? "dark" : "light"}`}>
                  <span className="stat-number">8.73</span>
                  <span className="stat-label">SGPA</span>
                </div>
                <div className={`stat-item ${isDarkMode ? "dark" : "light"}`}>
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Internships</span>
                </div>
                <div className={`stat-item ${isDarkMode ? "dark" : "light"}`}>
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Certifications</span>
                </div>
                <div className={`stat-item ${isDarkMode ? "dark" : "light"}`}>
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </Zoom>
            </div>

            <Fade delay={800} triggerOnce>
              <div className="action-buttons">
                <button
                  className={`download-button primary ${isDarkMode ? "dark" : "light"}`}
                  onClick={handleDownloadResume}
                >
                  <span className="button-icon">📄</span>
                  Download Resume
                  <span className="button-ripple"></span>
                </button>
                <button 
                  onClick={handleContactNavigation} 
                  className={`contact-button secondary ${isDarkMode ? "dark" : "light"}`}
                >
                  <span className="button-icon">💬</span>
                  Let's Connect
                </button>
              </div>
            </Fade>

            <div className="tech-stack">
              <span className={`tech-label ${isDarkMode ? "dark" : "light"}`}>Technologies I work with:</span>
              <div className="tech-icons">
                <div className={`tech-item ${isDarkMode ? "dark" : "light"}`} title="Python">🐍</div>
                <div className={`tech-item ${isDarkMode ? "dark" : "light"}`} title="JavaScript">⚡</div>
                <div className={`tech-item ${isDarkMode ? "dark" : "light"}`} title="React">⚛️</div>
                <div className={`tech-item ${isDarkMode ? "dark" : "light"}`} title="Django">🎯</div>
                <div className={`tech-item ${isDarkMode ? "dark" : "light"}`} title="Machine Learning">🤖</div>
                <div className={`tech-item ${isDarkMode ? "dark" : "light"}`} title="Data Science">📊</div>
                <div className={`tech-item ${isDarkMode ? "dark" : "light"}`} title="MongoDB">🍃</div>
                <div className={`tech-item ${isDarkMode ? "dark" : "light"}`} title="Git/GitHub">📝</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide direction="right" triggerOnce>
          <div className="img-home-main">
            <div className="animation-container">
              <div className={`animation-wrapper ${isDarkMode ? "dark" : "light"}`}>
                <Lottie 
                  animationData={animationData} 
                  loop={true} 
                  className="lottie-animation"
                />
              </div>
              <div className="animation-glow"></div>
            </div>
          </div>
        </Slide>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
