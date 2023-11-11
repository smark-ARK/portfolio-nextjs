import React from "react";
import { AiOutlineBoxPlot } from "react-icons/ai";
import {
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaHtml5,
  FaCss3,
  FaPython,
  FaGit,
  FaTree,
  FaAws,
} from "react-icons/fa";
import { ImStack } from "react-icons/im";
import { GrGolang } from "react-icons/gr";
import {
  SiAmazonaws,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGoland,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import SkillCategory from "./SkillCategory";
// import SkillCategory from "./SkillCategory";

const frontendSkills = [
  { name: "Tailwind", level: 40, icon: SiTailwindcss },
  { name: "Next.JS", level: 50, icon: SiNextdotjs },
  { name: "Typescript", level: 50, icon: SiTypescript },
  // ...
];

const backendSkills = [
  { name: "Django", level: 70, icon: SiDjango },
  { name: "FastAPI", level: 70, icon: SiFastapi },
  { name: "Node.js", level: 60, icon: FaNodeJs },
  // ...
];

const languages = [
  { name: "Python", level: 70, icon: FaPython },
  { name: "JavaScript", level: 50, icon: SiJavascript },
  { name: "Go", level: 30, icon: SiGoland },
];

const databaseSkills = [
  { name: "MySQL", level: 70, icon: SiMysql },
  { name: "PostgreSQL", level: 80, icon: SiPostgresql },
  { name: "MongoDB", level: 50, icon: SiMongodb },
  // ...
];

const ITConstructs = [
  { name: "Git", level: 70, icon: SiGit },
  { name: "DataStructure", level: 50, icon: ImStack },
  // ...
];
const DataVisualization = [
  { name: "Pandas", level: 30, icon: SiPandas },
  { name: "NumPY", level: 30, icon: SiNumpy },
  { name: "Matplotlib", level: 30, icon: AiOutlineBoxPlot },
  // ...
];
const Tools = [
  { name: "AWS", level: 60, icon: FaAws },
  { name: "Docker", level: 60, icon: SiDocker },
  // ...
];

const Skills = () => {
  return (
    <div id="Skills" className="w-full min-h-screen py-16 px-4">
      <div className="max-w-[1240px] mx-auto h-full justify-center">
        <div>
          <p
            className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center`}
          >
            What I Know
          </p>
          <h2
            className={`text-black font-blatext-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mt-4`}
          >
            Technical Skills.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mx-auto py-20 gap-6">
          <SkillCategory skills={languages} category="Languages" />
          <SkillCategory skills={backendSkills} category="Backend Frameworks" />
          <SkillCategory skills={databaseSkills} category="Databases" />
          <SkillCategory skills={frontendSkills} category="Web Frontend" />
          <SkillCategory skills={ITConstructs} category="IT Constructs" />
          <SkillCategory
            skills={DataVisualization}
            category="Data Visalization"
          />
          <SkillCategory skills={Tools} category="Tools Used" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
