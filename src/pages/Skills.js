import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Titelscroll } from "../components/Titelscroll";

//logo
import javascript from "../resources/icons/js_logo.png";
import cs from "../resources/icons/cs_logo.png";
import react from "../resources/icons/react_logo.png";
import tailwind from "../resources/icons/tailwind_logo.png";
import firebase from "../resources/icons/firebsae_logo.png";

import java from "../resources/icons/java_logo.png";
import databse from "../resources/icons/database_logo.png";

export const Skills = () => {
  return (
    <div id="skills" className=" bg-black">
      <div className="sticky top-0">
        <Titelscroll titel="SKILLS" />
      </div>

      <div className="hidden md:block">
        <div className="flex gap-4 flex-row-reverse mr-12 mb-4">
          <Parallax
            className="bg-white h-24 w-56 rounded-lg flex justify-center items-center gap-2 "
            speed={10}
          >
            <img src={cs} className="w-10 h-10"></img>
            <h1 className="text-lg font-bold">.Net</h1>
          </Parallax>
          <Parallax
            className="bg-white h-24 w-56 rounded-lg flex justify-center items-center gap-2"
            speed={50}
          >
            <img src={tailwind} className="w-10 h-10"></img>
            <h1 className="text-lg font-bold">Tailwind CSS</h1>
          </Parallax>
          <Parallax
            className="bg-white h-24 w-56 rounded-lg flex justify-center items-center gap-2"
            speed={20}
          >
            <img src={firebase} className="w-10 h-10"></img>
            <h1 className="text-lg font-bold">Firebase</h1>
          </Parallax>
          <Parallax
            className="bg-white h-24 w-56 rounded-lg flex justify-center items-center gap-2"
            speed={50}
          >
            <img src={react} className="w-10 h-10"></img>
            <h1 className="text-lg font-bold">React.js</h1>
          </Parallax>
        </div>
        <div className="flex gap-4 flex-row-reverse mr-12">
          <Parallax
            className="bg-white h-24 w-56 rounded-lg flex justify-center items-center gap-2"
            speed={10}
          >
            <img src={java} className="w-10 h-10"></img>
            <h1 className="text-lg font-bold">Java</h1>
          </Parallax>
          <Parallax
            className="bg-white h-24 w-56 rounded-lg flex justify-center items-center gap-2 "
            speed={50}
          >
            <img src={databse} className="w-10 h-10"></img>
            <h1 className="text-lg font-bold">SQL</h1>
          </Parallax>
          <Parallax
            className="bg-white h-24 w-56 rounded-lg flex justify-center items-center gap-2 "
            speed={20}
          >
            <img src={react} className="w-10 h-10"></img>
            <h1 className="text-lg font-bold">React native</h1>
          </Parallax>
          <Parallax
            className="bg-white h-24 w-56 rounded-lg flex justify-center items-center gap-2 mb-32"
            speed={50}
          >
            <img src={javascript} className="w-10 h-10"></img>
            <h1 className="text-lg font-bold">JavaScript</h1>
          </Parallax>
        </div>
      </div>
      <div className="md:hidden flex flex-col items-center gap-7 mt-4">
        <div className="flex gap-1 p-2 bg-white w-1/2 rounded-md justify-center ml-20">
        <img src={react} className="w-8 h-8"></img>
            <h1 className="text-lg font-bold">React.js</h1>
        </div>
        <div className="flex gap-1 p-2 bg-white w-1/2 rounded-md justify-center mr-20">
        <img src={firebase} className="w-8 h-8"></img>
            <h1 className="text-lg font-bold">Firebase</h1>
        </div>
        <div className="flex gap-1 p-2 bg-white w-1/2 rounded-md justify-center ml-20">
        <img src={tailwind} className="w-8 h-8"></img>
            <h1 className="text-lg font-bold">Tailwind</h1>
        </div>
        <div className="flex gap-1 p-2 bg-white w-1/2 rounded-md justify-center mr-20">
        <img src={java} className="w-8 h-8"></img>
            <h1 className="text-lg font-bold">Java</h1>
        </div>
        <div className="flex gap-1 p-2 bg-white w-1/2 rounded-md justify-center ml-20">
        <img src={react} className="w-8 h-8"></img>
            <h1 className="text-lg font-bold">React native</h1>
        </div>
        <div className="flex gap-1 p-2 bg-white w-1/2 rounded-md justify-center mr-20">
        <img src={javascript} className="w-8 h-8"></img>
            <h1 className="text-lg font-bold">Javascript</h1>
        </div>
        <div className="flex gap-1 p-2 bg-white w-1/2 rounded-md justify-center ml-20">
        <img src={databse} className="w-8 h-8"></img>
            <h1 className="text-lg font-bold">SQL</h1>
        </div>
        <div className="flex gap-1 p-2 bg-white w-1/2 rounded-md justify-center mr-20">
        <img src={cs} className="w-8 h-8"></img>
            <h1 className="text-lg font-bold">.Net</h1>
        </div>
      </div>
    </div>
  );
};
