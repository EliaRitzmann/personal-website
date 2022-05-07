import React from "react";
import { Parallax } from "react-scroll-parallax";
import { ProjectTemplate } from "../components/ProjectTemplate";
import { Titelscroll } from "../components/Titelscroll";

export const Projects = () => {
  return (
    <div id="projects" className="">
      <div className="sticky top-0">
        <Titelscroll titel="PROJECTS" />
      </div>
      <ProjectTemplate title="Weather App" link1="" link2="https://github.com/EliaRitzmann/firebase-firestore-to-do-list" description="Eine Wetter App welche ich mit React native erstellt habe."></ProjectTemplate>
      <ProjectTemplate title="To-do List" link1="" link2="" description="Eine Web-App zum erstellen von Tasks, welche ich mit React und Firebase programiert habe."></ProjectTemplate>
      <ProjectTemplate title="Statify" link1="" link2="" description="Eine Web-App zum einsehen der meisst gehörten Lieder und Künstler der App Spotify."></ProjectTemplate>
    </div>
  );
};
