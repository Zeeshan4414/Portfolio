import React from "react";
import Profile from "../../assets/My.png";
import Head from "../Head";
import { FaCode, FaUserCheck, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div
      className="about md:py-4 px-6 md:px-20 grid items-center justify-center gap-16"
      id="about"
    >
      {/* Section Heading */}
      <Head name="About" width="md:w-[260px]" />

      {/* Content Grid */}
      <div className="section flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full">
        {/* Left: Profile Image */}
        <div className="left flex-shrink-0">
        <img
  src={Profile}
  alt="My Profile"
  className="rounded-lg transition-all duration-500 shadow-lg bg-blue-200 hover:scale-105 cursor-pointer hover:shadow-2xl hover:bg-gray-200 w-[240px] h-48 md:w-[360px] md:h-[280px] object-cover"
/>
        </div>

        {/* Right: About Text + Skills */}
        <div className="right flex flex-col gap-10 md:gap-16">
          {/* About Description */}
          <div className="content flex flex-col gap-4 text-md md:text-lg text-justify">
            <p>
              Hi, I'm a dedicated and detail-oriented web developer with a
              passion for building intuitive and performant web applications.
              I enjoy crafting modern, responsive UIs and working across the full stack.
            </p>
            <p>
              My skill set includes <strong>React.js</strong>, <strong>Node.js</strong>,
              <strong> Express.js</strong>, <strong>MongoDB</strong>, <strong>MySQL</strong>,
              <strong>Tailwind CSS</strong>, and <strong>Bootstrap</strong>. Whether it’s
              a social platform, admin dashboard, or e-commerce system—I aim to deliver
              clean code and great user experiences.
            </p>
            <p>
              I'm currently working as a <strong>Junior MERN Stack Developer</strong> at Xcatalyst,
              where I continue to learn, collaborate, and contribute to impactful projects.
            </p>
          </div>

          {/* Skill Bars */}
          <div className="aboutSkill flex flex-col gap-5 w-full">
            {[
              { name: "HTML & CSS", width: "100%" },
              { name: "JavaScript", width: "90%" },
              { name: "React.js", width: "85%" },
              { name: "Bootstrap", width: "90%" },
              { name: "Tailwind", width: "90%" },
              { name: "Node.js", width: "75%" },
            ].map((skill, index) => (
              <div
                key={index}
                className="skill flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-full hover:scale-105 transition-transform duration-500 cursor-pointer"
              >
                <p className="font-semibold text-left w-full sm:w-32 md:text-lg text-base">
                  {skill.name}
                </p>
                <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-full h-2">
                  <div
                    style={{ width: skill.width }}
                    className="h-2 rounded-full bg-gradient-to-r from-purple-700 to-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="achievements flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[10rem] md:mb-4">
        {[
          { icon: <FaLaptopCode size={30} />, number: "15+", label: "Projects" },
          { icon: <FaCode size={30} />, number: "9+", label: "Services" },
          { icon: <FaUserCheck size={30} />, number: "5+", label: "Happy Clients" },
        ].map((ach, index) => (
          <React.Fragment key={index}>
            <div className="ach flex flex-col items-center gap-1 hover:scale-110 transition-transform duration-500 cursor-pointer">
              <div className="text-pink-400">{ach.icon}</div>
              <h1 className="text-3xl font-semibold font-[handjet] bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text">
                {ach.number}
              </h1>
              <p className="font-[handjet] text-xl font-semibold">{ach.label}</p>
            </div>
            {index < 2 && (
              <hr className="w-20 hidden md:block md:rotate-90 border border-white opacity-75" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default About;
