import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import "./landingpage.css";
// import { Icon } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";
import LiveAction from "./threeAni";
import SplitText from "react-pose-text";
import { Link } from "react-router-dom";
import Glob from "./glob";
import Gears from "./gears";

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
    <div className="solt">
      <section>
        <div className="mainbox">
          {/* <SplitText charPoses={charPoses} className="introduction-name">
            John _Schneider
          </SplitText> */}

          {/* <a href="https://resume.creddle.io/resume/46ctrjf76ej">
              <div className="introduction-name">John Schneider</div>
            </a> */}
          <div className="introduction-name">John Schneider</div>

          {/* <SplitText charPoses={charPoses}>
              Full Stack Engineer && Derivatives Portfolio Manager
            </SplitText> */}

          {/* <div className="findme">
            <SplitText charPoses={charPoses} className="findme">
              Find Me Here:
            </SplitText>
          </div> */}

          <div className="connect">
            <SplitText charPoses={charPoses} className="findme">
              Connect:
            </SplitText>
            {/* <div className="connect-text">Connect:</div> */}
            <a href="mailto:johnlawschneider@gmail.com">
              <div className="email-connect">Email</div>
            </a>
            <a href="https://github.com/johnschneider1">
              <div className="git-connect">Github</div>
            </a>
            <a href="https://www.linkedin.com/in/john-schneider-b3049a7/">
              <div className="link-connect">linkedin</div>
            </a>
            {/* <a href="https://resume.creddle.io/resume/46ctrjf76ej">
              <div className="link-connect">Resume</div>
            </a> */}
            <Gears />

            <Link to={"/work"}>
              <div className="link-connect">MyProjects</div>
            </Link>
            {/* <LiveAction /> */}
            {/* <Glob /> */}
          </div>

          <Footer className="footer" />
        </div>
      </section>
    </div>
  );
};

export default landingPage;

// <Header as="h3" block>
// My Favorite Equities <Icon name="favorite" color="teal" />
// </Header>
// src="https://i.imgur.com/fSTDv1T.png"
