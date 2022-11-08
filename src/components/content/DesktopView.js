import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "../Navigation";
import FrontDesktop from "../FrontDesktop";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";


const DesktopView = ({ items }) => {


  return (
    <>
      <Router>
        <Navigation desktopdata = {items}/>
        <section>
          <Routes>
            <Route path ="/" element= {<FrontDesktop desktopdata = {items}/>} />
            <Route path="/Home" element={<Home desktopdata = {items}/>} />
            <Route path="/about" element={<About desktopdata = {items} />} />
            <Route path="/contact" element={<Contact desktopdata = {items} />} />
          </Routes>
        </section>
        
      </Router>
    </>
  );
};
export default DesktopView;
