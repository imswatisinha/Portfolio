import React, { Suspense, lazy } from "react";
import LandingPage from "./LandingPage.jsx";
import Loader from "./Loader";
import { ThemeProvider } from "./ThemeContext";

const About = lazy(() => import("./About.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const HomeProject = lazy(() => import("./HomeProject.jsx"));
const Skills = lazy(() => import("./Skills.jsx"));
const Education = lazy(() => import("./Education.jsx"));
const Experiences = lazy(() => import("./Experiences.jsx"));

const Home = () => {
  return (
    <>
      <ThemeProvider>
        <LandingPage />
        <Suspense fallback={<Loader />}>
            <About/>
            <Education/>
            <Experiences/>
          <HomeProject />
          <Skills />
          <Contact />
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default Home;
