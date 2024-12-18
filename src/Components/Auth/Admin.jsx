import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { ping } from 'ldrs';

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
    <div className="flex justify-center items-center min-h-screen bg-gray-800 p-5">
      {loading && (
        <l-ping
          size="90"
          speed="2" 
          color="grey" 
        ></l-ping>
      )}

      {!loading && (
        <form className="bg-gradient-to-br from-gray-500 to-blue-500 p-8 rounded-lg shadow-lg max-w-md w-full" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bold text-gray-300 text-center mb-4 font-kalam">Login</h1>
          <p className="text-center text-yellow-100 mb-5">Enter details to log into your account</p>
          
          <div className="mb-5">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Username:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg border-2 border-gray-400 bg-gray-300 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-5">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg border-2 border-gray-400 bg-gray-300 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          <button type="submit" className="w-1/2 py-3 rounded-full text-white bg-gradient-to-br from-blue-500 to-red-400 hover:from-gray-900 hover:to-blue-500 mx-auto block transition-transform transform hover:scale-105" disabled={loading}>
            {loading ? 'Loading...' : 'Login In'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Admin;
