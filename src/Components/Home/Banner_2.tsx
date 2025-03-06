import React from "react";
import Image_1 from "../../assets/vector-illustration/image 1.png"
import Image_2 from "../../assets/vector-illustration/image 2.png";
import Image_3 from "../../assets/vector-illustration/image 3.png";
import Image_4 from "../../assets/vector-illustration/image 4.png";
import { motion } from "framer-motion";

const Banner_2: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-4  md:py-22 py-15 bg-[#00336626]">
      {/* Left Side: Text Content */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
        className="w-full md:w-1/2 text-center md:text-left lg:pl-8"
      >
        <h2 className="font-poppins text-start text-3xl md:text-4xl lg:pl-8 font-semibold text-[#000000]">
          Empowering Your Branding, One Letterhead at a Time
        </h2>
        <p className="text-[#000000] mt-5 text-lg md:text-2xl text-start lg:pl-8">
          With customizable templates, AI-powered content, and seamless branding
          tools, we make it easy to create letterheads that speak your brand's
          language.
        </p>
      </motion.div>

      {/* Right Side: Features Grid */}
      <div className="items-center pt-15 md:p-15 ">
        <div className="grid grid-cols-2 gap-3 md:max-w-lg">
          {/* Editable Templates */}
          <div className="relative bg-custom-gradient-1 text-white md:p-6 py-9 h-43  px-1 lg:h-55 rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center ">
            <img
              src={Image_1}
              alt="Template Icon"
              className="absolute top-[-1.4rem] left-[60%] lg:-top-8 lg:left-[165px] w-13 md:w-15 lg:w-15"
            />
            <h3 className="lg:text-lg text-[12px] font-bold lg:mt-10 pt-4 md:pt-0 lg:pt-0 mb-2">Editable Templates</h3>
            <p className="text-[12px]">
              Choose from 50+ customizable templates tailored for your industry.
            </p>
          </div>

          {/* AI Content Generator */}
          <div className="relative bg-custom-gradient-2 text-white md:p-6 py-6 px-1 h-43 lg:h-55 rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center">
            <img
              src={Image_2}
              alt="AI Icon"
              className="absolute top-[-2rem] left-[55%] lg:-top-12 lg:left-[140px] w-20 md:w-15 lg:w-25"
            />
            <h3 className="lg:text-lg text-[12px] font-bold lg:mt-10 pt-8 md:pt-0 lg:pt-0 mb-2">
              AI Content Generator
            </h3>
            <p className="text-[12px] px-3">
              Generate professional content in seconds with AI.
            </p>
          </div>

          {/* Export in Multiple Formats */}
          <div className="relative bg-custom-gradient-3 text-white md:p-6 px-1 mt-4 py-6 h-43 lg:h-55 rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center">
            <img
              src={Image_3}
              alt="Export Icon"
              className="absolute top-[-1.1rem] left-[60%]  lg:-top-6 lg:left-[160px] w-16 md:w-0 lg:w-18"
            />
            <h3 className="lg:text-lg text-[12px] font-bold lg:mt-10 pt-4 md:pt-0 lg:pt-0 mb-2">
              Export in Multiple Formats
            </h3>
            <p className="text-[12px]">
              Download your letterhead as PDF, DOCX, or PNG.
            </p>
          </div>

          {/* Branding Customization */}
          <div className="relative bg-custom-gradient-4 h-43 lg:h-55 px-1 text-white md:p-6 mt-4 py-5 rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center ">
            <img
              src={Image_4}
              alt="Branding Icon"
              className="absolute top-[-0.8rem] left-[65%] lg:-top-5 lg:left-[165px] w-13 md:w-0 lg:w-14"
            />
            <h3 className="lg:text-lg text-[12px] font-bold lg:mt-10 p-2 pt-5 md:pt-0 lg:pt-0 lg:mb-2">
              Branding Customization
            </h3>
            <p className="text-[12px]">
              Tailor colors, fonts, and logos to match your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner_2;