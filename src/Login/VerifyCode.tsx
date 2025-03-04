import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
// import { toast } from "react-toastify";


const ForgotPassword: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [, setPassword] = useState<string>("");
    // const [code, setCode] = useState<string>("");
    // const location = useLocation();
    const navigate = useNavigate();
    // const email = location.state?.email;

  const handleBackToLogin = () => {
    navigate("/login");
  };

    
    const handleVerify = () => {
        navigate("/reset-password")
    }
//   const handleVerify = async () => {
//     try {
//       const response = await fetch("https://your-backend.com/api/verify-code", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, code }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         navigate("/reset-password", { state: { email } });
//       } else {
//         alert(data.message || "Invalid code");
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
    <div className="w-full max-w-xl p-5 lg:mt- lg:p-0">
      {/* Large Screen Gradient */}
      <div className="custom-gradient hidden sm:block"></div>
      {/* Small Screen Gradient */}
      <div className="sm-custom-gradient sm:hidden"></div>

      {/* Left Section - Login Form */}
      <button onClick={handleBackToLogin} className="cursor-pointer">
        <IoIosArrowBack size={20} />
        <span className="text-sm"> Back to login</span>
      </button>

      <h2 className="text-3xl font-semibold text-gray-900 mt-3">Verify code</h2>
      <p className="text-base text-gray-500 mt-3">
        An authentication code has been sent to your email.
      </p>

      <form className="mt-6 space-y-5">
        {/* Password Field */}
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
            <label className="block text-sm font-medium mb-1">Enter Code</label>
            <button
              type="button"
              className="absolute right-2 text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600">
            Didn't recieve a code?{" "}
            <button className="text-orange-500 hover:underline">Resend</button>
          </p>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-orange-500 text-white py-3 rounded-sm font-semibold hover:bg-orange-600 transition"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
