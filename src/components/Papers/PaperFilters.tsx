"use client"

import PaperFiltersDesktop from "./PaperFiltersDesktop";
import PaperFiltersMobile from "./PaperFiltersMobile";
import { useEffect, useState } from "react";

export enum Filters {
  All,
  Development_Economics,
  International_Business,
  International_Finance,
}

export const slugs = [
  "/papers",
  "/papers/development-economics",
  "/papers/international-business",
  "/papers/international-finance",
];

export const tags = [
  "All",
  "Development Economics",
  "International Business",
  "International Finance",
];

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  // Handle server-side rendering or other cases where window is not available.
  return {
    width: 0,
    height: 0
  };
}


const PaperFilters = (props: { activeFilter: number }) => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  if (windowDimensions.width <= 640) {
    return <PaperFiltersMobile activeFilter={props.activeFilter} />;
    
  } else {
    return <PaperFiltersDesktop activeFilter={props.activeFilter} />;
  }
};

export default PaperFilters;
