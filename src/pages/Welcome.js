import React from "react";
import { Parallax } from "react-scroll-parallax";
import Link from "react-scroll/modules/components/Link";
import elia from "../resources/icons/IMG_E0744.jpg"
//import "../styles/image.css"

export const Welcome = () => {
  return (
    <div
      id="welcome"
      className="h-screen flex justify-center items-center flex-col"
    >
      <div className="absolute top-6 right-20 text-xl font-semibold dark:text-lime-500 text-black">
        {"Toggle Color ->"}
      </div>
      <div className="flex justify-center flex-col lg:hidden">
      <div className="flex justify-center content-center p-10">
        <img src={elia} alt="my face" className="w-3/5 rounded-3xl face " />
        </div>
        <h1 className="text-6xl text-center mb-4 text-sky-500 font-medium">
          Elia Ritzmann
        </h1>
        <h1 className="text-3xl text-center">Web developer</h1>
      </div>

      <div className="hidden lg:block">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center ml-48">
          <div className=" mb-4"><h1 className="text-4xl ">
            Hallo, ich bin
          </h1><h1 className="text-7xl font-medium text-sky-500 -ml-1"> Elia Ritzmann</h1></div>
          
          <h1 className="text-3xl text-stone-400">Web developer</h1>
          
        </div>
        <div className="flex justify-center content-center p-10">
        <img src={elia} alt="my face" className="w-3/5 rounded-3xl face " />
        </div>
      </div>
      </div>


      <Link
        className="text-2xl font-semibold flex justify-center content-end absolute bottom-8 animate-bounce cursor-pointer"
        activeClass="text-black"
        to="aboutMe"
        spy={true}
        smooth={true}
        offset={0}
        duration={1250}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Link>
    </div>
  );
};

/*
 */
