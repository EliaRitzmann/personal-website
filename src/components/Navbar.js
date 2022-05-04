import React from "react";
import { Link } from "react-scroll/modules";

export const Navbar = () => {
  return (
    <div className="fixed right-0">
        <Link
            className="text-red-500 "
          activeClass="active"
          to="welcome"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >hallo</Link>
        <Link
        className="text-red-500 "
          activeClass="text-blue-700"
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >About Me</Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Skills</Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Projects</Link>
        <Link
          activeClass="active"
          to="socials"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Socials</Link>
    </div>
  );
};
