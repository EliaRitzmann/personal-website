import React from "react";
import { Parallax } from "react-scroll-parallax";

import mockupa from "../../resources/mockups/statify1.mockup.png";
import mockupb from "../../resources/mockups/Statify2_mockup.png";

export const Statify = () => {
  return (
    <div className="h-screen grid grid-cols-2 items-center md:-mt-40 -mt-64">
      <div className="flex flex-col">
        <div className="ml-5 md:ml-20">
          <a href="https://statify-bbbaden.azurewebsites.net/" target="_blank">
            <h1 className="text-4xl md:text-8xl mb-12  font-mono transition-transform hover:translate-x-2">Statify</h1>
          </a>
          <div className="flex mb-6">
            <a
              href="https://portfolio.bbbaden.ch/view/view.php?t=nHgYXrIZ2L5xaTQNl67O"
              target="_blank"
              className="md:text-4xl"
            >
              Portfolio
            </a>
            <p className="mx-2 md:text-4xl">•</p>
            <a
              href="https://github.com/Erayyy/statify-bbbaden"
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
          <img src={mockupb} alt="Mockup" className="ml-28 w-5/6  hidden md:block" />
        </Parallax>
        <Parallax speed={40} className="">
          <img src={mockupa} alt="Mockup" className="w-1/2" />
        </Parallax>
        
      </div>
    </div>
  );
};
