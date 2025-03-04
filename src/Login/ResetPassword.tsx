import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
// import { toast } from "react-toastify";


const ResetPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [, setPassword] = useState<string>("");
  // const [confirmPassword, setConfirmPassword] = useState<string>("");
  // const location = useLocation();
  const navigate = useNavigate();
  // const email = location.state?.email;

  const handleBackToLogin = () => {
    navigate("/login");
  };

  const handleReset = () => {
    navigate("/login");
  };
//   const handleReset = async () => {
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await fetch(
//         "https://your-backend.com/api/reset-password",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email, password }),
//         }
//       );

//       const data = await response.json();
//       if (response.ok) {
//         toast.success("Password reset successfully");
//         navigate("/login");
//       } else {
//         alert(data.message || "Something went wrong");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

  // Toggle the visibility of the password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full masx-w-xl p-5 lg:mt-14 max-w-md">
      {/* Large Screen Gradient */}
      <div className="custom-gradient hidden sm:block"></div>
      {/* Small Screen Gradient */}
      <div className="sm-custom-gradient sm:hidden"></div>

      {/* Left Section - Login Form */}
        <p className="text-md text-gray-500 flex items-center gap-1 cursor-pointer">
          <button onClick={handleBackToLogin} className="cursor-pointer">
            <IoIosArrowBack size={20} />
          </button>
          Back to login
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 mt-3">
          Set a Password
        </h2>
        <p className="text-base text-gray-500 mt-3">
          Your previous password has been reseted. Please set a new password for
          your account
        </p>

        <form className="mt-6 space-y-5">
          {/* Password Field-1 */}
          <div className="relative password-field main">
            <div className="flex items-center relative mt-6">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder=" "
                required
                onChange={(e) => setPassword(e.target.value)}
                className=""
              />
              <label className="block text-sm font-medium mb-1">
                Create Password
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

          {/* Password Field-2 */}
          <div className="relative password-field main">
            <div className="flex items-center relative mt-6">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder=" "
                required
                onChange={(e) => setPassword(e.target.value)}
                className=""
              />
              <label className="block text-sm font-medium mb-1">
                Re-Enter Password
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

          {/* Submit Button */}
          <button
            onClick={handleReset}
            className="w-full bg-orange-500 text-white py-3 rounded-sm font-semibold hover:bg-orange-600 transition"
          >
            Set password
          </button>
        </form>
    </div>
  );
};

export default ResetPassword;
