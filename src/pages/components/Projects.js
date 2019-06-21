import React from "react"
import ProjectCards from "./ProjectCards"
import Nasa from "../../images/nasa.png"
import ISS from "../../images/ISS.png"
import portfolio1 from "../../images/portfolio-1.png"
import portfolio2 from "../../images/portfolio-2.png"
import portfolio3 from "../../images/portfolio-3.png"
import spaceX from "../../images/spaceX.png"
import teach2learn from "../../images/teach2learn.png"
import tictactoe from "../../images/tictactoe.png"
import spaceClient from "../../images/space-client.png"
import battle from "../../images/battle.png"
import Rotate from "react-reveal/Rotate"

export default function Projects() {
  return (
    <React.Fragment>
      <h2>What I've Been Working on</h2>
      <Rotate bottom right>
        <ProjectCards
          title="Nasa POD Portal"
          about="Retrieve the Picture of the day from the Nasa API"
          technologies="Vanilla JS, HTML, CSS"
          lessons="Manipulation of the DOM, interacting with API's"
          type="Personal Project"
          img={Nasa}
          githublink="https://github.com/BradleyJrichardson/nasa-API-client"
          livelink="https://distracted-goodall-8fb3e0.netlify.com/"
        ></ProjectCards>
      </Rotate>

      <Rotate bottom left>
        <ProjectCards
          title="Space API Client"
          about="A dashboard to view different space related API's. Built to solidify the concepts I learnt while building 'Github Battle'"
          lessons="Using an Express server to make API calls and pass information to React, Async await, Contexts, React router, states, props, lifecyle methods"
          type="Personal Project"
          technologies="React, Express, CSS"
          img={spaceClient}
          githublink="https://github.com/BradleyJrichardson/react-hubble-api"
          livelink="#"
        ></ProjectCards>
      </Rotate>

      <Rotate bottom right>
        <ProjectCards
          title="Where's the ISS"
          about="View the current location of the International Space Station."
          lessons="Dom manipulation, Leaflet.js library, API's"
          type="Tutorial"
          technologies="Vanilla JS, HTML, Bulma, leaflet.js"
          img={ISS}
          githublink="https://github.com/BradleyJrichardson/spaceX-API-client"
          livelink="https://objective-darwin-0b23b4.netlify.com/"
        ></ProjectCards>
      </Rotate>
      <Rotate bottom left>
        <ProjectCards
          title="SpaceX API Client"
          about="View the lastest launch of SpaceX and lift off with them"
          lessons="Dom manipulation, API's"
          type="Personal Project"
          technologies="Vanilla JS, HTML, Bulma, Axios"
          img={spaceX}
          githublink="https://github.com/BradleyJrichardson/spaceX-API-client"
          livelink="https://serene-golick-f43236.netlify.com/"
        ></ProjectCards>
      </Rotate>
      <Rotate bottom right>
        <ProjectCards
          title="Github Battle"
          about="Allows the user to view most popular repos by category or battle their friends"
          lessons="React, API's"
          type="Tutorial"
          technologies="React"
          img={battle}
          githublink="https://github.com/BradleyJrichardson/github-battle"
          livelink="https://pedantic-agnesi-274c5f.netlify.com/"
        ></ProjectCards>
      </Rotate>
      <Rotate bottom left>
        <ProjectCards
          title="Teach 2 Learn"
          about="Teach2Learn can be seen as a lesson board. Anyone that makes an account can advertise a lesson. A lesson that will be based on technologies the developer has just used."
          lessons="Learning an integreting new technologies by reading the documentation"
          type="Bootcamp Project"
          technologies="Ruby on Rails, PostgresSQL, CSS, Bootstrap, Omniauth, Google maps, Geolocation, AWS S3, 
          Mailgun"
          img={teach2learn}
          githublink=""
          livelink=""
        ></ProjectCards>
      </Rotate>
      <Rotate bottom right>
        <ProjectCards
          title="Tic Tac Toe"
          about="Provides the user with the ability to play their friend in Tic Tac Toe. Alternatively if they dont have any friends they can verse a computer"
          technologies="Vanilla JS, HTML, CSS"
          lessons="Programming logic, DOM manipulation"
          type="Bootcamp Project"
          img={tictactoe}
          githublink="https://github.com/BradleyJrichardson/tic-tac-toe"
          livelink="https://condescending-sinoussi-c7ba57.netlify.com/"
        ></ProjectCards>
      </Rotate>
      <Rotate bottom left>
        <ProjectCards
          title="Portfolio 1"
          about="My first attemped at a portfolio"
          technologies="Vanilla JS, HTML, CSS"
          lessons="CSS do's and dont's, I abandon this project and took what I learnt and applied it to 'Portfolio 2'"
          type="Bootcamp Project"
          img={portfolio1}
          githublink="https://github.com/BradleyJrichardson/First-Website"
          livelink="https://bradleyjrichardson.github.io/First-Website/"
        ></ProjectCards>
      </Rotate>
      <Rotate bottom right>
        <ProjectCards
          title="Portfolio 2"
          about="Second attempt and remained in place for 3 months"
          technologies="HTML, CSS"
          lessons="Flexbox, REM units, CSS variables"
          type="Bootcamp Project"
          img={portfolio2}
          githublink="https://github.com/BradleyJrichardson/BradleyJrichardson.github.io"
          livelink="https://bradleyjrichardson.github.io/"
        ></ProjectCards>
      </Rotate>
      <Rotate bottom left>
        <ProjectCards
          title="Portfolio 3"
          about="Quickly made with Bulma, to refresh my look"
          technologies="HTML, Bulma"
          lessons="Working with Bulma/CSS framworks, using JavaScript animation and utility libraries"
          type="Personal Project"
          img={portfolio3}
          githublink="https://github.com/BradleyJrichardson/portfolio-3"
          livelink="https://bradleyjrichardson.github.io/portfolio-3/"
        ></ProjectCards>
      </Rotate>

      <Rotate bottom right>
        <ProjectCards
          title="Portfolio 4"
          about="What your currently viewing, built because I wanted to make it in Gatsby"
          lessons="Using React, Gatsby"
          technologies="React, Gatsby"
          type="Personal Project"
          githublink="https://github.com/BradleyJrichardson/gatsby-portfolio"
          livelink=""
        ></ProjectCards>
      </Rotate>
    </React.Fragment>
  )
}
