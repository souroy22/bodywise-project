import React from "react";
import "./Heading.css";

const Heading = () => {
  return (
    <div className="heading-container">
      <h1 className="heading-title1">Medium Lenght Display Heading Here</h1>
      <h1 className="heading-title2">Heading Title</h1>
      <h6 className="description">
        We are the country’s first holistic wellness platform for men. We talk
        to men, listen to them and understand their needs
      </h6>
      <h2 className="concern">What’s your concern?</h2>
      <div className="category-images">
        <span>
          <img
            src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1613214174/staging/products/skin-clarifying/Carousel%20NEW/Acne_Marks_Reduction_Serum.jpg"
            className="category-iamge"
          />
        </span>
        <span>
          <img
            src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1613214174/staging/products/skin-clarifying/Carousel%20NEW/Acne_Marks_Reduction_Serum.jpg"
            className="category-iamge"
          />
        </span>
        <span>
          <img
            src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1613214174/staging/products/skin-clarifying/Carousel%20NEW/Acne_Marks_Reduction_Serum.jpg"
            className="category-iamge"
          />
        </span>
      </div>
    </div>
  );
};

export default Heading;
