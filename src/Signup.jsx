import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-blue-900 to-blue-600 items-center justify-center relative">
        <img src="/Intelecto_bg.jpg" alt="LMS visual" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div className="relative z-10 flex flex-col items-start px-12 pt-0">
          <div className="flex flex-col items-center mb-8 text-center w-full">
            <img src="/Intelecto_logo2.png" alt="Intelecto Logo" className="h-[200px] mb-2" />
            <span className="text-white text-3xl font-bold tracking-wide">INTELECTO <span className="text-blue-600 font-bold">LMS+</span></span>
          </div>
        </div>
        <div className="absolute bottom-12 left-12 text-black text-xs opacity-100">Copyright © 2025 PT. INTELECTO</div>
      </div>
      {/* Right Panel */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign Up</h2>
          <p className="mb-6 text-gray-500">Please enter your account details to sign up.</p>
          {success ? (
            <div className="text-green-600 text-center mb-4">Sign up successful! Redirecting to login...</div>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">School Code</label>
                <input type="text" placeholder="Enter School Code" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                <input type="text" placeholder="Enter Your Name" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                <input type="email" placeholder="Enter Your Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" />
              </div>
              <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Sign Up</button>
            </form>
          )}
          <div className="mt-4 text-center">
            <Link to="/login" className="text-blue-600 hover:underline">Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
