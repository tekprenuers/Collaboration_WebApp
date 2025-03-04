import React from "react";
import { useNavigate } from "react-router-dom";

const LoginAndSignup: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");

  return (
    <div className="fixed bottom-0 w-full bg-white p-5 flex flex-col items-center space-y-4 shadow-md md:hidden lg:hidden max-w-[1600px] mx-auto">
      <button
        onClick={handleLogin}
        className="hover:text-[#ff5733] text-[#000000] text-2xl font-medium"
      >
        Login
      </button>
      <button
        onClick={handleSignup}
        className="bg-[#0B2F59] text-white w-85 px-4 py-3 rounded-xl"
      >
        <h1 className="text-xl">Sign Up Free</h1>
      </button>
    </div>
  );
};

export default LoginAndSignup;
