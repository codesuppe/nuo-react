import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavigation = ({ mobiledata }) => {
  return (
    <div className="mGridNav">
      <NavLink to="/">
        <img src={mobiledata.navImages.backBtn[0]} alt="backbtn" id="backBtn" />
      </NavLink>

      <div id="mNavigation">
        <nav>
          <NavLink
            to="/Home"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="pageBtn_underline navy"></div>
            <div className="pageBtn" alt="nav-3" />
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="pageBtn_underline lightblue"></div>
            <div className="pageBtn lightblue" alt="nav-3" />
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="pageBtn_underline orange"></div>
            <div className="pageBtn orange" alt="nav-3" />
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
export default MobileNavigation;
