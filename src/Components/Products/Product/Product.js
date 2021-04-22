import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product-container">
      <div className="prod-image-container">
        <img
          className="prod-image"
          src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit,w_800,c_limit/v1602178730/staging/products/Conditioner%20-pdp/carousel/1000x1000.png"
        />
      </div>
      <div className="prod-details">
        <h4>Hair fall Control Shampoo</h4>
        <div className="prod-description">
          <span className="descrip-title">For</span>
          <span>Hair fall reduction</span>
        </div>
        <div className="prod-description with">
          <span className="descrip-title">With</span>
          <span>Keratin</span>
          <span>Biotin</span>
          <span>Niacinamide</span>
          <span>Vitamin B5</span>
        </div>
        <div className="prod-price-details">
          <h4>Rs 399</h4>
          <span className="original-price">₹1194</span>
          <h5>
            <span>
              <img
                className="party-cap"
                src="https://hotemoji.com/images/dl/g/party-popper-emoji-by-google.png"
              />
            </span>
            <span className="discount">17% OFF</span>
          </h5>
        </div>
      </div>
      <div className="prod-buttons">
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
