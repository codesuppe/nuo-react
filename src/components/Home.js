import React from "react";

const Home = ({ desktopdata }) => {
  document.body.style.background = "#ABCFE6";
  return (
    <>
      <div className="homeGrid">
        <div className="homeBanner">
          <img src={desktopdata.pages.banners[0]} alt="Home_banner" />
        </div>
        <div className="textFront">
          <h1>
            {desktopdata.pages.headers[0]}
            <span>{desktopdata.pages.headercolor[0]}</span>
            ...
          </h1>

          <div className="homeTxt">
            {desktopdata.pages.texts.home.map((mData, id) => (
              <p key={id}>{mData}</p>
            ))}

            <div className="slogan">
              <h2 className="homeslogan">{desktopdata.navImages.slogans[1]}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
