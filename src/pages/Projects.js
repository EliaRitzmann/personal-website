import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Titelscroll } from "../components/Titelscroll";

export const Projects = () => {
  return (
    <div id="projects" className="h-screen">
      <div className="sticky top-0">
        <Titelscroll titel="PROJECTS" />
      </div>
    </div>
  );
};
