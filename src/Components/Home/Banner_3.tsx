import React from "react";
import Icon_1 from "../../assets/vector-illustration/icon_1.png";
import Icon_2 from "../../assets/vector-illustration/icon_2.png";
import Icon_3 from "../../assets/vector-illustration/icon_3.png";
import Icon_4 from "../../assets/vector-illustration/icon_4.png";

const Banner_3: React.FC = () => {
  return (
    <section className="mx-auto py-12 px-6 md:12 lg:px-28">
      {/* Quick Tips */}
      <h5 className="text-[#003366] font-bold uppercase font-merriweather text-md">
        Quick Tips
      </h5>
      <h2 className="text-2xl md:text-3xl font-bold mt-2 font-poppins">
        How the <span className="text-[#003366]">Letterhead</span> Maker Works
      </h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-9">
        {/* Step 1 */}
        <div className="flex items-start gap-6">
          <div className="bg-[#D9E0E8] p-3 rounded-md flex items-center justify-center w-46 h-25">
            <img src={Icon_4} alt="Step 1" className="w-16 h-15" />
          </div>
          <div>
            <h3 className="text-[#003366] font-bold text-lg font-poppins">01</h3>
            <p className="text-gray-700 text-xl font-poppins">
              Enter your business details, including your logo, phone number,
              email, and brand colors. Ensure all information is accurate for a
              professional look.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-6">
          <div className="bg-[#D9E0E8] rounded-md flex items-center justify-center w-35 h-24">
            <img src={Icon_1} alt="Step 2" className="w-20 h-15" />
          </div>
          <div>
            <h3 className="text-[#003366] font-bold text-lg">02</h3>
            <p className="text-gray-700 text-xl font-poppins">
              Choose from a variety of customizable letterhead templates. Adjust
              colors, fonts, and layout.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-6">
          <div className="bg-[#D9E0E8] rounded-md flex items-center justify-center w-45 h-25">
            <img src={Icon_2} alt="Step 3" className="w-20 h-15" />
          </div>
          <div>
            <h3 className="text-[#003366] font-bold font-poppins text-lg">03</h3>
            <p className="text-gray-700 text-xl font-poppins">
              Let AI generate high-quality content for your letterhead based on
              your business details and prompt. Modify as needed.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start gap-6">
          <div className="bg-[#D9E0E8]  rounded-md flex items-center justify-center w-40 h-25">
            <img src={Icon_3} alt="Step 4" className="w-20 h-19" />
          </div>
          <div>
            <h3 className="text-[#003366] font-bold text-lg">04</h3>
            <p className="text-gray-700 text-xl font-poppins">
              Instantly download your finalized letterhead in PDF or Word
              format. Use it for official business.
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#FF5733] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition">
          Explore Templates
        </button>
      </div>
    </section>
  );
};

export default Banner_3;
