import React, { useState } from "react";
import PortalModal from "./Modal";

const Contact = ({ desktopdata }) => {
  //background-color change
  document.body.style.background = "#FFB472";

  //modal
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = (e) => {
    setOpen(true);
    setIndex(e.currentTarget.dataset.index);
  };

  const closeModal = () => {
    setOpen(false);
  };

  //modal end

  return (
    <>
      <div className="homeGrid">
        <div className="homeBanner">
          <img src={desktopdata.pages.banners[2]} alt="Home_banner" />
        </div>
        <div className="textFront">
          <h1>
            {desktopdata.pages.headers[2]}
            <span className="headerorange">
              {desktopdata.pages.headercolor[2]}
            </span>
            ...
          </h1>

          <div className="homeTxt">
            {desktopdata.pages.texts.getInTouch.map((mData, id) => (
              <p key={id}>{mData}</p>
            ))}

            <div className="contactPeople">
              {desktopdata.pages.getintouchImages.map((iData, id) => (
                <div key={id} className="contactPeopleBox">
                  <img
                    onClick={openModal}
                    data-index={id}
                    key={id}
                    src={iData}
                    alt="contactThesePeople"
                  ></img>
                  <p>{desktopdata.pages.emails[id]}</p>
                </div>
              ))}
            </div>

            <div className="slogan">
              <h2 className="homeslogan">{desktopdata.navImages.slogans[3]}</h2>
            </div>
          </div>
        </div>
      </div>
      <PortalModal
        index={index}
        isOpen={open}
        onClose={closeModal}
        modaldata={desktopdata}
      />
    </>
  );
};

export default Contact;
