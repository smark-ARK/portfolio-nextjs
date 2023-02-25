import Image from "next/image";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineCloseSquare,
  AiOutlineMail,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [lastScrollPosition,setLastScrollPosition]=useState(0);
  const [isNavHidden,setIsNavHidden]=useState(false);

  useEffect(()=>{
    function handleScroll(){

      let currentScrollPosition=window.scrollY
      if (currentScrollPosition>lastScrollPosition){
        setIsNavHidden(true)
      }else{
  
        setIsNavHidden(false)
      }
  
      setLastScrollPosition(currentScrollPosition)
    }
    window.addEventListener('scroll',handleScroll)
    return ()=>window.removeEventListener('scroll',handleScroll)
  },[lastScrollPosition]);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className={`fixed w-full h-20 shadow-l z-[100] ease-in-out duration-500 ${isNavHidden?"-translate-y-full":"translate-y-0"}`}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="w-20 h-full p-2">
          <Link href="/#home">
            <Image
              src="/assets/navLogo.png"
              alt="/"
              width="150"
              height="150"
            />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/#home" scroll={false}>
              <li className="m-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#About" scroll={false}>
              <li className="m-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#Skills" scroll={false}>
              <li className="m-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#Projects" scroll={false}>
              <li className="m-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            {/* <Link href="/#home">
              <li className="m-10 text-sm uppercase hover:border-b">Contact</li>
            </Link> */}
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden p-2 hover:cursor-pointer"
          >
            <AiOutlineMenu size={35} />
          </div>
        </div>
      </div>
      <div
        onClick={handleNav}
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60 ease-in-out duration-500" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[70%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-9 ease-in duration-500"
              : "fixed left-[-100%] top-0 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center">
              <Link href="/#home">
                <Image
                  src="/assets/navLogo.png"
                  alt="/"
                  width="80"
                  height="80"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-350 p-3 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div>
              <ul className="pt-10">
                <Link href="/#home" scroll={false}>
                  <li className="uppercase text-md my-10 hover:border-b">
                    Home
                  </li>
                </Link>
                <Link href="/#About" scroll={false}>
                  <li className="uppercase text-md my-10 hover:border-b">
                    About
                  </li>
                </Link>
                
                <Link href="/#Skills" scroll={false}>
                  <li className="uppercase text-md my-10 hover:border-b">
                    Skills
                  </li>
                </Link>
                <Link href="/#Projects" scroll={false}>
                  <li className="uppercase text-md my-10 hover:border-b">
                    Projects
                  </li>
                </Link>
                {/* <Link href="/#home">
                  <li className="uppercase text-md my-10 hover:border-b">
                    Contact
                  </li>
                </Link> */}
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest">Let&apos;s Connect</p>
                <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-md shadow-gray-300 p-3">
                    <Link target="_blank" href="https://linkedin.com/in/smark-ark/">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-md shadow-gray-300 p-3">
                    <Link target="_blank" href="https://github.com/smark-ark">
                      <FaGithub />
                    </Link>
                  </div>
                  <div  className="rounded-full shadow-md shadow-gray-300 p-3">
                    <Link target="_blank" href="https://twitter.com/the_ARK__">
                      <FaTwitter />
                    </Link>
                  </div>
                  <div target="_blank" className="rounded-full shadow-md shadow-gray-300 p-3">
                    <Link href="mailto:arkhangreat2@gmail.com">
                      <AiOutlineMail />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar