import React from "react";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-green-400 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-6">Create an Account</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Username</label>
            <input 
              id="username"
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition" 
              placeholder="Enter your username" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input 
              id="email"
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition" 
              placeholder="Enter your email" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
            <input 
              id="password"
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition" 
              placeholder="Enter your password" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-gray-700 font-medium mb-1">Confirm Password</label>
            <input 
              id="confirm-password"
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition" 
              placeholder="Confirm your password" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-semibold">
            Register
          </button>
          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account? <a href="/login" className="text-green-600 font-medium hover:underline">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
