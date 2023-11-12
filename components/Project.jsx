import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = ({ project }) => {
  return (
    <div className="flex flex-col h-full content-evenly  border border-gray-300 bg-white rounded-md shadow-lg cursor-pointer hover:scale-105 ease-in duration-300">
      <div className="mb-5 rounded-md">
        <img
          src={project.image}
          alt={project.title}
          className="relative w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="my-auto mx-4 text-l font-semibold tracking-wider">
        {project.title}
      </p>
      <div className="p-4">
        <div className="my-auto flex flex-row flex-wrap justify-start content-evenly">
          {project.tech.map((skill, index) => (
            <div
              className="rounded-full subpixel-antialiased	text-xs bg-black text-white text-center py-1 m-1 px-2 mx-1 shadow-slate-400 shadow-lg"
              key={index}
            >
              {/* <span className="p-1 rounded-full bg-white"></span> */}
              {skill}
            </div>
          ))}
        </div>
      </div>
      <p className="my-auto mx-4 text-sm overflow-hidden tracking-wider">
        {project.description}
      </p>
      <div className="mt-auto mb-5 flex flex-row justify-center content-end">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="text-black mx-2 p-3  shadow-lg rounded-full hover:scale-125 duration-200 ease-in-out"
          href={project.github}
        >
          <FaGithub size={20} />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="text-black mx-2 p-3  shadow-lg rounded-full hover:scale-125 duration-200 ease-in-out"
          href={project.live}
        >
          <FaExternalLinkAlt size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Project;
