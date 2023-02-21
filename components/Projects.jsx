import Image from "next/image";
import React from "react";
import projects from "@/data/projects.json"
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="Projects" className="w-full h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl text-gray-500 tracking-widest uppercase py-2">
          Projects
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
          {/* <ProjectItem
            title="Simple Social API"
            description="An API for a simple text based Social Media APP Where you can Create Account, Post Stuff, React to stuff, Delete Posts. Pretty Basic and straightforward functionality as it was the first API I ever made."
            projectImg={simple_social}
            gitHubLink="https://github.com/smark-ARK/simple_social.git"
            liveLink="https://simple-social.onrender.com/docs"
            moreInfo="/"
          />
          <ProjectItem
            title="Job Engine API"
            description="An API for a job engine APP. Has a slightly more funcionality with multi role authentication. Recruiters can Post, Delete Jobs. Seekers can view and apply jobs. recruiters can then select their desired candidate"
            projectImg={job_engine}
            gitHubLink="https://github.com/smark-ARK/job_engine_API.git"
            liveLink="https://job-engine-api.onrender.com/docs"
            moreInfo="/"
          /> */}
          {
            projects.map(
              (project)=>(
                <ProjectItem key={project.id} project={project}/>
              )
            )
          }


        </div>
      </div>
    </div>
  );
};

export default Projects;
