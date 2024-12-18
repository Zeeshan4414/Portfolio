import React from "react";
import Profile from "../../assets/My.png";
import Head from "../Head";

const About = () => {
  return (
    <div
      className="about md:py-4 px-6 md:px-20 grid items-center justify-center   gap-16"
      id="about"
    >
      <Head name="About" width="md:w-[260px]" />

      <div className="section flex flex-col md:flex-row items-center  gap-10 md:gap-20 w-full">
        <div className="left flex-shrink-0">
          <img
            src={Profile}
            alt=""
            className="rounded-lg transform transition-all duration-500 shadow-lg bg-blue-200 hover:scale-110 cursor-pointer hover:shadow-2xl hover:bg-gray-200 w-[280px]  h-52 md:w-[500] md:h-80"
          />
        </div>
        <div className="right flex flex-col gap-10 md:gap-20 ">
          <div className="content flex flex-col gap-4 text-md md:text-lg text-justify">
            <p>
              &emsp;&emsp;Hi, I’m, a web developer with a passion for crafting
              elegant and functional web solutions. I specialize in building
              dynamic websites and applications using technologies like React,
              Bootstrap, Tailwind, Node, and MySQL, etc.
            </p>
            <p>
              &emsp;&emsp;My portfolio features a range of projects, from social
              media apps to e-commerce sites, each showcasing my dedication to
              quality and user experience.
            </p>
          </div>

          <div className="aboutSkill flex flex-col gap-5 w-full">
            {/* Skills Progress Bars */}
            {[
              { name: "HTML & CSS", width: "100%" },
              { name: "JavaScript", width: "90%" },
              { name: "React.js", width: "80%" },
              { name: "Bootstrap", width: "90%" },
              { name: "Tailwind", width: "90%" },
              { name: "Node.js", width: "50%" },
            ].map((skill, index) => (
              <div
                key={index}
                className="skill flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-full hover:scale-105 transition-transform duration-500 cursor-pointer"
              >
                {/* Skill Name */}
                <p className="font-semibold  text-left w-full sm:w-32 md:text-lg text-base">
                  {skill.name}
                </p>


                <div className="w-full  rounded-full h-2">
                  <hr
                    style={{ width: skill.width }} // Dynamic width based on skill
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
          { number: "15+", label: "Projects" },
          { number: "9+", label: "Services" },
          { number: "5+", label: "Happy Clients" },
        ].map((ach, index) => (
          <>
            <div
              key={index}
              className="ach flex flex-col items-center gap-1 hover:scale-110 transition-transform duration-500 cursor-pointer"
            >
              <h1 className="text-3xl font-semibold font-[handjet] bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text">
                {ach.number}
              </h1>
              <p className="font-[handjet] text-xl font-semibold">
                {ach.label}
              </p>
            </div>
            {index < 2 && (
              <hr className="w-20 hidden md:block md:rotate-90 border border-white opacity-75" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default About;
