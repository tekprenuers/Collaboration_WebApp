import React from "react";
import finger from "../../assets/vector-illustration/finger.png";
import Love from "../../assets/vector-illustration/love.png";
import Ellipse from "../../assets/vector-illustration/Ellipse.png";
import Star from "../../assets/vector-illustration/bi_stars.png";
import heroImage from "../../assets/vector-illustration/homeBnr.png";
import { motion } from "framer-motion";

const Banner_1: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left py-30 md:ml-8">
        <h1 className="text-3xl md:text-5xl lg:text-[85px] md:ml-9 font-semibold max-w-2xl text-[#181818] font-poppins">
          Create Branded Letterheads{" "}
          <span className="text-gradient">Effortlessly</span>
        </h1>
        <p className="text-[#000000] md:mt-5 md:ml-9 text-lg md:text-2xl max-w-md font-poppins m-3">
          Customize templates, generate content with AI, and download in
          minutes.
        </p>
        <button className="md:mt-20 md:ml-9 px-9 py-3 bg-[#ff5733] text-white font-poppins rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition">
          Explore Templates
        </button>
      </div>

      {/* Right Side: Image & Floating Badges (Hidden on Small Screens) */}
      <motion.div className="hidden md:flex md:w-1/2 md:relative py-20 ml-[120px]">
        {/* Light Blue Background */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-100"></div>

        {/* Image */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <img
            src={heroImage}
            alt="Hero"
            className="md:hidden lg:block lg:w-[85%] h-auto rounded-full shadow-lg"
          />

          {/* Floating Badges */}
          <div className="absolute -top-7 left-[19%] bg-white px-4 py-2 border-2 border-[#003366] rounded-3xl shadow-md flex flex-col items-center w-40">
            {/* Hand Icon Positioned at Top-Right */}
            <div className="absolute -top-6 -right-1">
              <img src={finger} alt="" />
            </div>

            {/* Text Content */}
            <span className="text-sm font-semibold mr-7">98% Success</span>
            <p className="text-sm font-semibold mr-7">Guaranteed!</p>
          </div>

          <div className="absolute flex flex-col bottom-12 right-[77px] bg-white px-5 py-2 w-[170px] border border-[#003366] rounded-2xl shadow-md">
            <span className="text-[16px] font-semibold ">200+ Businesses</span>
            <p className="text-[16px] font-semibold">Empowered</p>
            <img
              src={Star}
              alt=""
              className="absolute -right-[16px] -top-[17px] w-[27%]"
            />
          </div>

          <div className="absolute bottom-[-25px] left-[125px] border-2 bg-white border-[#003366] px-4 py-3 rounded-2xl shadow-md">
            <img
              src={Ellipse}
              alt=""
              className="absolute bottom-2 w-8 left-2"
            />
            <span className="ml-9">We are Amazing</span>
            <img src={Love} alt="" className="absolute -bottom-2 left-40 w-5" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner_1;
