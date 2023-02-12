import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="About" className="w-full h-screen p-2 flex items-center py-16 px-4">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase tracking-widest text-xl text-gray-600 py-2">
            About
          </p>
          <h2 className="py-4">Who Am I?</h2>
          <p className="py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            doloremque asperiores fugiat officia voluptas id laborum iste ullam
            ad neque maxime maiores, tenetur a earum ex nulla nemo ducimus
            veritatis quos nisi? Eos ut nisi molestias beatae. Quos aspernatur
            quidem architecto doloremque deserunt, ipsam rem aliquid sunt
            voluptates voluptate quod eveniet fugiat saepe, iure in itaque vitae
            inventore, omnis aperiam. Dolor harum temporibus sit molestiae
            assumenda. Doloribus dolore, fugit quas asperiores cupiditate atque.
            Inventore facilis obcaecati voluptatum modi praesentium nesciunt
            explicabo non nisi dicta ad incidunt ea nam quo cum ipsam rem illo,
            optio, accusamus necessitatibus ratione unde sit! Repudiandae.
          </p>
        </div>
        <div className="col-span-1 w-fit h-fit m-auto shadow-xl shadow-gray-300 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-200">
          <Image
            className="rounded-xl"
            src="/../public/assets/me.jpg"
            alt="/"
            width="300"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
