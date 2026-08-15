import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebase';
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
    <div className="relative min-h-screen bg-slate-950 flex justify-center items-center p-5 overflow-hidden">
      {/* Ambient Glow Circles */}
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-indigo-600/20 blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] rounded-full bg-purple-600/20 blur-[120px] -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md p-8 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl shadow-2xl z-10"
      >
        {/* Title Block */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black tracking-tight text-white mb-2">
            Admin Access
          </h1>
          <p className="text-sm text-gray-400">
            Enter your admin credentials to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email / Username */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
              <FaEnvelope size={12} className="text-indigo-400" />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 placeholder-gray-500 text-sm"
              placeholder="name@example.com"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
              <FaLock size={12} className="text-indigo-400" />
              <span>Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 placeholder-gray-500 text-sm"
              placeholder="••••••••"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold py-3.5 px-6 rounded-2xl shadow-lg transition-all duration-300 disabled:opacity-60"
            >
              <span>{loading ? "Verifying..." : "Sign In"}</span>
              <FaSignInAlt size={14} className={loading ? "animate-pulse" : ""} />
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Admin;
