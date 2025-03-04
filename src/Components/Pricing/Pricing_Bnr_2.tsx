import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

const Pricing_Bnr_2: React.FC = () => {
  const [activePlan, setActivePlan] = useState("pro"); // Default active plan

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-10 bg-white">
      {/* Basic Plan */}
      <div
        className={`border-2 rounded-lg p-8 w-70 h-[650px] shadow-md space-y-10 transition-all duration-300 cursor-pointer ${
          activePlan === "basic"
            ? "border-orange-500 scale-105"
            : "border-gray-300"
        }`}
        onClick={() => setActivePlan("basic")}
      >
        <div>
          {" "}
          <h3 className="text-xl font-semibold font-poppins mt-8">Basic</h3>
          <p className="text-gray-600">
            Take it for a test drive. Use it as long as you want.
          </p>
          <h2 className="text-2xl my-9 text-center mb-20 text-[#000000B0] font-poppins">
            NG <span className="text-[#000000B0] font-bold">#0</span>/mo
          </h2>
        </div>
        <button
          className={`w-full py-3 rounded-md font-semibold transition-all ${
            activePlan === "basic"
              ? "bg-orange-500 text-white"
              : "border border-black text-black"
          }`}
        >
          Create free account
        </button>
        <ul className="mt-4 text-sm space-y-7 list-disc list-inside">
          <li className="font-semibold">include:</li>
          <li className="flex items-center space-x-2">
            <IoCheckmark color="green" />
            <span>Unlimited projects</span>
          </li>
          <li className="flex items-center space-x-2">
            <IoCheckmark color="green" />
            <span>Templates Limited</span>
          </li>
          <li className="flex items-center space-x-2">
            <IoCheckmark color="green" />
            <span>Most Templates</span>
          </li>
          <li className="flex items-center space-x-2">
            <IoCheckmark color="green" />
            <span>Regular Support</span>
          </li>
        </ul>
      </div>

      {/* Starter Plan */}
      <div
        className={`border-2 rounded-lg p-8 w-70 h-[650px] shadow-md transition-all space-y-10 duration-300 cursor-pointer ${
          activePlan === "starter"
            ? "border-[#FF5733] scale-105"
            : "border-gray-300"
        }`}
        onClick={() => setActivePlan("starter")}
      >
        <div>
          {" "}
          <h3 className="text-2xl font-semibold font-poppins mt-8">Starter</h3>
          <p className="text-gray-600">
            Gain access to premium features for individual use.
          </p>
          <h2 className="text-2xl my-9 text-center mb-20 text-[#000000B0] font-poppins">
            NG <span className="text-[#000000B0] font-bold">#0</span>/mo
          </h2>
        </div>
        <button
          className={`w-full py-3 rounded-md font-semibold transition-all ${
            activePlan === "starter"
              ? "bg-[#FF5733] text-white"
              : "bg-[#000000B0] text-white"
          }`}
        >
          Get Started
        </button>
        <ul className="mt-4 text-sm space-y-7 list-disc list-inside">
          <li className="font-semibold">Everything in Basic plus:</li>
          <li className="flex items-center space-x-2 gap-2">
            <IoCheckmark color="green" />
            All Premium Assets
          </li>
          <li className="flex items-center space-x-2 gap-2">
            <IoCheckmark color="green" />
            Full Access to Templates and Assets
          </li>
          <li className="flex items-center space-x-2">
            <IoCheckmark color="green" />
            <span>Download as JPG, PNG, PDF</span>
          </li>
          <li className="flex items-center space-x-2">
            <IoCheckmark color="green" />
            <span>24/7 Email & Chat Support </span>
          </li>
        </ul>
      </div>

      {/* Pro Plan */}
      <div
        className={`border-2 rounded-lg p-5 w-70 h-[650px] shadow-md space-y-10 transition-all duration-300 cursor-pointer relative ${
          activePlan === "pro"
            ? "border-[#FF5733] scale-105"
            : "border-gray-300"
        }`}
        onClick={() => setActivePlan("pro")}
      >
        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 text-center  text-sm py-1 px-4 rounded-t-md w-full ${
            activePlan === "pro"
              ? "text-white bg-[#FF5733]"
              : "bg-[#000000B0] text-white"
          }`}
        >
          BEST VALUE
        </div>
        <div>
          {" "}
          <h3 className="text-2xl font-semibold font-poppins mt-8 text-[#003366]">
            Pro
          </h3>
          <p className="text-gray-600 text-sm">
            Unlock more powerful design tools, manage your brand, and
            collaborate as a team.
          </p>
          <h2 className="text-2xl my-9 text-center mb-20 text-[#000000B0] font-poppins">
            NG <span className="text-[#000000B0] font-bold">#0</span>/mo
          </h2>
        </div>
        <button
          className={`w-full py-3 rounded-md font-semibold transition-all ${
            activePlan === "pro"
              ? "bg-[#FF5733] text-white"
              : "bg-[#000000B0] text-white"
          }`}
        >
          Get Started
        </button>
        <ul className="mt-4 text-sm space-y-7 font-poppins list-disc list-inside">
          <li className="font-semibold">Everything in Starter plus:</li>
          <li className="flex items-center space-x-2">
            <IoCheckmark color="green" />
          </li>
          <li className="flex items-center space-x-2">
            <IoCheckmark color="green" />
          </li>
          <li className="flex items-center space-x-2">
            <IoCheckmark color="green" />
          </li>
          <li className="flex items-center space-x-2">
            <IoCheckmark color="green" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pricing_Bnr_2;
