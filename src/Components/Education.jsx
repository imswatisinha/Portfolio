

import React, { useContext, useMemo } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import Timeline from "./Timeline"; 
import "../Css/Education.css";
import { ThemeContext } from "./ThemeContext";

const Education = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  // Memoize timeline data to prevent unnecessary re-renders
  const timelineData = useMemo(() => [
    {
      type: "right-container",
      title: "Bachelor of Technology in Computer Science",
      institute: "Madan Mohan Malaviya University Of Technology",
      duration: "Nov 2022 – May 2026",
      grade: "SGPA: 8.25",
      description: "Currently pursuing my B.Tech with a focus on software development, programming languages, and data structures. Actively participating in coding contests, hackathons, and technical workshops.",
      achievements: [
        "Specialized in Full-Stack Development",
        "Advanced Data Structures & Algorithms",
        "Machine Learning & AI Fundamentals",
        "Software Engineering Principles"
      ],
      skills: ["React.js", "Python", "Django", "JavaScript", "C++", "Data Science"],
      icon: "🎓"
    },
    {
      type: "left-container",
      title: "Intermediate (12th Grade)",
      duration: "2020 – 2021",
      institute: "New Kingston Senior Secondary School, Gorakhpur, U.P.",
      grade: "CGPA: 9.62",
      description: "Excelled in mathematics and science subjects. This period helped me decide to pursue computer science as a career path, laying the groundwork for my engineering studies.",
      achievements: [
        "Mathematics Excellence Award",
        "Science Olympiad Participant",
        "Academic Distinction",
        "Leadership Role in Student Council"
      ],
      skills: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      icon: "📚"
    },
    {
      type: "right-container",
      title: "Matriculation (10th Grade)",
      duration: "2019",
      institute: "Kendriya Vidyalaya Kanpur, Cantt",
      grade: "CGPA: 10.0",
      description: "Completed matriculation with perfect grades. It was a foundational phase where I developed strong problem-solving skills and an interest in technology.",
      achievements: [
        "Perfect Academic Score",
        "Computer Science Topper",
        "Mathematics Excellence",
        "All-Round Performance Award"
      ],
      skills: ["Problem Solving", "Analytical Thinking", "Basic Programming", "Mathematics"],
      icon: "🏆"
    }
  ], []);

  const stats = useMemo(() => [
    { number: "4+", label: "Years of Learning", color: "#59a3f7" },
    { number: "8.25", label: "Current SGPA", color: "#667eea" },
    { number: "15+", label: "Courses Completed", color: "#764ba2" },
    { number: "100+", label: "Projects & Assignments", color: "#f093fb" }
  ], []);

  return (
    <section 
      className={`education-section ${isDarkMode ? "dark" : "light"}`} 
      id="education"
      aria-labelledby="education-heading"
    >
      <div className="education-container">
        
        {/* Header Section */}
        <Slide triggerOnce direction="down">
          <header className="section-header">
            <span className={`section-badge ${isDarkMode ? "dark" : "light"}`}>
              🎓 Academic Journey
            </span>
            <h1 
              id="education-heading"
              className={`section-title ${isDarkMode ? "dark" : "light"}`}
            >
              Educational <span className="gradient-text">Excellence</span>
            </h1>
            <p className={`section-description ${isDarkMode ? "dark" : "light"}`}>
              A journey of continuous learning, academic achievements, and building 
              the foundation for my career in technology and innovation.
            </p>
          </header>
        </Slide>

        {/* Stats Section */}
        <Fade triggerOnce cascade damping={0.1}>
          <div className="education-stats" role="region" aria-label="Education statistics">
            {stats.map((stat, index) => (
              <div 
                key={`stat-${index}`} 
                className={`stat-card ${isDarkMode ? "dark" : "light"}`}
              >
                <h3 style={{ color: stat.color }} aria-label={`${stat.number} ${stat.label}`}>
                  {stat.number}
                </h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </Fade>

        {/* Timeline Section */}
        <div className="timeline-wrapper">
          <Timeline timelineData={timelineData} type="education" />
        </div>

      </div>
    </section>
  );
};

export default Education;

