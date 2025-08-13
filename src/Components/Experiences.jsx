import React, { useContext, useMemo } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import Timeline from "./Timeline";
import "../Css/Experiences.css";
import { ThemeContext } from "./ThemeContext";

const Experiences = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  // Memoize timeline data to prevent unnecessary re-renders
  const timelineData = useMemo(() => [
    {
      type: "right-container",
      title: "Data Science Intern",
      institute: "Sabudh Foundation, Mohali",
      duration: "July 2025 – Ongoing",
      location: "Remote",
      description: "Working on real-world datasets for data cleaning, preprocessing, and visualization using advanced Python libraries. Contributing to predictive modeling and machine learning tasks.",
      achievements: [
        "Built end-to-end data pipelines for social impact projects",
        "Implemented predictive models with 85+ % accuracy",
        "Contributed to open-source data science initiatives",
        "Mentored junior interns in Python programming"
      ],
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Data Visualization"],
      icon: "📊"
    },
    {
      type: "left-container",
      title: "ISRO Project Intern",
      institute: "Indian Institute of Technology Jodhpur",
      duration: "May 2025 – Ongoing",
      location: "Remote",
      description: "Working on MIL-STD-1553B protocol analysis and automation of bus controller scheduling evaluation. Developing secure backend services and responsive UI.",
      achievements: [
        "Developed protocol analysis tools for aerospace applications",
        "Created responsive UI with React.js and Tailwind CSS",
        "Implemented secure backend with Django and Python",
        "Enhanced network security protocols by 40%"
      ],
      skills: ["React.js", "Django", "Python", "Tailwind CSS", "Network Security", "Protocol Analysis"],
      icon: "🚀"
    },
    {
      type: "right-container",
      title: "Cybersecurity Intern",
      institute: "Centre for Development of Advanced Computing (CDAC)",
      duration: "June 2024 – July 2024",
      location: "Greater Noida, Remote",
      description: "Specialized in DDoS mitigation using pfSense firewall platform. Enhanced network resilience and security infrastructure for critical systems.",
      achievements: [
        "Reduced DDoS attack impact by 60%",
        "Configured advanced firewall rules and policies",
        "Implemented network monitoring solutions",
        "Documented security best practices"
      ],
      skills: ["pfSense", "Network Security", "Firewall Configuration", "DDoS Mitigation", "Security Analysis"],
      icon: "🔒"
    },
    {
      type: "left-container",
      title: "Competitive Programming & Hackathons",
      institute: "Various Platforms & Organizations",
      duration: "2023 – Present",
      location: "National & International",
      description: "Active participation in competitive programming contests and hackathons, contributing to innovative solutions and enhancing problem-solving capabilities.",
      achievements: [
        "Smart India Hackathon Participant",
        "SHE HACKS by UNSTOP Participant",
        "Qualified for Flipkart GRiD 6.0 Level 1",
        "Solved 500+ coding problems across platforms"
      ],
      skills: ["Algorithm Design", "Problem Solving", "C++", "Python", "Competitive Programming", "Team Leadership"],
      icon: "💻"
    }
  ], []);

  const stats = useMemo(() => [
    { number: "4+", label: "Internships", color: "#59a3f7" },
    { number: "3", label: "Organizations", color: "#667eea" },
    { number: "10+", label: "Projects Delivered", color: "#764ba2" },
    { number: "500+", label: "Problems Solved", color: "#f093fb" }
  ], []);

  return (
    <section 
      className={`experience-section ${isDarkMode ? "dark" : "light"}`} 
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="experience-container">
        
        {/* Header Section */}
        <Slide triggerOnce direction="down">
          <header className="section-header">
            <span className={`section-badge ${isDarkMode ? "dark" : "light"}`}>
              💼 Professional Growth
            </span>
            <h1 
              id="experience-heading"
              className={`section-title ${isDarkMode ? "dark" : "light"}`}
            >
              Experience & <span className="gradient-text">Achievements</span>
            </h1>
            <p className={`section-description ${isDarkMode ? "dark" : "light"}`}>
              My professional journey showcasing hands-on experience in cutting-edge 
              technologies, real-world projects, and continuous skill development.
            </p>
          </header>
        </Slide>

        {/* Stats Section */}
        <Fade triggerOnce cascade damping={0.1}>
          <div className="experience-stats" role="region" aria-label="Experience statistics">
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
          <Timeline timelineData={timelineData} type="experience" />
        </div>

      </div>
    </section>
  );
};

export default Experiences;
