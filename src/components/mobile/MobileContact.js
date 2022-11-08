import React, { useState } from "react";
import MobileModal from "./MobileModal";

const MobileContact = ({ mobiledata }) => {
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
    <section className="pageWrap">
      <div className="mobileBanner">
        <img src={mobiledata.frontpage.mobilebanners[2]} alt="mobilebanner" />
      </div>

      <div className="mobileTxt">
        <h1>
          {mobiledata.pages.headers[2]}
          <span className="headerorange">
            {mobiledata.pages.headercolor[2]}
          </span>
          ...
        </h1>

        {mobiledata.pages.texts.getInTouch.map((tData, sd) => (
          <p key={sd}>{tData}</p>
        ))}
      </div>

      <div className="contactPeople">
        {mobiledata.pages.getintouchImages.map((iData, id) => (
          <div key={id} className="contactPeopleBox">
            <img
              onClick={openModal}
              data-index={id}
              src={iData}
              alt="contactThesePeople"
            />

            <p>{mobiledata.pages.emails[id]}</p>
          </div>
        ))}
      </div>

      <div className="pagesLogo">
        <img src={mobiledata.pages.pagelogos[1]} alt="nuo_logo" />
      </div>

      <MobileModal
        index={index}
        isOpen={open}
        onClose={closeModal}
        modaldata={mobiledata}
      />
    </section>
  );
};

export default MobileContact;
