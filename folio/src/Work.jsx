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
      {/* <div className="imgdiv">
        <img
          className="prjimage"
          src="https://i.imgur.com/t0WggV2.png"
          alt="projects"
        />
      </div> */}
      <Link to={"/landing"}>
        <button className="gohome">Back to Main Page</button>
      </Link>
      <div className="bottombox">
        {/* <h3 className="typewriter">
            Building projects is a key part of Lambda and my growth as a
            programmer.
          </h3> */}
        <div className="brightcard">
          <p>
            I have always had a connection to the "markets" thus <br />
            my first build outside of Lambda is equity quotes and charting.
            <br /> BrightLight is a React and Node application, <br />
            with login process in hashed with bcrypt and secured with jwt.
          </p>
          <button
            className="brtbtn"
            href="https://github.com/johnschneider1/BrightLight"
          >
            <div className="linky">Code</div>
          </button>
          <button
            className="brsbtn"
            href="https://clientlight.johnlawschneider.now.sh/landing"
          >
            <div className="linky">Deployed Site</div>
          </button>
        </div>
        <div className="mudcard">
          <p>
            Python is a language that I instantly enjoyed and saw the
            possibilites of unique creation with.
            <br /> MUD is a multi user dungeon built with a team of programmers
            at Lambda.
            <br /> It's a react frontend and Django and Python backend. <br />{" "}
            It includes a chat function built with "Pusher".
          </p>
          <button
            className="codebtn"
            href="https://github.com/Team-Chaotic-Lamba/Frontend"
          >
            <div className="linky">Code</div>
          </button>
          <button
            className="dpsbtn"
            href="https://client.johnlawschneider.now.sh/game"
          >
            <div className="linky">Deployed site</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
