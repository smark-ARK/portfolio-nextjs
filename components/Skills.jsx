import React from "react";
import { FaPython } from "react-icons/fa";
import {
  SiDjango,
  SiExpress,
  SiFastapi,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiSequelize,
} from "react-icons/si";

export const Skills = () => {
  return (
    <div id="Skills" className="w-full lg:h-screen py-16">
      <div className="max-w-[1240px] mx-auto h-full flex flex-col justify-center">
        <p className="text-xl tracking-widest uppercase p-2 text-gray-500">
          Skills
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2">
              <div className="">
                <SiPython size={40} />
              </div>
              <div>
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2">
              <div className="">
                <SiPostgresql size={40} />
              </div>
              <div>
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2">
              <div className="">
                <SiJavascript size={40} />
              </div>
              <div>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2">
              <div className="">
                <SiDjango size={40} />
              </div>
              <div>
                <h3>Django</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2">
              <div className="">
                <SiFastapi size={40} />
              </div>
              <div>
                <h3>FastAPI</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2">
              <div className="">
                <SiNodedotjs size={40} />
              </div>
              <div>
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2">
              <div className="">
                <SiExpress size={40} />
              </div>
              <div>
                <h3>ExpressJS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2">
              <div className="">
                <SiSequelize size={40} />
              </div>
              <div>
                <h3>Sequelize</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
