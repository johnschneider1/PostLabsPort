import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./work.css";

const Work = () => {
  return (
    <div className="maindiv">
      <div className="introbox">
        <h1 className="threeD">John Law Schneider</h1>
        <p className="missionstatement">
          From the early 2000's I have been an active member of the market
          making world here in Chicago. <br />
          In 2019 I changed my journey and decided to learn how to write
          computer code.
          <br />
          That change led me to Lambda School. Below you will find some examples
          of my work. <br /> I believe that through challenge we improve and
          build ourselves.
        </p>
      </div>

      <Link to={"/landing"}>
        <button className="gohome">Back to Main Page</button>
      </Link>
      <div className="bottombox">
        <div className="brightcard">
          <p>
            I have always had a connection to the "markets" thus my first build
            outside of Lambda is an equity quoting and charting application.
            BrightLight is a React Front-End and Node Back-End , with a login
            process secured with JWT and Bcrypt.
          </p>
          <a href="https://github.com/johnschneider1/BrightLight">
            <button className="brtbtn">
              <div className="linky">Code</div>
            </button>
          </a>
          <a href="https://clientlight.johnlawschneider.now.sh/landing">
            <button className="brsbtn">
              <div className="linky">Deployed Site</div>
            </button>
          </a>
        </div>
        <div className="mudcard">
          <p>
            Python is a language that I instantly enjoyed and saw the
            possibilites of unique creation with. MUD is a multi user dungeon
            built with a team of programmers at Lambda. It's a React Front-End
            and Django and Python Back-End. It includes a chat function built
            with "Pusher".
          </p>
          <a href="https://github.com/Team-Chaotic-Lamba/Frontend">
            <button className="codebtn">
              <div className="linky">Code</div>
            </button>
          </a>
          <a href="https://client.johnlawschneider.now.sh/game">
            <button
              className="dpsbtn"
              href="https://client.johnlawschneider.now.sh/game"
            >
              <div className="linky">Deployed site</div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
