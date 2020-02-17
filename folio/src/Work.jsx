import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./work.css";

const Work = () => {
  return (
    <div className="maindiv">
      <h1>Examples of my Work</h1>
      <h3>
        Building projects is a key part of Lambda and my growth as a programmer.
      </h3>
      {/* <h3>Below I will introdue you to some of the work I am most proud of.</h3> */}
      <p>
        I have always had a connection to the "markets" thus <br />
        my first build outside of Lambda is equity quotes and charting.
        <br /> BrightLight is a react and node application, <br />
        it's login process in hashed with bcrypt and secured with jwt.
      </p>
      <a href="https://clientlight.johnlawschneider.now.sh/landing">
        <div className="link-connect">BrightLight!</div>
      </a>
      <p>
        Python is a language that I instantly enjoyed and saw the possibilites
        of unique creation with.
        <br /> MUD is a multi user dungeon built with a team of programmers at
        Lambda.
        <br /> It's a react frontend and django and python backend. <br /> It
        includes a chat function built with "Pusher".
      </p>
      <a href="https://client.johnlawschneider.now.sh/game">
        <div className="link-connect">MUD!</div>
      </a>
      <Link to={"/landing"}>
        <div className="link-connect">GO Home!</div>
      </Link>
    </div>
  );
};

export default Work;
