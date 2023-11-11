import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div id="About">
        <p
          className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center`}
        >
          Who Am I?
        </p>
        <h2
          className={`text-black font-blatext-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mt-4`}
        >
          About me.
        </h2>
      </div>
      <div className="w-full min-h-screen p-2 flex items-center py-16 px-4">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="py-2">
              <span className="text-[52px]">H</span>ello, my name is Abdul
              Rehman Khan. I hold a Bachelor&apos;s degree in Computer Science,
              but I have to admit that I did not learn as much as I had hoped in
              college. However, my passion for technology and self-motivation
              led me to become a self-taught backend developer based in
              Hyderabad, India. I am proficient in programming languages such as
              Python and JavaScript and have experience working with relational
              databases.
              <br />
              <br />
              However, what I&apos;m really interested in are microservices,
              machine learning, and artificial intelligence. These emerging
              technologies have the potential to revolutionize the way we
              approach software development and create more intelligent and
              efficient applications.
              <br />
              <br />
              My experience in machine learning has given me a deeper
              understanding of how to create predictive models, and I&apos;m
              excited to continue exploring this field in the future. As for
              microservices, I believe that they offer a more scalable and
              flexible approach to application development, and I&apos;m eager
              to explore this further.
              <br />
              <br />
              In addition to my interest in these emerging technologies, my
              focus is on developing efficient and scalable applications that
              meet the needs of my clients and end-users. I take great pride in
              my ability to quickly learn new technologies and adapt to changing
              circumstances.
              <br />
              <br />
              My Bachelor&apos;s degree has certainly helped me to build a
              foundation of knowledge, but I believe that my passion and drive
              to learn and grow have been crucial in achieving success in the
              tech industry. As a backend developer, I&apos;m confident in my
              abilities and look forward to continuing to develop my skills and
              take on new challenges in the future, particularly in the exciting
              fields of microservices, machine learning, and artificial
              intelligence.
              <br />
              <br />
            </p>
          </div>
          <div className="col-span-1 w-fit h-fit m-auto shadow-md border border-gray-300 rounded-md flex p-2 items-center justify-center hover:scale-105 ease-in duration-200 ">
            <img
              className="rounded-md h-full w-auto"
              src="/assets/me.jpg"
              alt="/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
