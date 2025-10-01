import React, { useContext, useMemo } from "react";
import projects from "../utilities/projectList.js";
import ProjectCard from "./ProjectCard";
import { Slide, Fade } from "react-awesome-reveal";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";
import "../Css/HomeProject.css";

const HomeProject = () => {
  const { isDarkMode } = useContext(ThemeContext);

  // Memoize featured projects to prevent unnecessary re-renders
  const featuredProjects = useMemo(() => projects.slice(0, 6), []);

  return (
    <section 
      className={`home-projects-section ${isDarkMode ? "dark" : "light"}`} 
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <Slide triggerOnce direction="up">
          <header className="section-header">
            <span className={`section-badge ${isDarkMode ? "dark" : "light"}`}>
              💼 Featured Work
            </span>
            <h2 
              id="projects-heading"
              className={`section-title ${isDarkMode ? "dark" : "light"}`}
            >
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className={`section-description ${isDarkMode ? "dark" : "light"}`}>
              Showcasing innovative solutions in web development, cybersecurity, 
              and software engineering with cutting-edge technologies.
            </p>
          </header>
        </Slide>

        <Fade triggerOnce cascade damping={0.1}>
          <div className={`home-projects-grid ${isDarkMode ? "dark" : "light"}`}>
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={`project-${index}-${project.name}`} 
                project={project} 
              />
            ))}
          </div>
        </Fade>

        <Slide triggerOnce direction="up" delay={200}>
          <div className="view-all-container">
            <Link 
              to="/projects" 
              className={`view-all-projects-btn ${isDarkMode ? "dark" : "light"}`}
              aria-label="View all projects - See complete portfolio"
            >
              <span>View All Projects</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default HomeProject;
