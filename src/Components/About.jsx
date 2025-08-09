
import React, { useContext } from "react";
import Lottie from "lottie-react";
import animationData from "../assests/Main Scene.json";
import { ThemeContext } from "./ThemeContext";
import "../Css/About.css";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const highlight_class = `highlight ${isDarkMode ? "dark" : "light"}`;
  return (
    <div className={`about-section ${isDarkMode ? "dark" : "light"}`}>
      <div className="about-animation">
        <Lottie animationData={animationData} ></Lottie>
      </div>
      <div className="about-text">
        <h2>Get to Know Me</h2>
        <p>
          My name is <span className={highlight_class}>Swati Sinha</span>, and
          I am proficient in both backend and frontend technologies, including{" "}
          <span className={highlight_class}>HTML</span>,{" "}
          <span className={highlight_class}>JavaScript</span>,{" "}
          <span className={highlight_class}>CSS</span>,{" "}
          <span className={highlight_class}>Bootstrap</span>,{" "}
          <span className={highlight_class}>React</span>,{" "}
          <span className={highlight_class}>Python</span>,{" "}
          <span className={highlight_class}>Django</span>, and{" "}
          <span className={highlight_class}>SQLite</span>.
        </p>
        <p>
          I also have a strong command of programming languages such as{" "}
          <span className={highlight_class}>C</span>,{" "}
          <span className={highlight_class}>C++</span>,{" "}
          <span className={highlight_class}>Java</span>, and{" "}
          <span className={highlight_class}>Python</span>. Additionally, I actively
          participate in{" "}
          <span className={highlight_class}>coding contests</span>.
        </p>
        <p>
          I enjoy{" "}
          <span className={highlight_class}>learning new technologies</span> and
          aspire to become a{" "}
          <span className={highlight_class}>software engineer</span> to
          contribute meaningfully to the{" "}
          <span className={highlight_class}>tech industry</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
