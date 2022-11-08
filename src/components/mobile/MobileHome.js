import React from "react";

const MobileHome = ({ mobiledata }) => {
  document.body.style.background = "#ABCFE6";

  return (
    <section className="pageWrap">
      <div className="mobileBanner">
        <img src={mobiledata.frontpage.mobilebanners[0]} alt="mobilebanner" />
      </div>

      <div className="mobileTxt">
        <h1>
          {mobiledata.pages.headers[0]}
          <span>{mobiledata.pages.headercolor[0]}</span>...
        </h1>
        {mobiledata.pages.texts.home.map((tData, id) => (
          <p key={id}>{tData}</p>
        ))}
      </div>

      <div className="pagesLogo">
        <img src={mobiledata.pages.pagelogos[0]} alt="nuo_logo" />
      </div>
    </section>
  );
};

export default MobileHome;
