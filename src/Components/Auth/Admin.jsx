import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { ping } from 'ldrs';
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  ping.register(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/Admin/Dashboard/Home');    
      })
      .catch((error) => {
        console.log(error);
        alert("Incorrect! Please Enter Correct Email and Password.");
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 p-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gray-900/90 dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h1 className="text-4xl font-[Bungee] text-center text-blue-600 dark:text-yellow-400 font-kalam mb-2">
          Login
        </h1>
        <p className="text-center font-[Kalam] text-gray-400 dark:text-gray-300 mb-6">
          Enter your credentials to access your admin panel
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-500 dark:text-gray-200 font-semibold mb-1">
              Username
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-3">
              <FaEnvelope className="text-gray-500 dark:text-gray-300 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent w-full outline-none text-gray-800 dark:text-white placeholder-gray-400"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-500 dark:text-gray-200 font-semibold mb-1">
              Password
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-3">
              <FaLock className="text-gray-500 dark:text-gray-300 mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-transparent w-full outline-none text-gray-800 dark:text-white placeholder-gray-400"
                placeholder="Enter password"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 text-white font-semibold transition-all duration-300 hover:from-indigo-700 hover:to-blue-800 disabled:opacity-60"
          >
            <FaSignInAlt /> {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Admin;
