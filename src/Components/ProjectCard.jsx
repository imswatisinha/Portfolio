import React, { useContext } from "react";
import "../Css/ProjectCard.css";
import placeholder from '../assests/placeholder.gif';
import { ThemeContext } from "./ThemeContext";

const ProjectCard = ({ project }) => {
  const { isDarkMode } = useContext(ThemeContext);

  // Provide fallback values if project is null, undefined, or empty
  const defaultProject = {
    name: "Project Name Unavailable",
    image:placeholder,
    technologies: ["Not Specified"],
    description: "No description provided for this project.",
    github: "#",
    deployed: "#",
  };

  // Use default values if `project` is falsy or empty
  const currentProject = project && Object.keys(project).length > 0 ? project : defaultProject;

  return (
    <div className={`project-card ${isDarkMode ? "dark" : "light"}`}>
      <div className="card-inner">
        {/* Front Side */}
        <div className={`card-front ${isDarkMode ? "dark" : "light"}`}>
          <img src={currentProject.image} alt={`${currentProject.name} preview`} />
          <h2>{currentProject.name}</h2>
        </div>

        {/* Back Side */}
        <div className={`card-back ${isDarkMode ? "dark" : "light"}`}>
          <h3>Technologies Used:</h3>
          <div className="technologies">
            {currentProject.technologies.map((tech, index) => (
              <span
                key={index}
                className={`techno-item ${isDarkMode ? "dark" : "light"}`}
              >
                {tech}
              </span>
            ))}
          </div>
          <h4>Description:</h4>
          <p>{currentProject.description}</p>
          <div className= {`project-links ${isDarkMode ? "dark" : "light"}`}>
            <a href={currentProject.github} target="_blank" rel="noopener noreferrer">
              GitHub Code
            </a>
            <a href={currentProject.deployed} target="_blank" rel="noopener noreferrer">
              Live Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
