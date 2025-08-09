import projects from "../utilities/projectList.js";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { ThemeContext } from "./ThemeContext";
import Loader from "./Loader";
import ProjectCard from "./ProjectCard";
import "../Css/Projects.css";

const HomeProject = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  // Display only the first 3 projects
  const displayedProjects = projects.slice(0, 3);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className={`project-container ${isDarkMode ? "dark" : "light"}`}>
      <Slide triggerOnce direction="left">
        <h1>My Projects</h1>
      </Slide>

      {loading ? (
        <Loader />
      ) : displayedProjects.length === 0 ? (
        <div className="no-projects">
          <h2>No Projects Found</h2>
          <p>There are currently no projects to display.</p>
        </div>
      ) : (
        <>
          <Slide triggerOnce cascade>
            <div className={`display-projects ${isDarkMode ? "dark" : "light"}`}>
              {displayedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </Slide>

          {/* View More Link */}
          <div className="view-more">
            <Link to="/projects" className={`view-more-link ${isDarkMode ? "dark" : "light"}`}>
              View More
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeProject;
