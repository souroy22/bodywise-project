import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const hamburgerClick = () => {
    setVisible(!visible);
  };

  const menuRef = useRef();
  const hamburgerStyle = (visible) => {
    if (visible) {
      return "flex";
    } else {
      return "none";
    }
  };

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [visible]);
  return (
    <div className="navbar-container">
      <div className="left-section">
        {!visible ? (
          <FontAwesomeIcon
            offset={() => setVisible(false)}
            icon={faBars}
            className="hamburger-menu"
            onClick={hamburgerClick}
          />
        ) : (
          <button
            offset={() => setVisible(false)}
            className="cross-btn"
            onClick={hamburgerClick}
          >
            X
          </button>
        )}
        <h2>Bodywise</h2>
      </div>

      <div
        className="hamburger-options"
        ref={menuRef}
        style={{ display: hamburgerStyle(visible) }}
      >
        <h4 onClick={() => setVisible(false)}>Shop</h4>
        <h4 onClick={() => setVisible(false)}>Take Self - Assignment</h4>
        <h4 onClick={() => setVisible(false)}>
          Choose Concers
          <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: "3px" }} />
        </h4>
        <h4 onClick={() => setVisible(false)}>All Products </h4>
        <h4 onClick={() => setVisible(false)}>Book Consultation</h4>
      </div>
      <div className="middle-section">
        <h4>Shop</h4>
        <h4>Take Self - Assignment</h4>
        <h4>
          Choose Concers
          <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: "3px" }} />
        </h4>
        <h4>All Products </h4>
        <h4>Book Consultation</h4>
      </div>
      <div className="right-section">
        <span>
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <span>
          <img
            src="https://www.logo.wine/a/logo/WhatsApp/WhatsApp-Logo.wine.svg"
            className="image"
          />
        </span>
        <span>
          <img
            src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/36909156_690774674603365_8277753472456065024_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lD4tEPG8fIsAX_6vnRp&_nc_ht=scontent.fccu3-1.fna&oh=7c026100eabe3b73488a27dc4188d505&oe=60A79774"
            className="profile-logo"
          />
        </span>
        <span>
          <FontAwesomeIcon icon={faShoppingBag} />
          <span className="cart-count">2</span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
