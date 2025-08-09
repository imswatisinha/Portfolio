import React , {useContext} from "react";
import placeholder from "../assests/placeholder.jpeg";
import Timeline from "./Timeline";
import "../Css/Experiences.css";
import "../Css/About.css";
import { ThemeContext } from "./ThemeContext";

const Experiences = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  
  const timelineData = [
    {
      type: "right-container",
      img: placeholder,
      title: "Competitive Programming",
      duration: "2023-Present",
      description:
        "Actively participate in coding contests to hone problem-solving and algorithmic skills. Solved over [Number of Problems] problems across a variety of topics, including dynamic programming, graph algorithms, and data structures. Achieved consistent performance with an improving ranking on both platforms.",
    },

    {
      type: "left-container",
      img: placeholder,
      title: "Team Project: Club Catalyst",
      duration: "2023-2023",
      description:
        "Collaborated with a team to create 'Club Catalyst', a college club management website. Designed and implemented backend functionalities using Django, ensuring seamless club registrations, event management, and member tracking. Focused on database integration and optimizing API endpoints for better performance.",
    },
 
  ];

  return (
    <div className={`experience-timeline-section ${isDarkMode ? "dark" : "light"}`}>
      <h1 style={{ textAlign: "center" }}>My Journey So Far</h1>
      <Timeline timelineData={timelineData} />
    </div>
  );
};

export default Experiences;
