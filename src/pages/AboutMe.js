import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Titelscroll } from "../components/Titelscroll";

export const AboutMe = () => {
  return (
    <div id="aboutMe" className="bg-black">
      <div className="top-0 sticky">
        <Titelscroll titel="ABOUT ME" />
      </div>

      <div className="">
        <div class="container mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="absolute border-opacity-20 border-white h-full border right-1/2 bg-white"></div>

            <Parallax speed={-20} className="my-56">
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-black">1</h1>
              </div>
              <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">
                  IMS (2020 - Jetzt)
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Informatikmittelschule in Aarau
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-black font-semibold text-lg">2</h1>
              </div>
              <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-black text-xl">Jactronic AG (2019)</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
                  Kurzpraktikum bei der Jactromnic ag
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-black font-semibold text-lg">2</h1>
              </div>
              <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-black text-xl">Was anderes AG (2019)</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
                  Kurzpraktikum bei der Jactromnic ag
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-black">1</h1>
              </div>
              <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">
                  Bezirksschule (2017 - 2020)
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Besuchen der Bezirksschule in Schöftland (Aargau)
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-black">1</h1>
              </div>
              <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">
                  Primarschule (2011 - 2017)
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Besuchen der Primarschule in Schöftland (Aargau)
                </p>
              </div>
            </div>
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  );
};
