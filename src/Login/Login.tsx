import React, { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { AuthLogin } from "../Services/authLoginn"; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const loginData = { email, password };
      const response = await AuthLogin(loginData);

      console.log("Login successful! Response:", response);

      // Redirect to dashboard or another page
      navigate("/");
    } catch (err: any) {
      console.error("Login failed! Error:", err);
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

 

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

    <div className="w-full max-w-xl p-4">
      <div className="custom-gradient hidden sm:block"></div>
      <div className="sm-custom-gradient sm:hidden"></div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-[#333333]">Login</h2>
        <p className="text-base text-gray-500 mt-3">
          Login to access your account
        </p>
      </motion.div>

      <motion.form
        className="mt-6 space-y-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleLogin}
      >
        {/* Email Field */}
        {error && <p className="text-red-500">{error}</p>}

        <div className="main mt-5">
          <div className="flex items-center relative">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder=""
              onChange={(e) => { setEmail(e.target.value) }}
            />
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
          </div>
        </div>

        {/* Password Field */}
        <div className="relative password-field main">
          <div className="flex items-center relative mt-6">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              required
              placeholder=""
              onChange={(e) => { setPassword(e.target.value) }}
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

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <button
            type="button"
            className="text-orange-500 hover:underline"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-sm font-semibold hover:bg-orange-600 transition">
          {loading ? "Logging in..." : "Login"}
        </button>
      </motion.form>

      {/* Sign Up Link */}
      <p className="text-sm text-gray-600 mt-6 text-center">
        Don't have an account?{" "}
        <button
          onClick={() => navigate("/signup")}
          className="text-orange-500 hover:underline"
        >
          Sign Up
        </button>
      </p>

      {/* Social Logins */}
      <div className="mt-6">
        <div className="flex items-center gap-3 my-4">
          <hr className="flex-1 border-gray-300" />
          <p className="text-center text-[#000000B0] whitespace-nowrap text-sm">
            Or Login in with
          </p>
          <hr className="flex-1 border-gray-300" />
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button className="w-36 py-3 border-1 border-[#003366] rounded-sm flex justify-center items-center gap-2">
            <IoLogoFacebook size={20} color="blue" />
          </button>
          <button className="w-36 py-3 border-1 border-[#003366] rounded-sm flex justify-center items-center gap-2">
            <FcGoogle size={20} />
          </button>
          <button className="w-36 py-3 border-1 border-[#003366] rounded-sm flex justify-center items-center gap-2">
            <FaApple size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
