import React, { Suspense, lazy, useContext } from "react";
import LandingPage from "./LandingPage.jsx";
import Loader from "./Loader";
import { ThemeContext } from "./ThemeContext";

const About = lazy(() => import("./About.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const HomeProject = lazy(() => import("./HomeProject.jsx"));
const Skills = lazy(() => import("./Skills.jsx"));
const Education = lazy(() => import("./Education.jsx"));
const Experiences = lazy(() => import("./Experiences.jsx"));

const Home = () => {
  const { isDarkMode, themeUtils } = useContext(ThemeContext);

  return (
    <div className={themeUtils?.getThemeClass('home-container') || `home-container ${isDarkMode ? 'dark' : 'light'}`}>
      <LandingPage />
      <Suspense fallback={<Loader />}>
        <About/>
        <Education/>
        <Experiences/>
        <HomeProject />
        <Skills />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
