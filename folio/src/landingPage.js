import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import "./landingpage.css";
import SplitText from "react-pose-text";
import { Link } from "react-router-dom";
import Gears from "./gears";
import Spin from "./spinners";

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
  return (
    <div className="solt">
      <section>
        <div className="mainbox">
          <div className="introduction-name">John Schneider</div>

          <div className="connect">
            <SplitText charPoses={charPoses} className="findme">
              Connect:
            </SplitText>

            <a href="mailto:johnlawschneider@gmail.com">
              <div className="email-connect">Email</div>
            </a>
            <a href="https://github.com/johnschneider1">
              <div className="git-connect">Github</div>
            </a>
            <a href="https://www.linkedin.com/in/john-schneider-b3049a7/">
              <div className="link-connect">linkedin</div>
            </a>

            <Link to={"/work"}>
              <div className="link-connect">MyProjects</div>
            </Link>
          </div>
          {/* <div className="spinbox">
            <Spin className="spinning" />
          </div> */}

          <Footer className="footer" />
        </div>
      </section>
    </div>
  );
};

export default landingPage;
