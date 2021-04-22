import React from "react";
import Help from "./Help/Help";
import "./Description.css";

const Description = () => {
  return (
    <div style={{marginTop: "40px"}}>
      <h1 style={{textAlign: "center", marginBottom: "20px"}}>How It Works</h1>
      <div className="description-section">
        <div className="des-image-container">
          <img
            className="description-image"
            src="https://res.cloudinary.com/mosaic-wellness/image/upload/v1611455725/Bodywise/Random/Rectangle_94.png"
          />
        </div>
        <div>
          <Help number={1} />
          <Help number={2} />
          <Help number={3} />
        </div>
      </div>
    </div>
  );
};

export default Description;
