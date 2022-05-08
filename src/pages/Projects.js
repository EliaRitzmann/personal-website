import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Statify } from "../components/projects/Statify";
import { ToDoList } from "../components/projects/ToDoList";
import { WeatherApp } from "../components/projects/WeatherApp";
import { ProjectTemplate } from "../components/ProjectTemplate";
import { Titelscroll } from "../components/Titelscroll";

export const Projects = () => {
  return (
    <div id="projects" className="">
      <div className="sticky top-0">
        <Titelscroll titel="PROJECTS" />
      </div>
      <Parallax className="mt-44 md:mt-0">
      <WeatherApp></WeatherApp>
      <ToDoList></ToDoList>
      <Statify></Statify>
      </Parallax>
    </div>
  );
};
