"use-client";
import React from "react";
import projects from "@/data/projects.json";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="Projects" className="w-full min-h-screen">
      <div className="max-w-[1240px] mx-5 lg:mx-auto  py-20">
        <div>
          <p
            className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center`}
          >
            Just Because I can!
          </p>
          <h2
            className={`text-black font-blatext-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mt-4`}
          >
            Personal / Freelance Projects.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
