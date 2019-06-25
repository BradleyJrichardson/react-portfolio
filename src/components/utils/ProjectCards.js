import React from "react";
import { ThemeConsumer } from "./theme";
import Image from "./Image";
import { FaGithubAlt, FaSignInAlt } from "react-icons/fa";
import Tooltip from "./Tooltip";

export default function ProjectCards({
  title,
  about,
  img,
  technologies,
  lessons,
  type,
  githublink,
  livelink
}) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card-${theme} card`}>
          <Image src={img} width={330} height={280} mode="fit" />
          <h3>{title}</h3>
          <div>
            <div className="italic project-about">{about} </div>
            <h4>Techniques</h4>
            <div className="project-text">{lessons}</div>
            <h4>Technologies</h4>
            <div className="project-text"> {technologies}</div>
            <div className="float-right">
              <h4 className="center-text">Type</h4>
              <div className="project-text">{type}</div>
            </div>
            <div className="project-link-container">
              <a className="project-link" href={githublink}>
                <Tooltip text="Github">
                  <FaGithubAlt color="rgb(255, 215, 0)" size={25} />
                </Tooltip>
              </a>

              <a className="project-link" href={livelink}>
                <Tooltip text="Live Application">
                  <FaSignInAlt color="rgb(255, 215, 0)" size={25} />
                </Tooltip>
              </a>
            </div>
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
}
