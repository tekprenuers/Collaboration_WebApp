import React from "react";
import Image_1 from "../../assets/vector-illustration/image 1.png"
import Image_2 from "../../assets/vector-illustration/image 2.png";
import Image_3 from "../../assets/vector-illustration/image 3.png";
import Image_4 from "../../assets/vector-illustration/image 4.png";
import { motion } from "framer-motion";

const Banner_2: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-22 bg-[#00336626]">
      {/* Left Side: Text Content */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="font-poppins text-3xl md:text-4xl font-semibold text-[#000000]">
          Empowering Your Branding, One Letterhead at a Time
        </h2>
        <p className="text-[#000000] mt-5 text-lg md:text-2xl">
          With customizable templates, AI-powered content, and seamless branding
          tools, we make it easy to create letterheads that speak your brand's
          language.
        </p>
      </motion.div>

      {/* Right Side: Features Grid */}
      <div className="items-center p-15">
        <div className="grid grid-cols-2 gap-4 max-w-lg">
          {/* Editable Templates */}
          <div className="relative bg-custom-gradient-1 text-white p-6 rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center min-h-[190px]">
            <img
              src={Image_1}
              alt="Template Icon"
              className="absolute -top-8 left-[210px] transform -translate-x-1/2"
            />
            <h3 className="text-lg font-bold mt-7 mb-2">Editable Templates</h3>
            <p className="text-sm">
              Choose from 50+ customizable templates tailored for your industry.
            </p>
          </div>

          {/* AI Content Generator */}
          <div className="relative bg-custom-gradient-2 text-white p-6 rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center">
            <img
              src={Image_2}
              alt="AI Icon"
              className="absolute -top-14 left-[205px] transform -translate-x-1/2"
            />
            <h3 className="text-lg font-bold mt-7 mb-2">
              AI Content Generator
            </h3>
            <p className="text-sm">
              Generate professional content in seconds with AI.
            </p>
          </div>

          {/* Export in Multiple Formats */}
          <div className="relative bg-custom-gradient-3 text-white p-6 mt-4 rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center min-h-[190px]">
            <img
              src={Image_3}
              alt="Export Icon"
              className="absolute -top-9 left-[210px] transform -translate-x-1/2"
            />
            <h3 className="text-lg font-bold mt-7 mb-2">
              Export in Multiple Formats
            </h3>
            <p className="text-sm">
              Download your letterhead as PDF, DOCX, or PNG.
            </p>
          </div>

          {/* Branding Customization */}
          <div className="relative bg-custom-gradient-4 text-white p-6 mt-4 rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center">
            <img
              src={Image_4}
              alt="Branding Icon"
              className="absolute -top-5 left-[210px] transform -translate-x-1/2"
            />
            <h3 className="text-lg font-bold mt-7 mb-2">
              Branding Customization
            </h3>
            <p className="text-sm">
              Tailor colors, fonts, and logos to match your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner_2;
