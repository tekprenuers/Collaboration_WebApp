import React, { useState } from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { EyeOff, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { signup } from "../../src/Services/authService";
import { toast } from "react-toastify";
import { FaTriangleExclamation } from "react-icons/fa6";

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
   setError(null);
   setSuccess(null);

   console.log("Submitting form...");

   if (formData.password !== formData.confirmPassword) {
     setError("Passwords do not match!");
     console.log("Error: Passwords do not match!");
     return;
   }

   {/* Check if password is valid */}
   if (typeof formData.password !== "string" || formData.password.length < 10) {
     setPasswordError(true);
     setError("Password must be at least 10 characters long.");
     return;
   } else {
    setPasswordError(false);
  }


   setLoading(true);
   try {
     const userData = {
       fullName: `${formData.fname} ${formData.lname}`, // Combine first and last name
       email: formData.email,
       phone: formData.phone,
       password: formData.password,
     };

     console.log("Sending user data:", userData);

     const response = await signup(userData);

     console.log("Signup successful! Response:", response);
     toast.success(response.message);
     setSuccess(response.message);
     navigate("/login"); // Redirect after successful signup
   } catch (err: any) {
     toast.error(err.message);
     console.error("Signup failed! Error:", err);
     console.log("Error response:", err.response); // Check backend response
     setError(err.message || "Signup failed");
   } finally {
     setLoading(false);
   }
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
        onSubmit={handleSubmit}
      >
        {/*First and Last Name ---------------------------------------------*/}
        <div className="flex flex-col sm:flex-row sm:gap-x-4">
          <label className="block text-sm font-medium mb-5 lg:mb-0 sm:flex-1 fname">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder=" "
              onChange={handleChange}
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
              onChange={handleChange}
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
              placeholder=""
              onChange={handleChange}
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
              onChange={handleChange}
              required
            />
            <span className="block text-sm font-medium mb-1">Phone Number</span>
          </label>
        </div>

        {/*Pawword -------------------------------------*/}
        <div className="relative password-signup main-signup">
          <div className="flex items-center relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              required
              placeholder=""
              onChange={handleChange}
              className={`border ${
                passwordError && "password-error"
              } rounded-md p-2 w-full transition-all duration-200`}
            />
            <label className="block text-sm font-medium mb-1">Password</label>

            {/* Show FaTriangleExclamation if passwordError is true, else show Eye/EyeOff */}
            {passwordError ? (
              <FaTriangleExclamation
                className="absolute right-2 text-red-500"
                size={18}
              />
            ) : (
              <button
                type="button"
                className="absolute right-2 text-gray-400"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            )}
          </div>
        </div>

        {/*Confirm Pawword -------------------------------------*/}
        <div className="relative password-signup main-signup">
          <div className="flex items-center relative mt-6">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              required
              placeholder=""
              onChange={handleChange}
              className={`border ${
                passwordError && "password-error"
              } rounded-md p-2 w-full transition-all duration-200`}
            />
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            
            {/* Show FaTriangleExclamation if passwordError is true, else show Eye/EyeOff */}
            {passwordError ? (
              <FaTriangleExclamation
                className="absolute right-2 text-red-500"
                size={18}
              />
            ) : (
              <button
                type="button"
                className="absolute right-2 text-gray-400"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            )}
          </div>
        </div>

        <label className="flex items-center">
          <input type="checkbox" className="mr-2" required />
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

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-sm font-semibold hover:bg-orange-600 transition"
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Create Account"}
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
