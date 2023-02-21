import Link from "next/link";
import React from "react";
import { AiFillMail, AiOutlineLinkedin } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedinIn,
  FaMailBulk,
  FaMailchimp,
  FaTwitter,
} from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center p-10">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <h1 className="py-4 black">
            Hey, I&apos;m <span className="text-gray-400 tracking-widest">ARK</span>!
          </h1>
          <h3 className="py-2">A Back-End Developer</h3>
          <p>
            I am a Software Developer specializing in building Back-End REST
            API&apos;s, I occasionally do some frontend work(only if I have to). I
            currently work as a Back-End developer while constantly advancing my
            skills in my leisure.
          </p>
          <div className="flex justify-between items-center max-w-[330px] m-auto py-5">
            <div className="rounded-full p-4 shadow-lg shadow-gray-300 hover:cursor-pointer hover:scale-150">
              <Link target="_blank" href="https://linkedin.com/in/smark-ark/">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full p-4 shadow-lg shadow-gray-300 hover:cursor-pointer hover:scale-150">
              <Link target="_blank" href="https://github.com/smark-ark">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full p-4 shadow-lg shadow-gray-300 hover:cursor-pointer hover:scale-150">
              <Link target="_blank" href="https://twitter.com/the_ARK__">
                <FaTwitter />
              </Link>
            </div>
            <div className="rounded-full p-4 shadow-lg shadow-gray-300 hover:cursor-pointer hover:scale-150">
              <Link target="_blank" href="mailto:arkhangreat2@gmail.com">
                <AiFillMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
