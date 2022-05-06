import React from "react";
import { Link } from "react-scroll/modules";

export const Navbar = () => {
  return (
    <div className="fixed right-0 flex flex-col top-1/2 -translate-y-1/2 text-center mr-3 z-10">
      <Link
        className="text-2xl font-semibold text-gray-400"
        activeClass="text-black"
        to="welcome"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >Start
      </Link>
      <Link
        className="text-2xl font-semibold text-gray-400"
        activeClass="text-black"
        to="aboutMe"
        spy={true}
        smooth={true}
        offset={1}
        duration={500}
      >
        About Me
      </Link>
      <Link
        className="text-2xl font-semibold text-gray-400"
        activeClass="text-black"
        to="skills"
        spy={true}
        smooth={true}
        offset={1}
        duration={500}
      >
        Skills
      </Link>
      <Link
        className="text-2xl font-semibold text-gray-400"
        activeClass="text-black"
        to="projects"
        spy={true}
        smooth={true}
        offset={1}
        duration={500}
      >
        Projects
      </Link>
      <Link
        className="text-2xl font-semibold text-gray-400"
        activeClass="text-black"
        to="socials"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Socials
      </Link>
    </div>
  );
};
