import React from "react";
import "./Help.css";

const Help = ({ number }) => {
  return (
    <div className="help-container">
      <h3>{number}. Help us know you</h3>
      <h6>
        Know what you're looking for? Browse ourcarefully crafted solutions. Not
        sure what will work for you? Schedule a free online consultation with
        our renowned experts
      </h6>
    </div>
  );
};

export default Help;
