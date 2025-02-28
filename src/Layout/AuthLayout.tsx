import { Outlet, useLocation } from "react-router-dom";
import ImageSlider from "../Common/ImageSlider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AuthLayout: React.FC = () => {
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  // State to track screen size
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  // Listen for window resize
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 lg:overflow-hidden">
        {/* Left Section - Login/Register Form */}
        {isLargeScreen ? (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isSignup ? "100%" : "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full md:w-1/2 flex items-center justify-center"
          >
            <div>
              <Outlet />
            </div>
          </motion.div>
        ) : (
          <div className="w-full flex items-center justify-center">
            <Outlet />
          </div>
        )}

        {/* Right Section - Image Slider (only on large screens) */}
        {isLargeScreen && (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isSignup ? "-100%" : "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-1/2 hidden md:flex items-center justify-center"
          >
            <ImageSlider />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
