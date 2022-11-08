import React, { useEffect, useState } from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";


const Content = ({ item }) => {

  const [dimensions, setDimensions] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDimensions(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
    
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const breakpoint = 750;

  return dimensions < breakpoint ? (
    <MobileView items={item} />
  ) : (
    <DesktopView items={item} />
  );
};
export default Content;
