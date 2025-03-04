import React, { useState } from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { EyeOff, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [, setFname] = useState<string>("");
  const [, setLname] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full max-w-sm p-3 pt-25 pb-5 lg:max-w-2xl">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isSignup ? "280%" : "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="custom-gradient hidden sm:block"
      ></motion.div>
      <div className="sm-custom-gradient sm:hidden"></div>

      {/* Left Section - Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-[#333333]">Sign Up</h2>
        <p className="text-base text-gray-500 mt-3">
          Let's get you all set up so you can access your personal account.
        </p>
      </motion.div>

      <motion.form
        className="mt-6 space-y-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/*First and Last Name ---------------------------------------------*/}
        <div className="flex flex-col sm:flex-row sm:gap-x-4">
          <label className="block text-sm font-medium mb-5 lg:mb-0 sm:flex-1 fname">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder=" "
              onChange={(e) => setFname(e.target.value)}
              required
            />
            <span className="block text-sm font-medium mb-1">First Name</span>
          </label>

          <label className="block text-sm font-medium mb-1 sm:flex-1 lname">
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder=" "
              onChange={(e) => setLname(e.target.value)}
              required
            />
            <span className="block text-sm font-medium mb-1">Last Name</span>
          </label>
        </div>

        {/*Email and Phone Number -----------------------------------------*/}
        <div className="flex flex-col sm:flex-row sm:gap-x-4">
          <label className="block text-sm font-medium mb-5 lg:mb-0 sm:flex-1 email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              onChange={(e) => setFname(e.target.value)}
              required
            />
            <span className="block text-sm font-medium mb-1">Email</span>
          </label>

          <label className="block text-sm font-medium mb-1 sm:flex-1 phone">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder=" "
              onChange={(e) => setLname(e.target.value)}
              required
            />
            <span className="block text-sm font-medium mb-1">Phone Number</span>
          </label>
        </div>

        {/*Pawword -------------------------------------*/}
        <div className="relative password-signup main-signup">
          <div className="flex items-center relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              required
              placeholder=""
            />
            <label className="block text-sm font-medium mb-1">Password</label>
            <button
              type="button"
              className="absolute right-2 text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        </div>

        {/*Confirm Pawword -------------------------------------*/}
        <div className="relative password-signup main-signup">
          <div className="flex items-center relative mt-6">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              required
              placeholder=""
            />
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <button
              type="button"
              className="absolute right-2 text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        </div>

        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm text-gray-600">
            I agree to all{" "}
            <a href="#" className="text-orange-500">
              Terms
            </a>{" "}
            and
            <a href="#" className="text-orange-500">
              {" "}
              Privacy Policy
            </a>
          </span>
        </label>

        <button className="w-full bg-orange-500 text-white py-2 rounded-sm font-semibold hover:bg-orange-600 transition">
          Create Account
        </button>
      </motion.form>

      <p className="text-sm text-gray-600 mt-2 text-center">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/login")}
          className="text-orange-500 hover:underline"
        >
          Login
        </button>
      </p>

      {/* Social Signup */}
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <hr className="flex-1 border-t border-gray-300" />
          <p className="text-center text-gray-600 whitespace-nowrap">
            Or sign up with
          </p>
          <hr className="flex-1 border-t border-gray-300" />
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button className="w-36 py-2 border border-gray-300 rounded-sm flex justify-center items-center gap-2">
            <IoLogoFacebook size={20} color="blue" />
          </button>
          <button className="w-36 py-2 border border-gray-300 rounded-sm flex justify-center items-center gap-2">
            <FcGoogle size={20} />
          </button>
          <button className="w-36 py-2 border border-gray-300 rounded-sm flex justify-center items-center gap-2">
            <FaApple size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
