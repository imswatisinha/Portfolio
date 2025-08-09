
import projects from "../utilities/projectList.js";
import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import "../Css/Projects.css";
import { Slide } from "react-awesome-reveal";
import { ThemeContext } from "./ThemeContext";
import Loader from "./Loader";

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Project = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);

  const [selectedCategory, setSelectedCategory] = useState(
    query.get("category") || "All"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  useEffect(() => {
    navigate(`?category=${selectedCategory}`);
  }, [selectedCategory, navigate]);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category.includes(selectedCategory));

  return (
    <div className={`project-container ${isDarkMode ? "dark" : "light"}`}>
      <Slide triggerOnce direction="left">
        <h1>My Projects</h1>
      </Slide>

      <Slide triggerOnce direction="right">
        <div className={`category-navbar ${isDarkMode ? "dark" : "light"}`}>
          {["All", "Fullstack", "Frontend", "Backend"].map((category) => (
            <button
              key={category}
              className={`category-button ${
                selectedCategory === category ? "active-category" : ""
              } ${isDarkMode ? "dark" : "light"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </Slide>

      {loading ? (
        <Loader />
      ) : filteredProjects.length === 0 ? (
        <div className="no-projects">
          <h2>No Projects Found</h2>
          <p>There are currently no projects to display in this category.</p>
        </div>
      ) : (
        <Slide triggerOnce cascade>
          <div className={`display-projects ${isDarkMode ? "dark" : "light"}`}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Slide>
      )}
    </div>
  );
};

export default Project;
