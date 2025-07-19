import React, { useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset error and success messages
    setError("");
    setSuccess("");

    // Validate form data
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      toast.error("Passwords do not match.");
      return;
    }

    try {
      // Simulate a successful sign-up process
      const response = { success: true, message: "Sign-up successful!" };

      if (response.success) {
        toast.success(response.message);
        navigate("/login");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      } else {
        setError(response.message);
        toast.error(response.message);
      }
    } catch (error) {
      setError("An error occurred while signing up.");
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
       >
        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 text-red-700 bg-red-100 border border-red-500 rounded">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 text-green-700 bg-green-100 border border-green-500 rounded">
            {success}
          </div>
        )}

        {/* Name Field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            title="Full Name"
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            title="E-mail"
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              title="Password here"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
            </span>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="mb-6 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              title="Confirm Password"
              type={showConfirmPassword ? "text" : "password"} // Toggle visibility
              id="confirmPassword"
              name="confirmPassword"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-white text-black  hover:bg-gray-200  hover:scale-110  text-2xl font-bold py-2 px-14 rounded-2xl  focus:shadow-outline transition-all"
          >
            Sign Up
          </button>
        </div>

        {/* Login Link */}
        <div className="mt-4 text-center">
          <a href="/login">
            <span className="text-black hover:underline text-sm">
              {" "}
              Already have an account?{" "}
            </span>{" "}
            <span className=" text-black hover:underline text-lg font-bold ">
              Login here.
            </span>
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
