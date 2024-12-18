import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    work: '',
    country: '',
    description: '',
    profilePhoto: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePhoto: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <>
      {/* Gradient Heading */}
      <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold font-[kalam] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 
        text-center mt-8 sm:mt-10 md:mt-12 border-b-4 border-orange-300 rounded-b-full rounded-t-3xl shadow-2xl p-2 w-[180px] sm:w-[350px] mx-auto select-none">
        Home
      </h1>

      {/* Form Container */}
      <div className="w-[310px] md:w-[30rem] mx-auto p-6 sm:p-8 bg-gray/180 rounded-lg border border-gray-500 shadow-2xl mt-8 sm:mt-12 mb-8   backdrop-blur-md">
        <form onSubmit={handleSubmit}>
          {/* Floating Label for Name */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="block py-2  px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 text-white
  peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500  peer-focus:font-semibold">
              Name
            </label>
          </div>

          {/* Floating Label for Work */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="work"
              id="work"
              value={formData.work}
              onChange={handleInputChange}
              className="block py-2 px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="work"
              className="absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label  peer-focus:text-yellow-500 peer-focus:font-semibold">
              Work
            </label>
          </div>

          {/* Floating Label for Country */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="country"
              id="country"
              value={formData.country}
              onChange={handleInputChange}
              className="block py-2 px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="country"
              className="absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500 peer-focus:font-semibold">
              Country
            </label>
          </div>

          {/* Floating Label for Description */}
          <div className="relative z-0 mb-6 w-full group">
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleInputChange}
              className="block py-2 px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white  focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              placeholder=" "
              rows="4"
              required
            />
            <label
              htmlFor="description"
              className="absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500 peer-focus:font-semibold">
              Description
            </label>
          </div>

          {/* Profile Photo */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="file"
              name="profilePhoto"
              id="profilePhoto"
              onChange={handleFileChange}
              className="block py-2 px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white  focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              
            />
            <label
              htmlFor="profilePhoto"
              className="absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500 peer-focus:font-semibold">
              Profile Photo
            </label>
          </div>

          {/* Save Button */}
          <div className='grid place-items-center '>
            <button
              type="submit"
              className="w-[150px]  px-4 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:bg-yellow-500 hover:scale-105">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
