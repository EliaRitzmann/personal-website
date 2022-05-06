import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Titelscroll } from "../components/Titelscroll";

export const Skills = () => {
  return (
    <div id="skills" className=" h-screen bg-sky-200">
      <div className="sticky top-0">
        <Titelscroll titel="SKILLS" />
      </div>
      <div className="flex flex-row justify-around p-10 px-40">
      <div>
        <h1>React</h1>
        <h1>Java</h1>
      </div>
      <div>
        <h1>Javascript</h1>
        <h1>SQL</h1>
      </div>
      </div>
      
    </div>
  );
};
