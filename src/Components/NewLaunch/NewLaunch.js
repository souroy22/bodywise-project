import React from "react";
import Products from "../Products/Products/Products";
import "./NewLaunch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleNotch,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const NewLaunch = () => {
  return (
    <div className="newLaunch-container">
      <h1>New Launches</h1>
      <div className="category-buttons-container">
        <button>Hair</button>
        <button>Skin</button>
        <button>Weight</button>
      </div>
      <div>
        <Products />
      </div>
      <div className="navigation">
        <div>
          <FontAwesomeIcon icon={faCircle} style={{ marginRight: "10px" }} />
          <FontAwesomeIcon icon={faCircleNotch} />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ marginRight: "10px", color: "gray" }}
          />
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};

export default NewLaunch;
