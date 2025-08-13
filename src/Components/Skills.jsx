import React, { useContext } from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";
import "../Css/Skills.css";
import { ThemeContext } from "./ThemeContext.js";

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const rows = [
    {
      title: "Programming Languages",
      items: ["Python", "JavaScript", "C++", "Java"],
    },
    {
      title: "Web Development",
      items: ["HTML", "CSS", "React.js", "MongoDB", "Node.js", "Bootstrap", "Tailwind", "SQL"],
    },
    {
      title: "Data Science & AI/ML",
      items: ["Python", "Machine Learning", "Dataiku", "Natural Language Processing", "Deep Learning"],
    },
    {
      title: "Tools & Technologies",
      items: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "MS Excel", "Anaconda"],
    },
    {
      title: "Backend & Frameworks",
      items: ["Django", "REST APIs", "SQLite", "pfSense"],
    },
    {
      title: "Coursework",
      items: ["Data Structures and Algorithms", "DBMS", "OOPS", "Computer Networks", "Operating Systems", "AI", "ML"],
    },
    {
      title: "Coding Profiles",
      items: [
        { name: "LeetCode", url: "https://leetcode.com/u/iamswatisinha/" },
        { name: "CodeChef", url: "https://www.codechef.com/users/iamswatisinha2" },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/swatisinha",
        },
        {
          name: "GitHub",
          url: "https://github.com/imswatisinha",
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
    <div className={`skills-container ${isDarkMode ? "dark" : "light"}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <animated.h2 style={{
        ...spring,
        textAlign: 'center',
        marginBottom: '2rem',
        fontWeight: 700,
        fontSize: '2.5rem',
        letterSpacing: '1px',
        background: isDarkMode
          ? 'linear-gradient(90deg, #6dd5ed 0%, #2193b0 100%)'
          : 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        filter: 'drop-shadow(0 2px 8px rgba(33,147,176,0.15))',
      }}>My Skills</animated.h2>
      <div className={`skills-content ${isDarkMode ? "dark" : "light"}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {trail.map((animation, index) => (
          <animated.div
            key={index}
            style={{ ...animation, display: 'flex', justifyContent: 'center', width: '100%' }}
            className={`skill-row ${isDarkMode ? "dark" : "light"}`}
          >
            <div className={`skill-items ${isDarkMode ? "dark" : "light"}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <h3 style={{ textAlign: 'center', width: '100%' }}>{rows[index].title}</h3>
              <div
                className={`skill-item-place ${isDarkMode ? "dark" : "light"}`}
                style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}
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
                        style={{ margin: '0.5rem' }}
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
                        style={{ margin: '0.5rem' }}
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
