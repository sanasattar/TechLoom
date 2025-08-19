import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#29A8AB] via-[#1a6b6d] to-[#0F766E] text-white flex items-center justify-center">
      <div className="w-full max-w-md px-6">
        <div className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-[#E0F2FE]">Sign in to your TechLoom account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#E0F2FE] mb-2 font-medium">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-12 bg-gradient-to-r from-white/20 to-white/10 border border-white/30 rounded-lg text-white placeholder-[#E0F2FE] focus:outline-none focus:border-[#81E6D9] focus:ring-2 focus:ring-[#81E6D9]/20 transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#E0F2FE]" />
              </div>
            </div>

            <div>
              <label className="block text-[#E0F2FE] mb-2 font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-12 pr-12 bg-gradient-to-r from-white/20 to-white/10 border border-white/30 rounded-lg text-white placeholder-[#E0F2FE] focus:outline-none focus:border-[#81E6D9] focus:ring-2 focus:ring-[#81E6D9]/20 transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#E0F2FE]" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#E0F2FE] hover:text-white transition-colors duration-300"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-[#E0F2FE]">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-[#81E6D9] hover:text-[#4FD1C7] transition-colors duration-300">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#29A8AB] to-[#1a6b6d] text-white py-3 rounded-lg font-semibold hover:from-[#1a6b6d] hover:to-[#29A8AB] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-[#E0F2FE]">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#81E6D9] hover:text-[#4FD1C7] transition-colors duration-300">
                Sign up
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link to="/" className="text-[#E0F2FE] hover:text-white transition-colors duration-300">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
