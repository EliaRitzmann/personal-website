import React from "react";
import { Parallax } from "react-scroll-parallax";
import { MoreProjects } from "../components/MoreProjects";
import { Statify } from "../components/projects/Statify";
import { ToDoList } from "../components/projects/ToDoList";
import { WeatherApp } from "../components/projects/WeatherApp";
import { ProjectTemplate } from "../components/ProjectTemplate";
import { Titelscroll } from "../components/Titelscroll";

export const Projects = () => {
  return (
    <div id="projects" className="dark:bg-[#B7F385] overflow-hidden">
      <div className="sticky top-0">
        <Titelscroll titel="PROJECTS" />
      </div>
      <Parallax className="mt-44 md:mt-0">
      <Statify></Statify>
      <ToDoList></ToDoList>
      <WeatherApp></WeatherApp>
      {/* More Projects:
      <MoreProjects></MoreProjects> */}
      </Parallax>
    </div>
  );
};
