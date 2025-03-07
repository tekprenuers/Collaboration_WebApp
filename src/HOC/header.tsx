// import React, { useState } from "react";
// import HLogo from "../assets/vector-illustration/Heady.png";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { motion } from "framer-motion";

// const NavigationLink = [
//   { path: "/home", label: "Home" },
//   { path: "/template", label: "Templates" },
//   { path: "/pricing", label: "Pricing" },
//   { path: "/learn", label: "Learn" },
//   { path: "/about", label: "About Us" },
// ];

// export const Header: React.FC = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogin = () => {
//     navigate("/login");
//   };

//   const handleSignup = () => {
//     navigate("/signup");
//   };

//   return (
//     <header className="w-full bg-[#003366] text-white py-4 px-6 flex items-center justify-between">
//       {/* Logo */}
//       <div className="flex items-center">
//         <img src={HLogo} alt="Headerfly Logo" className="object-contain" />
//         <span className="text-md ml-0.5 text-[#ffffff]">eaderfly</span>
//       </div>

//       {/* Desktop Navigation */}
//       <nav className="hidden md:flex space-x-6">
//         {NavigationLink.map((item) => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             className={({ isActive }) =>
              // `relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full ${
//                 isActive
//                   ? "after:w-full text-[#FF5733]"
//                   : "text-white hover:text-gray-300"
//               }`
//             }
//           >
//             {item.label}
//           </NavLink>
//         ))}
//       </nav>

//       {/* Login & Signup Buttons */}
//       <div className="flex items-center space-x-4">
//         <button onClick={handleLogin} className="hover:text-[#ff5733]">
//           Login
//         </button>
//         <button
//           onClick={handleSignup}
//           className="bg-white flex gap-1 text-[#0B2F59] px-4 py-2 rounded-xl hover:bg-gray-200"
//         >
//           Sign Up<span className="hidden md:block">Free</span>
//         </button>

//         {/* MOBILE MENU BUTTON */}
//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
//           {menuOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//        <motion.div
//           initial={{ width: "0%" }}
//           animate={{ width: "100%" }}
//           exit={{ width: "0%" }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           className="fixed inset-0 bg-[#003366] text-white flex flex-col items-center justify-center space-y-6 md:hidden z-50"
//         >
//           {/* Close Button */}
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="absolute top-4 right-6 text-3xl"
//           >
//             <X />
//           </button>

//           {/* Navigation Links */}
//           {NavigationLink.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               onClick={() => setMenuOpen(false)}
//               className="text-2xl font-medium hover:text-orange-400 transition duration-300"
//             >
//               {item.label}
//             </NavLink>
//           ))}
//         </motion.div>
//     </header>
//   );
// };


import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HLogo from "../assets/vector-illustration/Heady.png";

const NavigationLink = [
  { path: "/", label: "Home" },
  { path: "/template", label: "Templates" },
  { path: "/pricing", label: "Pricing" },
  { path: "/learn", label: "Learn" },
  { path: "/about", label: "About Us" },
];

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");

  return (
    <header className="w-full bg-[#003366] text-white py-4 px-6 flex md:justify-evenly justify-between items-center relative max-w-[1600px] mx-auto">
      {/* Logo */}
      <div className="flex items-center">
        <img src={HLogo} alt="Headerfly Logo" className="object-contain" />
        <span className="text-md ml-0.5 text-[#ffffff]">eaderfy</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {NavigationLink.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full ${
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
        <button onClick={handleLogin} className="hover:text-[#ff5733] hidden md:block">
          Login
        </button>
        <button
          onClick={handleSignup}
          className="bg-white md:flex gap-1 text-[#0B2F59] px-4 py-2 rounded-xl hover:bg-gray-200 hidden"
        >
          Sign Up<span className="hidden md:block">Free</span>
        </button>

        {/* MOBILE MENU HAMBURGER */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden">
          <Menu />
        </button>
      </div>

      {/* Mobile Full-Screen Menu with Smooth Text Disappearance */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            exit={{ width: "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#003366] text-white flex flex-col items-center justify-center space-y-6 md:hidden z-50"
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-6 text-3xl"
            >
              <X />
            </button>

            {/* Animated Navigation Links */}
            <div className="flex flex-col space-y-6">
              {NavigationLink.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }} // Moves right and fades out
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1, // Staggered animation
                  }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
