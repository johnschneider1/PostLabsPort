import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import "./landingpage.css";
import { Icon } from "semantic-ui-react";
import LiveAction from "./threeAni";
import ReactRain from "react-rain-animation";
import "react-rain-animation/lib/style.css";

const landingPage = () => {
  return (
    <body>
      <section>
        <div className="mainbox">
          
          <div className="header-box">
            <div className="introduction-name">John Schneider</div>
            <div className="introduction-type">
              Options Trader and Software Engineer
            </div>
          </div>
          <div className="cube" width={200} height={200}>
            {/* <LiveAction className="cube-itself" /> */}
          </div>
          <Icon name="mail" />

          {/* <div className="description">
            I am a veteran of the options and futures trading world and a Full
            Stack EngineerMy unique skill set alllows me to approach problem
            solving from all possiple angles. React, React Native, Node.js,
            Python, HTML, CSS, JavaScript, SQL....
          </div> */}

          <div className="connect">
            <div className="connect-text">Find Me Here</div>
            <a href="mailto:johnlawschneider@gmail.com">
              <div className="email-connect">Email</div>
            </a>
            <a href="https://github.com/johnschneider1">
              <div className="git-connect">Github</div>
            </a>
            <a href="https://www.linkedin.com/in/john-schneider-b3049a7/">
              <div className="link-connect">linkedin</div>
            </a>
          </div>
          {/* <Footer /> */}
        </div>
      </section>
    </body>
  );
};

export default landingPage;

// <Header as="h3" block>
// My Favorite Equities <Icon name="favorite" color="teal" />
// </Header>
