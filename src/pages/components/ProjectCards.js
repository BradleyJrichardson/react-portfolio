import React from "react"
import { ThemeConsumer } from "./theme"
import Image from "./Image"
import { FaGithubAlt, FaSignInAlt } from "react-icons/fa"

export default function ProjectCards({
  title,
  about,
  img,
  technologies,
  lessons,
  type,
  githublink,
  livelink,
}) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="card-container">
          <div className={`card-${theme} card`}>
            <Image src={img} width={330} height={280} mode="fit" />
            <h3>{title}</h3>
            <div>
              <div>{about} </div>
              <h4>Techniques</h4>
              <div>{lessons}</div>
              <h4>Type</h4>
              <div>{type}</div>
              <div>Technologies</div>
              {technologies}

              <div>
                <a href={githublink}>
                  <FaGithubAlt color="rgb(255, 215, 0)" size={25} />
                </a>
                <a href={livelink}>
                  <FaSignInAlt color="rgb(255, 215, 0)" size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeConsumer>
  )
}
