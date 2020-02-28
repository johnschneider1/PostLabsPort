import React from "react";
import "./gears.css";

const Gear = ({ color, size, spin }) => {
  return (
    <div className="spinninggears">
      <i id="gear1" className="fa fa-5x fa-gear spin"></i>
      <i id="gear2" className="fa fa-5x fa-gear spin-back"></i>
      <i id="gear3" className="fa fa-5x fa-gear spin"></i>
    </div>
  );
};

export default Gear;
