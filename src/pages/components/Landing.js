import React from "react";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export default function Landing() {
  return (
    <Fade left>
      <div className="landing-page">
        <div className="landing-content">
          <h1>
            Bradley
            <span className="wave" role="img">
              👋
            </span>
            <br />
            Richardson
          </h1>
          <h3 classname="intro-text">
            Full-stack Web Developer <br />
            Current Student at CoderAcademy
          </h3>
          <a
            className="landing-icons"
            href="https://linkedin.com/in/bradleyJakeRichardson"
          >
            <FaLinkedinIn color="rgb(255, 215, 0)" size={25} />
          </a>
          <a
            className="landing-icons"
            href="https://github.com/BradleyJrichardson"
          >
            <FaGithubAlt color="rgb(255, 215, 0)" size={25} />
          </a>
        </div>
      </div>
    </Fade>
  );
}
