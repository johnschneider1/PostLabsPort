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
        Skills: javascript, python, html, css, node.js, react.js, react native,
        sqlite, postgresql, aws
      </SplitText>
      {/* <div className="skills">
        Skills: Javascript, html, css, node.js, aws, python, react.js, react
        native
      </div> */}
    </div>
  );
};

export default footer;
