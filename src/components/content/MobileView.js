import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FrontMobile from "../mobile/FrontMobile";
import MobileHome from "../mobile/MobileHome";
import MobileAbout from "../mobile/MobileAbout";
import MobileContact from "../mobile/MobileContact";
import MobileNavigation from "../mobile/MobileNavigation";


const MobileView = ({ items }) => {
  return (
    <>
      <Router>
        <MobileNavigation mobiledata = {items}/>
        <section>
          <Routes>
            <Route path ="/" element= {<FrontMobile mobiledata = {items}/>} />
            <Route path="/Home" element={<MobileHome mobiledata = {items}/>} />
            <Route path="/about" element={<MobileAbout mobiledata = {items} />} />
            <Route path="/contact" element={<MobileContact mobiledata = {items} />} />
          </Routes>
        </section>
      </Router>
    </>
  );
};

export default MobileView;
