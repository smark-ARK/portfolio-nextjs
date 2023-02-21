import React from "react";
import {
  FaGithub,
  FaGlobe,
  FaInfo,
  FaInfoCircle,
  FaInternetExplorer,
} from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const ProjectItemOld = ({
  projectImg,
  title,
  description,
  gitHubLink,
  liveLink,
  moreInfo,
}) => {
  return (
    <div className="flex relative items-center justify-center rounded-xl p-4 shadow-xl w-full h-auto group hover:bg-gradient-to-r from-gray-700 to-gray-900">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={projectImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-wider text-white text-center max-h-[20%]">
          {title}
        </h3>
        <div>
        <p className="text-white py-2 text-sm text-center overflow-hidden max-h-[50%]">{description}</p>
        </div>
        <div className="flex items-center justify-between py-2 max-h-[30%]">
          <Link className="rounded-full bg-white p-2" target="_blank" href={gitHubLink}>
            <FaGithub />
          </Link>
          <Link className="rounded-full bg-white p-2" target="_blank" href={liveLink}>
            <ImEarth />
          </Link>
          <Link className="rounded-full bg-white p-2" target="_blank" href={moreInfo}>
            <AiOutlineInfoCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemOld;
