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
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="absolute border-opacity-20 border-white h-full border ml-3.5 md:ml-0 md:right-1/2 bg-white"></div>

            <Parallax speed={-20} className="my-56">
            <div className="mb-8 flex justify-between flex-row-reverse md:flex-row items-center w-full ">
              <div className="order-1 md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-black">1</h1>
              </div>
              <div className="md:order-1 bg-white rounded-lg shadow-xl w-72 md:w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-black text-xl">
                  IMS (2020 - Jetzt)
                </h3>
                <p className="text-sm leading-snug tracking-wide text-black text-opacity-100">
                  Informatikmittelschule in Aarau
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full ">
              <div className="order-1 md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-black font-semibold text-lg">2</h1>
              </div>
              <div className="md:order-1 bg-white rounded-lg shadow-xl w-72 md:w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-black text-xl">Jactronic AG (2019)</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
                  Kurzpraktikum bei der Jactromnic ag
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-black font-semibold text-lg">3</h1>
              </div>
              <div className="md:order-1 bg-white rounded-lg shadow-xl w-72 md:w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-black text-xl">Was anderes AG (2019)</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
                  Kurzpraktikum bei der Jactromnic ag
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse md:flex-row items-center w-full">
              <div className="order-1 md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-black">4</h1>
              </div>
              <div className="md:order-1 bg-white rounded-lg shadow-xl w-72 md:w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-black text-xl">
                  Bezirksschule (2017 - 2020)
                </h3>
                <p className="text-sm leading-snug tracking-wide text-black text-opacity-100">
                  Besuchen der Bezirksschule in Schöftland (Aargau)
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse md:flex-row items-center w-full">
              <div className="order-1 md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-black">5</h1>
              </div>
              <div className="md:order-1 bg-white rounded-lg shadow-xl w-72 md:w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-black text-xl">
                  Primarschule (2011 - 2017)
                </h3>
                <p className="text-sm leading-snug tracking-wide text-black text-opacity-100">
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
