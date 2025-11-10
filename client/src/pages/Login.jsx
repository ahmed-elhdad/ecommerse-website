import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "../components/Header";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [inputType, setInputType] = useState("password");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login attempt:", formData);
  };

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              E-Store
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Welcome back to your store
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="emailField"
                  className="block text-gray-700 font-medium text-sm sm:text-base"
                >
                  Email Address
                </label>
                <input
                  id="emailField"
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  type="email"
                  name="emailField"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label
                  htmlFor="passwordField"
                  className="block text-gray-700 font-medium text-sm sm:text-base"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="passwordField"
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-12"
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                    }}
                    type={inputType}
                    name="passwordField"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 transition focus:outline-none"
                    onClick={togglePasswordVisibility}
                    type="button"
                    aria-label="Toggle password visibility"
                  >
                    {inputType === "password" ? (
                      <FaEye size={18} />
                    ) : (
                      <FaEyeSlash size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Reset Password */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
                <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded cursor-pointer accent-blue-500"
                  />
                  <span>Remember me</span>
                </label>
                <a
                  href="/verifyemail"
                  className="text-blue-600 hover:text-blue-800 font-medium transition"
                >
                  Reset Password
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2 sm:py-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 active:scale-95"
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Register Link */}
            <p className="text-center text-gray-700 text-sm sm:text-base">
              Don't have an account?{" "}
              <a
                href="/auth/register"
                className="text-blue-600 hover:text-blue-800 font-semibold transition"
              >
                Register Here
              </a>
            </p>
          </div>

          {/* Footer Text */}
          <p className="text-center text-gray-600 text-xs sm:text-sm mt-6">
            By signing in, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
