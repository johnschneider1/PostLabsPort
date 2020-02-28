import React from "react";
import "./spinners.css";

export default function spinners() {
  return (
    <div>
      <div id="wrapper">
        {/* <div class="gears" id="one-gear">
          <div class="gears-container">
            <div class="gear-rotate"></div>
          </div>
        </div> */}

        <div class="gears" id="two-gears">
          <div class="gears-container">
            <div class="gear-rotate"></div>
            <div class="gear-rotate-left"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
