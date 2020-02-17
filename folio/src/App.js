import React from "react";
// import { SocialIcon } from "react-social-icons";
import "./App.css";
import Routes from "./Routes";
import landingPage from "./landingPage.js";
import LiveAction from "./threeAni";
import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Routes />
        {/* <landingPage /> */}
        {/* <h1>hi</h1> */}
        {/* <LiveAction /> */}
        <Link to="/landing">
          {/* <div className="deconstructed">
          ENTER
          <div>ENTER</div>
          <div>ENTER</div>
          <div>ENTER</div>
          <div>ENTER</div>
        </div> */}
        </Link>
      </div>
    </>
  );
}

export default App;
