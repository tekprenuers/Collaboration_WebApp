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
    description: "Instill confidence in your law firm using this classic",
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
    <div className="md:p-[4%]">
      <h2 className="text-xl font-bold mb-4 font-poppins pt-5">
        More Like This
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {templates.map((template, index) => (
          <>
            <div key={index} className="rounded-lg">
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-32 object-cover rounded-md bg-amber-800"
              />
              <h3 className="font-semibold mt-2 text-sm">{template.title}</h3>
              <p className="text-gray-600 text-sm">{template.description}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TemplateDetails_Bnr_3;
