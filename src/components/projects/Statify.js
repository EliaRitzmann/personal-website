import React from "react";
import { Parallax } from "react-scroll-parallax";

import mockupa from "../../resources/mockups/statifyMockup2.png";
import mockupb from "../../resources/mockups/statifyMockup1.png";

export const Statify = () => {
  return (
    <div className="h-screen grid grid-cols-2 items-center md:-mt-40 -mt-64">
      <div className="flex flex-col">
        <div className="ml-5 md:ml-20">
          <a href="https://statify.elia-ritzmann.ch/" target="_blank">
            <h1 className="text-4xl md:text-8xl mb-12  font-mono transition-transform hover:translate-x-2">Statify</h1>
          </a>
          <div className="flex mb-6">
            <a
              href="https://github.com/EliaRitzmann/statify"
              target="_blank"
              className="md:text-4xl"
            >
              GitHub
            </a>
          </div>
          <p className="md:text-4xl">
            Eine Web-App zum einsehen der meist gehörten Lieder und Künstler der
            App Spotify.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
      <Parallax speed={10} className="absolute">
          <img src={mockupb} alt="Mockup" className=" w-5/6  hidden md:block " />
        </Parallax>
        <Parallax speed={40} className="">
          <img src={mockupa} alt="Mockup" className="w-full md:w-72 md:ml-80" />
        </Parallax>
        
      </div>
    </div>
  );
};
