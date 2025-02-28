import React from "react";
import HLogo from "../assets/vector-illustration/Heady.png";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const NavigationLink = [
  { path: "/home", label: "Home" },
  { path: "/template", label: "Templates" },
  { path: "/pricing", label: "Pricing" },
  { path: "/learn", label: "Learn" },
  { path: "/About", label: "About Us" },
];

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <header className="w-full bg-[#003366] text-white py-4 px-6 flex md:justify-evenly justify-between items-center">
      {/* Logo */}
      <div className="flex items-center ">
        <img src={HLogo} alt="Headerfly Logo" className="object-contain" />
        <span className="text-md ml-0.5 text-[#ffffff]">eaderfly</span>
      </div>

      <nav className="hidden md:flex space-x-6">
        {NavigationLink.map((item) => (
          <NavLink
            key={item.path}
            to={item.path} // Adjust URL path
            className={({ isActive }) =>
              `relative  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full ${
                isActive
                  ? "after:w-full text-[#FF5733]"
                  : "text-white hover:text-gray-300"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Login & Signup Buttons */}
      <div className="flex items-center space-x-4">
        <button onClick={handleLogin} className="hover:text-[#ff5733]">
          Login
        </button>
        <button
          onClick={handleSignup}
          className="bg-white flex gap-1 text-[#0B2F59] px-4 py-2 rounded-xl hover:bg-gray-200"
        >
          Sign Up<span className="hidden md:block">Free</span>
        </button>
        {/* MOBILE MENU HAMBURGER */}
        <div className="md:hidden">
          <IoIosMenu />
        </div>
      </div>
    </header>
  );
};
