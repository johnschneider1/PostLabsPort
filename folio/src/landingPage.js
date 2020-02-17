import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import "./landingpage.css";
// import { Icon } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";
import LiveAction from "./threeAni";
import SplitText from "react-pose-text";
import { Link } from "react-router-dom";

const charPoses = {
  hoverable: true,
  init: { scale: 1 },
  hover: {
    scale: 1.01,
    transition: {
      type: "spring",
      velocity: 12
    }
  }
};

const landingPage = () => {
  // const [text, setText] = useState("John Schneider");

  // const onMouseOver = e => {
  //   setText({ text: "Resume" });
  // };

  // const onMouseOut = e => {
  //   setText({ text: "" });
  // };

  return (
    <body>
      <section>
        <div className="mainbox">
          <div className="header-box">
            {/* <SplitText charPoses={charPoses} className="introduction-name">
              John Schneider
            </SplitText> */}
            {/* <a href="https://resume.creddle.io/resume/46ctrjf76ej">
              <div className="introduction-name">John Schneider</div>
            </a> */}
            <div className="introduction-name">John Schneider</div>
            {/* <SplitText className="introduction-name" charPoses={charPoses}>
              John Schneider
            </SplitText> */}

            {/* <div className="introduction-type">
              Full Stack Software Engineer and Options Trader
            </div> */}
            <SplitText charPoses={charPoses}>
              Full Stack Engineer & Derivatives Portfolio Manager
            </SplitText>
          </div>

          <div className="cube" width={50} height={50}>
            {/* <LiveAction className="cube-itself" /> */}
          </div>

          {/* <Icon className="icon1" name="mail" /> */}

          {/* <div className="description">
            I am a veteran of the options and futures trading world and a Full
            Stack EngineerMy unique skill set alllows me to approach problem
            solving from all possiple angles. React, React Native, Node.js,
            Python, HTML, CSS, JavaScript, SQL....
          </div> */}

          <div className="connect">
            <SplitText charPoses={charPoses} className="findme">
              Find Me Here
            </SplitText>
            {/* <div className="connect-text">Find Me Here</div> */}
            <a href="mailto:johnlawschneider@gmail.com">
              <div className="email-connect">Email</div>
            </a>
            <a href="https://github.com/johnschneider1">
              <div className="git-connect">Github</div>
            </a>
            <a href="https://www.linkedin.com/in/john-schneider-b3049a7/">
              <div className="link-connect">linkedin</div>
            </a>
            <a href="https://resume.creddle.io/resume/46ctrjf76ej">
              <div className="link-connect">Resume</div>
            </a>
            {/* <a href="https://clientlight.johnlawschneider.now.sh/landing">
              <div className="link-connect">MyWork</div>
            </a> */}
            <Link to={"/work"}>
              <div className="link-connect">MyWork</div>
            </Link>
          </div>
          {/* <img
            // className="projects"
            src="https://i.imgur.com/t0WggV2.png"
            alt="project"
            height={50}
            width={50}
          /> */}
          <Footer className="footer" />
        </div>
      </section>
    </body>
  );
};

export default landingPage;

// <Header as="h3" block>
// My Favorite Equities <Icon name="favorite" color="teal" />
// </Header>
// src="https://i.imgur.com/fSTDv1T.png"
