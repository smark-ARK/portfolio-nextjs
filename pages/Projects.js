import ProjectItem from "@/components/ProjectItem";
import projects from "@/data/projects.json";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaChevronRight } from "react-icons/fa";

export default function Home() {
  projects.map((project) => {
    <ProjectItem project={project} key={project.id} />;
  });
}
