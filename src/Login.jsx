import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSession } from "./SessionContext";

export default function Login() {
  const { login } = useSession();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login();
      navigate("/dashboard");
    }, 600);
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
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Welcome Back!</h2>
          <p className="mb-6 text-gray-500">Please enter your account details to sign in.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">School Code</label>
              <input type="text" placeholder="Enter School Code" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
              <input type="text" placeholder="Enter Your Username" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500 pr-10" />
                <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 1 12 6c3.978 0 7.432 2.19 9.02 5.223a2.25 2.25 0 0 1 0 2.554A10.477 10.477 0 0 1 12 18c-3.978 0-7.432-2.19-9.02-5.223a2.25 2.25 0 0 1 0-2.554z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>
                </span>
              </div>
            </div>
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" disabled={loading}>
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
