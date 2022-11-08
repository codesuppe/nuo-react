import React from "react";
import { Link } from "react-router-dom";

const FrontMobile = ({ mobiledata }) => {
  document.body.style.background =
    "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(177,210,231,1) 100%)";

  return (
    <section className="mobileFront">
      <div className="mobileFrontgrid">
        <Link to="/Home">
          <img
            src={mobiledata.frontpage.mobilebanners[0]}
            alt="mobile banner1"
          />
        </Link>
        <Link to="/about">
          <img
            src={mobiledata.frontpage.mobilebanners[1]}
            alt="mobile banner2"
          />
        </Link>
        <Link to="/contact">
          <img
            src={mobiledata.frontpage.mobilebanners[2]}
            alt="mobile banner2"
          />
        </Link>
        <h2 className="mobilefrontpageslogan">And yet... more to come</h2>
      </div>
    </section>
  );
};

export default FrontMobile;
