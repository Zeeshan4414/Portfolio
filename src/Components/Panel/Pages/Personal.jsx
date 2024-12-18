import React, { useState } from "react";

const Personal = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    introduction: "",
    skills: "",
    projects: "",
    services: "",
    clients: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can implement save functionality here
  };

  return (
    <>
      <h1 className="relative text-3xl sm:text-5xl md:text-6xl font-extrabold font-[kalam] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 
        text-center mt-8 sm:mt-10 md:mt-12 border-b-4 border-orange-300 rounded-b-full rounded-t-3xl shadow-2xl p-2 w-[180px] sm:w-[350px] mx-auto select-none">
      
        About User
      </h1>

      {/* Form Container with Border and Shadow */}
      <div className="w-[310px] md:w-[30rem] mx-auto p-6 sm:p-8 bg-gray/180 rounded-lg border border-gray-500 shadow-2xl mt-8 sm:mt-12 mb-8   backdrop-blur-md">
        <form onSubmit={handleSubmit}>
          {/* Floating Label for Introduction */}
          <div className="relative z-0 mb-6 w-full group">
            <textarea
              name="introduction"
              id="introduction"
              rows="5"
              value={formData.introduction}
              onChange={handleInputChange}
              className="block py-2  px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="introduction"
              className="absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 text-white
              peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500  peer-focus:font-semibold"
            >
              Introduction
            </label>
          </div>

          {/* Floating Label for Skills */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="skills"
              id="skills"
              value={formData.skills}
              onChange={handleInputChange}
              className="block py-2  px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="skills"
              className="absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 text-white
              peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500  peer-focus:font-semibold"
            >
              Skills (Comma-separated)
            </label>
          </div>

          {/* Floating Label for Projects */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="number"
              name="projects"
              id="projects"
              value={formData.projects}
              onChange={handleInputChange}
              className="block py-2  px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="projects"
              className="absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 text-white
              peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500  peer-focus:font-semibold"
            >
              Total Projects
            </label>
          </div>

          {/* Floating Label for Services */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="number"
              name="services"
              id="services"
              value={formData.services}
              onChange={handleInputChange}
              className="block py-2  px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="services"
              className="absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 text-white
              peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500  peer-focus:font-semibold"
            >
              Total Services
            </label>
          </div>

          {/* Floating Label for Clients */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="number"
              name="clients"
              id="clients"
              value={formData.clients}
              onChange={handleInputChange}
              className="block py-2  px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="clients"
              className="absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 text-white
              peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500  peer-focus:font-semibold"
            >
              Happy Clients
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-[150px]  px-4 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:bg-yellow-500 hover:scale-105"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Personal;
