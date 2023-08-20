import projects from "@/data/projects.json";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaChevronRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-80 rounded-lg overflow-hidden shadow-lg m-4"
        >
          <img
            className="w-full h-40 object-cover"
            src={project.image}
            alt={project.title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.title}</div>
            <p className="text-gray-700 text-base">{project.description}</p>
          </div>
          <div className="flex justify-center mb-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 mx-2 hover:text-gray-800"
              href={project.github}
            >
              <FaGithub size={20} />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 mx-2 hover:text-gray-800"
              href={project.live}
            >
              <FaExternalLinkAlt size={20} />
            </Link>
            {/* <Link
              className="text-gray-600 mx-2 hover:text-gray-800"
              href={project.detail}
            >
              <FaChevronRight size={20} />
            </Link> */}
          </div>
        </div>
      ))}
    </div>
  );
}
