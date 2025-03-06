import React, { useState } from "react";

const Pricing_Bnr_1: React.FC = () => {
  const [selected, setSelected] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="flex flex-col items-center text-center py-9">
      {/* Heading */}
      <h1 className="text-[20px] md:text-4xl font-bold text-[#000000B0] font-poppins">
        Create <span className="text-gradient-third font-bold">beautiful</span>{" "}
        content, faster.
      </h1>

      {/* Subheading */}
      <p className="text-[#000000B0] mt-2 text-[11px] md:text-base">
        Simple scalable pricing. No hidden fees. Cancel anytime.
      </p>

      {/* Toggle Pricing Button */}
      <div className="bg-blue-100 rounded-full flex items-center p-1 mt-4">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selected === "monthly"
              ? "bg-white shadow text-[#3D92E7]"
              : "text-gray-600"
          }`}
          onClick={() => setSelected("monthly")}
        >
          Monthly
        </button>

        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selected === "yearly"
              ? "bg-white shadow text-[#3D92E7]"
              : "text-gray-600"
          }`}
          onClick={() => setSelected("yearly")}
        >
          Yearly
          <span className="ml-2 text-xs text-gradient-fourth font-semibold">
            Save 50%
          </span>
        </button>
      </div>
    </div>
  );
};

export default Pricing_Bnr_1;
