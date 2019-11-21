import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer">
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
    </div>
  );
};

export default footer;
