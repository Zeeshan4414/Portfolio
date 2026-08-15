import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaBriefcase, FaGlobe, FaFileAlt, FaCamera, FaSave } from 'react-icons/fa';

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
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
        <span>Edit Header Details</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
            <FaUser size={12} className="text-orange-400" />
            <span>Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Work */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
            <FaBriefcase size={12} className="text-orange-400" />
            <span>Professional Role</span>
          </label>
          <input
            type="text"
            name="work"
            value={formData.work}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
            placeholder="e.g. MERN Stack Developer"
            required
          />
        </div>

        {/* Country */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
            <FaGlobe size={12} className="text-orange-400" />
            <span>Location / Country</span>
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
            placeholder="e.g. Pakistan"
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
            <FaFileAlt size={12} className="text-orange-400" />
            <span>Profile Summary</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 resize-none"
            placeholder="Brief intro about yourself..."
            required
          />
        </div>

        {/* Profile Photo */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
            <FaCamera size={12} className="text-orange-400" />
            <span>Profile Avatar Photo</span>
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 hover:border-orange-500/40 bg-white/5 hover:bg-white/10 rounded-2xl cursor-pointer transition-all duration-300">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FaCamera size={24} className="text-gray-400 mb-2" />
                <p className="text-sm text-gray-400">
                  {formData.profilePhoto ? formData.profilePhoto.name : "Click to select a profile photo"}
                </p>
              </div>
              <input
                type="file"
                name="profilePhoto"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold py-3.5 px-8 rounded-2xl shadow-lg transition-all duration-300"
          >
            <FaSave size={14} />
            <span>Save Settings</span>
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default Home;
