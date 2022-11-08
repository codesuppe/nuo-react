import React from "react";

const About = ({ desktopdata }) => {
  document.body.style.background = "#BFDDEF";

  return (
    <>
      <div className="homeGrid">
        <div className="homeBanner">
          <img src={desktopdata.pages.banners[1]} alt="Home_banner" />
        </div>
        <div className="textFront">
          <h1>
            {desktopdata.pages.headers[1]}
            <span className="headerlightblue">
              {desktopdata.pages.headercolor[1]}
            </span>
            ...
          </h1>

          <div className="homeTxt">
            {desktopdata.pages.texts.maintainable.map((mData, id) => (
              <p key={id}>{mData}</p>
            ))}

            <div className="slogan">
              <h2 className="homeslogan">{desktopdata.navImages.slogans[2]}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
