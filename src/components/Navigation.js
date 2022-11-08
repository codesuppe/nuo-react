import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = ({ desktopdata }) => {
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.querySelector("#backBtn").style.display = "none";
      document.querySelector(".navBox").style.display = "none";
    } else {
      document.querySelector("#backBtn").style.display = "inherit";
      document.querySelector(".navBox").style.display = "inherit";
    }
  }, [location.pathname]);

  return (
    <>
      <div className="gridNav">
        <NavLink to="/">
          <img
            src={desktopdata.navImages.backBtn[0]}
            alt="backbtn"
            id="backBtn"
          />
        </NavLink>

        <div id="navigation">
          <nav className="navBox">
            <NavLink
              to="/Home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="pageBtn" alt="nav-3" />
              <div className="pageBtn_underline navy"></div>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="pageBtn lightblue" alt="nav-3" />
              <div className="pageBtn_underline lightblue"></div>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="pageBtn orange" alt="nav-3" />
              <div className="pageBtn_underline orange"></div>
            </NavLink>
          </nav>

          <div className="logobox">
            <img src={desktopdata.navImages.logo[0]} alt="logo-nuo" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
