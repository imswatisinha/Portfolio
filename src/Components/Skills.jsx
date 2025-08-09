import React, { useContext } from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";
import "../Css/Skills.css";
import { ThemeContext } from "./ThemeContext.js";

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const rows = [
    {
      title: "Languages",
      items: ["JavaScript", "Python", "C++", "Java", "C"],
    },
    {
      title: "Tools & Frameworks",
      items: ["Django", "Git", "Docker", "VS Code"],
    },
    {
      title: "Libraries",
      items: ["React", "Redux", "Bootstrap", "jQuery"],
    },
    {
      title: "Web Technologies",
      items: ["HTML", "CSS"],
    },
    {
      title: "DSA & Algorithms",
      items: ["Sorting", "Graph Algorithms", "DP", "Backtracking"],
    },
    {
      title: "Coding Profiles",
      items: [
        { name: "LeetCode", url: "https://leetcode.com/u/swati_sinha/" },
        { name: "Codechef", url: "https://www.codechef.com/users/swati64" },
        {
          name: "Coding Ninjas",
          url: "https://www.naukri.com/code360/profile/SwatiSinha",
        },
        {
          name: "GeeksForGeeks",
          url: "https://www.geeksforgeeks.org/user/swatisinhas15552/",
        },
      ],
    },
  ];

  const trail = useTrail(rows.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 200,
    config: { tension: 200, friction: 15 },
  });

  const spring = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className={`skills-container ${isDarkMode ? "dark" : "light"}`}>
      <animated.h2 style={spring}>My Skills</animated.h2>
      <div className={`skills-content ${isDarkMode ? "dark" : "light"}`}>
        {trail.map((animation, index) => (
          <animated.div
            key={index}
            style={animation}
            className={`skill-row ${isDarkMode ? "dark" : "light"}`}
          >
            <div className={`skill-items ${isDarkMode ? "dark" : "light"}`}>
              <h3>{rows[index].title}</h3>
              <div
                className={`skill-item-place ${isDarkMode ? "dark" : "light"}`}
              >
                {rows[index].title === "Coding Profiles"
                  ? rows[index].items.map((profile, idx) => (
                      <a
                        key={idx}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`skill-item ${
                          isDarkMode ? "dark" : "light"
                        }`}
                      >
                        {profile.name}
                      </a>
                    ))
                  : rows[index].items.map((item, idx) => (
                      <div
                        key={idx}
                        className={`skill-item ${
                          isDarkMode ? "dark" : "light"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
              </div>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
