import React, { useState } from "react";

const Skill = () => {
  // State to hold form values for multiple services
  const [services, setServices] = useState([
    { serviceName: "", description: "" },
  ]);

  // Handle input changes for each service
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newServices = [...services];
    newServices[index][name] = value;
    setServices(newServices);
  };

  // Handle adding more services
  const handleAddService = () => {
    setServices([...services, { serviceName: "", description: "" }]);
  };

  // Handle removing a service
  const handleRemoveService = (index) => {
    const newServices = services.filter((_, i) => i !== index);
    setServices(newServices);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Services Data:", services);
    // Implement save functionality here
  };

  return (
    <>
    <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold font-[kalam] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 
        text-center mt-8 sm:mt-10 md:mt-12 border-b-4 border-orange-300 rounded-b-full rounded-t-3xl shadow-2xl p-2 w-[180px] sm:w-[350px] mx-auto select-none">
        Services
      </h1>
      <div className="w-[320px] md:w-[30rem] mx-auto p-8  sm:p-8 bg-gray/180 rounded-lg border border-gray-500 shadow-2xl mt-8 sm:mt-12 mb-8   backdrop-blur-md">
        <form onSubmit={handleSubmit}>
        {services.map((service, index) => (
          <div key={index} className="space-y-4 relative mb-12">
            {/* Service Name */}
            <div className="relative z-0 w-full group ">
              <input
                type="text"
                name="serviceName"
                value={service.serviceName}
                onChange={(e) => handleInputChange(e, index)}
                className="block py-2  px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                placeholder=" "
                required
              />
              <label
                className="absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 text-white
                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500  peer-focus:font-semibold"
              >
                Service Name
              </label>
            </div>

            {/* Service Description */}
            <div className="relative z-0 w-full group">
              <textarea
                name="description"
                value={service.description}
                onChange={(e) => handleInputChange(e, index)}
                className="block py-2  px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                placeholder=" "
                rows="3"
                required
              />
              <label
                className="absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 text-white
                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500  peer-focus:font-semibold"
              >
                Service Description
              </label>
            </div>

            {/* Remove Service Button (Icon) */}
            {services.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveService(index)}
                className="absolute top-0 right-[-2.2rem] mt-2 mr-2 text-red-500 border-2 border-gray-500 rounded-lg  hover:text-red-600 focus:outline-none"
                aria-label="Remove Service"
              >
                {/* SVG Icon for Remove */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        ))}

        {/* Button to Add More Services */}
        <div className="text-center mt-4">
          <button
            type="button"
            onClick={handleAddService}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add More Service
          </button>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-4">
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

export default Skill;
