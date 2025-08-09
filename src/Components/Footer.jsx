

import React from "react";
import "../Css/Footer.css";
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaCode } from "react-icons/fa"; 
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-cus">
      <div className="wrapper">
        <div className="box">
          <a
            href="http://github.com/imswatisinha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" aria-hidden="true" />
          </a>
        </div>
        <div className="box">
          <a
            href="mailto:swatisinhas15552@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="icon" aria-hidden="true" />
          </a>
        </div>
        <div className="box">
          <a
            href="https://en.wikipedia.org/wiki/Uttar_Pradesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt className="icon" aria-hidden="true" />
          </a>
        </div>
        <div className="box">
          <a
            href="https://www.linkedin.com/in/swatisinha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" aria-hidden="true" />
          </a>
        </div>
        <div className="box">
          <a
            href="https://leetcode.com/u/swati_sinha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode className="icon" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        © Swati Sinha {year}. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
