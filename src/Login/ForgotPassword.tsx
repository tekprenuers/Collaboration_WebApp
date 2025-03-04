import React, { useState } from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const navigate = useNavigate()

    const handleBackToLogin = () => {
        navigate("/login")
    }

    const handleSubmit = () => {
        navigate("/verify-code")
    }
    // const handleSubmit = async (e: React.FormEvent) => {
    //   e.preventDefault();
    //   try {
    //     const response = await fetch(
    //       "https://your-backend.com/api/send-reset-code",
    //       {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ email }),
    //       }
    //     );

    //     const data = await response.json();
    //     if (response.ok) {
    //       navigate("/verify-code", { state: { email } }); // Navigate to the code verification page
    //     } else {
    //       alert(data.message || "Something went wrong");
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // };

  return (
    <div className="w-full max-w-xl p-5 lg:mt-14 lg:p-8 ">
      {/* Large Screen Gradient */}
      <div className="custom-gradient hidden sm:block"></div>
      {/* Small Screen Gradient */}
      <div className="sm-custom-gradient sm:hidden"></div>

      {/* Left Section - Login Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
          <button onClick={handleBackToLogin} className="flex items-center cursor-pointer">
            <IoIosArrowBack size={15} />
            Back to login
          </button>
      </motion.div>

      <h2 className="text-3xl font-semibold text-gray-900 mt-3">
        Forgot your password ?
      </h2>
      <p className="text-base text-gray-500 mt-3">
        Don't worry, happens to all of us. Enter your email below to recover
        your password
      </p>

      <motion.form
        className="mt-6 space-y-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Email Field */}
        <div className="main mt-5">
          <div className="flex items-center relative">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-orange-500 text-white py-3 rounded-sm font-semibold hover:bg-orange-600 transition"
        >
          Submit
        </button>
      </motion.form>

      {/* Social Login */}
      <div className="mt-6">
        <div className="flex items-center gap-3 my-4">
          <hr className="flex-1 border-t border-gray-300" />
          <p className="text-center text-gray-600 whitespace-nowrap">
            Or login with
          </p>
          <hr className="flex-1 border-t border-gray-300" />
        </div>

        <div className="flex  justify-center gap-4 mt-4">
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

export default ForgotPassword;
