

import React ,{useContext} from "react";
import placeholder from "../assests/placeholder.jpeg";
import Timeline from "./Timeline"; 
import "../Css/Education.css";
import "../Css/About.css";
import { ThemeContext } from "./ThemeContext";

const Education = () => {
  
  const { isDarkMode } = useContext(ThemeContext);
  const timelineData = [
    
    {
      type: "right-container",
      img: placeholder,
      title: "Bachelors of Technology in Computer Science",
      institute: "Madan Mohan Malaviya University of Technology",
      duration: "2022-2026",
      description: "Currently pursuing my B.Tech with a focus on software development, programming languages, and data structures. I have an SGPA of 8 up to semester 5 and have actively participated in coding contests, hackathons, and technical workshops.",
    },
    
    {
      type: "left-container",
      img: placeholder,
      title: "Intermediate",
      duration: "2021",
      institute: "Kendriya Vidyalaya Kanpur Cantt",
      description: "Achieved a percentage of 95%, excelling in mathematics and science. This period helped me decide to pursue computer science as a career path, laying the groundwork for my engineering studies.",
    },

    {
  type: "right-container",
  img: placeholder,
  title: "High School",
  duration: "2019",
  institute: "Kendriya Vidyalaya Kanpur Cantt",
  description: "Completed my high school education with a focus on science subjects, scoring 95%. It was a foundational phase where I developed strong problem-solving skills and an interest in technology."
}
  ];

  return (
    <div className={`education-timeline-section ${isDarkMode ? "dark" : "light"}`}>
      <h1 >The Road to Knowledge: My Education Timeline</h1>
      <Timeline timelineData={timelineData} />
      
    </div>
  );
};

export default Education;

