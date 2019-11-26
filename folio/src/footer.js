import React from "react";
import "./footer.css";
import SplitText from "react-pose-text";

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

const footer = () => {
  return (
    <div className="footer">
      <SplitText charPoses={charPoses}>
        Skills: Javascript, html, css, node.js, aws, python, react.js, react
        native, SQL, PG
      </SplitText>
      {/* <div className="skills">
        Skills: Javascript, html, css, node.js, aws, python, react.js, react
        native
      </div> */}
    </div>
  );
};

export default footer;
