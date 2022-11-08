import React from "react";

const MobileAbout = ({ mobiledata }) => {
  document.body.style.background = "#BFDDEF";
  return (
    <>
      <section className="pageWrap">
        <div className="mobileBanner">
          <img src={mobiledata.frontpage.mobilebanners[1]} alt="mobilebanner" />
        </div>

        <div className="mobileTxt">
          <h1>
            {mobiledata.pages.headers[1]}
            <span className="headerlightblue">
              {mobiledata.pages.headercolor[1]}
            </span>
            ...
          </h1>
          {mobiledata.pages.texts.maintainable.map((tData, id) => (
            <p key={id}>{tData}</p>
          ))}
        </div>
        <div className="pagesLogo">
          <img src={mobiledata.pages.pagelogos[0]} alt="nuo_logo" />
        </div>
      </section>
    </>
  );
};

export default MobileAbout;
