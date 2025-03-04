import React from "react";

interface TemplateProps {
  name: string;
  image: string;
}

const TemplateDetails_Bnr_1: React.FC<TemplateProps> = ({ name, image }) => {
  return (
    <div className="flex flex-col md:flex-row rounded-lg mx-auto min-h-screen lg:max-w-7xl">
      {/* Left side - Template Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="rounded-md shadow-md max-w-2xl h-auto max-h-screen w-full object-cover bg-amber-600"
        />
      </div>

      {/* Right side - Template Details */}
      <div className="flex-1 p-6 flex flex-col justify-center max-w-md">
        <h1 className="text-xl md:text-2xl font-bold text-[#000000B0]">
          {name} Template
        </h1>
        <button className="bg-[#ff5733] text-white font-semibold py-2 px-4 rounded-md w-full md:w-auto mt-3">
          Use This Template
        </button>
        <p className="text-gray-600 my-2">
          Edit this template with our{" "}
          <a href="#" className="text-gray-500 underline">
            Letterhead Maker!
          </a>
        </p>
      </div>
    </div>
  );
};

export default TemplateDetails_Bnr_1;
