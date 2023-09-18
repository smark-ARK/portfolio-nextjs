import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import kmzee from "../public/kmzee.jpg";
import Image from "next/image";

const experiences = [
  {
    title: "SOFTWARE DEVELOPMENT INTERN",
    company_name: "Kmzee Holding",
    icon: kmzee,
    iconBg: " #ffdfe5",
    date: "MAY-2022 - JUN-2022",
    points: [
      "Developed  a  REST  API  for  an  E-commerce  Website  and  Dashboard  using  ExpressJS,MySQL.",
      "Wrote All Queries Raw Using Mysql Syntax.",
      "Used JWT Authentication to secure Access to the API.",
      "Used Access and Refresh tokens to handle access requests to the API",
      "Set-up  multiple  Access  Roles(admin,  manager,  accountant,  operator)  to  regulate  the access more effectively",
    ],
  },
  {
    title: "JUNIOR SOFTWARE DEVELOPR",
    company_name: "Kmzee Holding",
    icon: kmzee,
    iconBg: " #ffdfe5",
    date: "JUN-2022 - OCT-2022",
    points: [
      "Managed the Back-end for an e-commerce website/APP and Dashboard.",
      "Developed  a  REST  based  back-end  for  a  B2B  Drop  Service  client  using  ExpressJS,PostgreSQL and Sequelize.",
      "Deployed Development and Production servers for the Drop Service API on AWS EC2 instances.",
      "Set-up a reverse proxy on the EC2 servers using NGINX",
      "Configured HTTPS using SSL certificates with the NGINX .",
    ],
  },
  {
    title: "SOFTWARE DEVELOPER",
    company_name: "Kmzee Holding",
    icon: kmzee,
    iconBg: " #ffdfe5",
    date: "OCT-2022 / Present",
    points: [
      "Developed  a  Drop-Servicing  SaaS  Back-end  API  using  Django  Rest  Framework,PostgreSQL and Django-Tenants [Isolated Schema].",
      "Deployed the development server for Drop-service Saas API on AWS EC2.",
      "Used Gunicorn and Nginix to make the API server Listen in background and have multiple threads working at the same time.",
      "Developed a Backend for an Auction APP using ExpressJS, PostgreSQL and Sequelize.",
      "Incorporated WebSockets to handle real time updates.",
      "Using cron jobs to handle passive events in an auction journey.",
      "Deployed the Auction API at AWS EC2 and used AWS RDS for a Database Server.",
      "The API faced a rapid increase in traffic (2500+ users in 3 days) and is still providing an average response time of about 130 ms.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "white",
        color: "black",
      }}
      contentArrowStyle={{ borderRight: "7px solid  white" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[70%] h-[70%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-black text-[24px] font-bold ">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div id="Experience">
        <p
          className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center`}
        >
          What I have done so far
        </p>
        <h2
          className={`text-black font-blatext-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mt-4`}
        >
          Work Experience.
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
