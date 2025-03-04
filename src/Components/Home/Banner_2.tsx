import React from "react";
import Image_1 from "../../assets/vector-illustration/image 1.png"
import Image_2 from "../../assets/vector-illustration/image 2.png";
import Image_3 from "../../assets/vector-illustration/image 3.png";
import Image_4 from "../../assets/vector-illustration/image 4.png";
import { motion } from "framer-motion";

const Banner_2: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 md:py-22 py-15 bg-[#00336626]">
      {/* Left Side: Text Content */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="font-poppins text-start text-3xl md:text-4xl font-semibold text-[#000000]">
          Empowering Your Branding, One Letterhead at a Time
        </h2>
        <p className="text-[#000000] mt-5 text-lg md:text-2xl text-start">
          With customizable templates, AI-powered content, and seamless branding
          tools, we make it easy to create letterheads that speak your brand's
          language.
        </p>
      </motion.div>

      {/* Right Side: Features Grid */}
      <div className="items-center pt-10 md:p-15 ">
        <div className="grid grid-cols-2 gap-4 md:max-w-lg">
          {/* Editable Templates */}
          <div className="relative bg-custom-gradient-1 text-white md:p-6 p-3  rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center">
            <img
              src={Image_1}
              alt="Template Icon"
              className="absolute top-[-1.4rem] left-[60%] lg:-top-8 lg:left-[210px] w-13 md:w-0 lg:w-0"
            />
            <h3 className="lg:text-lg text-sm font-bold lg:mt-10 pt-4 md:pt-0 lg:pt-0 mb-2">Editable Templates</h3>
            <p className="text-sm">
              Choose from 50+ customizable templates tailored for your industry.
            </p>
          </div>

          {/* AI Content Generator */}
          <div className="relative bg-custom-gradient-2 text-white md:p-6 rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center">
            <img
              src={Image_2}
              alt="AI Icon"
              className="absolute top-[-2rem] left-[55%] lg:-top-14 lg:left-[205px] w-20 md:w-0 lg:w-0"
            />
            <h3 className="lg:text-lg text-sm font-bold lg:mt-10 pt-8 md:pt-0 lg:pt-0 mb-2">
              AI Content Generator
            </h3>
            <p className="text-sm pt-1 lg:pt-0">
              Generate professional content in seconds with AI.
            </p>
          </div>

          {/* Export in Multiple Formats */}
          <div className="relative bg-custom-gradient-3 text-white md:p-6 p-4  rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center">
            <img
              src={Image_3}
              alt="Export Icon"
              className="absolute top-[-1.1rem] left-[60%]  lg:-top-9 lg:left-[210px] w-16 md:w-0 lg:w-0"
            />
            <h3 className="lg:text-lg text-sm font-bold lg:mt-10 pt-4 md:pt-0 lg:pt-0 mb-2">
              Export in Multiple Formats
            </h3>
            <p className="text-sm">
              Download your letterhead as PDF, DOCX, or PNG.
            </p>
          </div>

          {/* Branding Customization */}
          <div className="relative bg-custom-gradient-4 text-white md:p-6 rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center">
            <img
              src={Image_4}
              alt="Branding Icon"
              className="absolute top-[-0.8rem] left-[65%] lg:-top-5 lg:left-[210px] w-13 md:w-0 lg:w-0"
            />
            <h3 className="lg:text-lg text-sm font-bold lg:mt-10 p-2 pt-5 md:pt-0 lg:pt-0 lg:mb-2">
              Branding Customization
            </h3>
            <p className="text-sm mb-2">
              Tailor colors, fonts, and logos to match your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner_2;













// <div className="items-center pt-10 md:p-15">
//   <div className="grid grid-cols-2 gap-4 md:max-w-lg">
//     {/* Editable Templates */}
//     <div className="relative bg-custom-gradient-1 text-white md:p-6 rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center lg:min-h-[190px]">
//       <img
//         src={Image_1}
//         alt="Template Icon"
//         className="absolute lg:-top-8 lg:left-[210px] transform -translate-x-1/2 -top-6 left-30"
//       />
//       <h3 className="md:text-lg font-bold mt-7 mb-2">Editable Templates</h3>
//       <p className="text-sm mb-4">
//         Choose from 50+ customizable templates tailored for your industry.
//       </p>
//     </div>

//     {/* AI Content Generator */}
//     <div className="relative bg-custom-gradient-2 text-white md:p-6  rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center">
//       <img
//         src={Image_2}
//         alt="AI Icon"
//         className="absolute lg:-top-14 lg:left-[205px] -top-13 left-30 transform -translate-x-1/2"
//       />
//       <h3 className="md:text-lg font-bold mt-7 mb-2">AI Content Generator</h3>
//       <p className="text-sm">
//         Generate professional content in seconds with AI.
//       </p>
//     </div>

//     {/* Export in Multiple Formats */}
//     <div className="relative bg-custom-gradient-3 text-white md:p-6 mt-4 rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center lg:min-h-[190px]">
//       <img
//         src={Image_3}
//         alt="Export Icon"
//         className="absolute lg:-top-9 lg:left-[210px] -top-6 left-30 transform -translate-x-1/2"
//       />
//       <h3 className="md:text-lg font-bold mt-7 mb-2 m-2">
//         Export in Multiple Formats
//       </h3>
//       <p className="text-sm ">Download your letterhead as PDF, DOCX, or PNG.</p>
//     </div>

//     {/* Branding Customization */}
//     <div className="relative bg-custom-gradient-4 text-white md:p-6 mt-4 rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col items-center text-center">
//       <img
//         src={Image_4}
//         alt="Branding Icon"
//         className="absolute lg:-top-5 lg:left-[210px] -top-6 left-30 transform -translate-x-1/2"
//       />
//       <h3 className="md:text-lg font-bold mt-7 mb-2">Branding Customization</h3>
//       <p className="text-sm">
//         Tailor colors, fonts, and logos to match your brand.
//       </p>
//     </div>
//   </div>
// </div>;