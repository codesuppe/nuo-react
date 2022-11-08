import React from "react";
import { Link } from "react-router-dom";

const FrontDesktop = ({ desktopdata }) => {
  //background-color
  document.body.style.background =
    "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(177,210,231,1) 100%)";

  return (
    <>
      <div className="gridFront">
        <div className="flexFront">
          <Link to="/Home">
            <img
              src={desktopdata.frontpage.banners[0]}
              alt="what-we-do-banner"
            />
          </Link>
          <Link to="/about">
            <img
              src={desktopdata.frontpage.banners[1]}
              alt="maintainable-banner"
            />
          </Link>
          <Link to="/contact">
            <img
              src={desktopdata.frontpage.banners[2]}
              alt="get-in-touch-banner"
            />
          </Link>
        </div>
        <h2 className="frontpageslogan">{desktopdata.navImages.slogans[0]}</h2>
      </div>
    </>
  );
};

export default FrontDesktop;
