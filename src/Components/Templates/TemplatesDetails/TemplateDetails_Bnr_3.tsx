import React from "react";

const templates = [
  {
    title: "Interior Design - Letterhead",
    description:
      "Reflect your architecture vision using these elegant designs.",
    image: "interior-design.jpg",
  },
  {
    title: "Hospital - Letterhead",
    description: "Highlight your company’s competence with our template.",
    image: "hospital.jpg",
  },
  {
    title: "Law Firm - Letterhead",
    description: "Maintain your confidence in your legal writings.",
    image: "law-firm.jpg",
  },
  {
    title: "JAMB - Letterhead",
    description: "A clean and official look for JAMB communications.",
    image: "jamb.jpg",
  },
  {
    title: "Fashion - Letterhead",
    description: "Make an excellent impression with this letterhead template.",
    image: "fashion.jpg",
  },
  {
    title: "Christmas - Letterhead",
    description: "Perfect for sending warm wishes during the holidays.",
    image: "christmas.jpg",
  },
];

const TemplateDetails_Bnr_3: React.FC = () => {
  return (
    <div className=" max-w-7xl mx-auto mt-7">
      <h2 className="text-xl font-bold mb-4 font-poppins">More Like This</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {templates.map((template, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-3">
            <img
              src={template.image}
              alt={template.title}
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{template.title}</h3>
            <p className="text-gray-600 text-sm">{template.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateDetails_Bnr_3;
