import React from "react";
import { useParams } from "react-router-dom";
import withHeaderAndFooter from "../../HOC/withHeaderAndFooter";
import Breadcrumb from "../../BreadCrumb/BreadCrumb";

const templates = [
  {
    name: "Retail Business Letterhead",
    image: "/path-to-image1.jpg",
    path: "Retail_Business_Letterhead",
  },
  {
    name: "Simple Business Letterhead",
    image: "/path-to-image2.jpg",
    path: "Simple_Business_Letterhead",
  },
  {
    name: "Website Design Business",
    image: "/path-to-image3.jpg",
    path: "Website_Design_Business",
  },
  {
    name: "Tech Business Letterhead",
    image: "/path-to-image4.jpg",
    path: "Tech_Business_Letterhead",
  },
  {
    name: "Small Business Letterhead",
    image: "/path-to-image5.jpg",
    path: "Small_Business_Letterhead",
  },
  {
    name: "Architecture Business Letterhead",
    image: "/path-to-image6.jpg",
    path: "Architecture_Business_Letterhead",
  },
  {
    name: "Interior Design Company Business",
    image: "/path-to-image7.jpg",
    path: "Interior_Design_Company_Business",
  },
  {
    name: "Contract Business Letterhead",
    image: "/path-to-image8.jpg",
    path: "Contract_Business_Letterhead",
  },
];

const TemplateDetails: React.FC = () => {
  const { templatePath } = useParams<{ templatePath: string }>();

  // Find the selected template
  const template = templates.find((t) => t.path === templatePath);

  if (!template) {
    return <div className="text-center text-red-500">Template Not Found</div>;
  }

  return (
    <section>
      {" "}
      <div className="p-6">
        <Breadcrumb /> {/* Show breadcrumb only on this page */}
        <h1 className="text-2xl font-bold">{template.name}</h1>
        <img
          src={template.image}
          alt={template.name}
          className="w-1/2 mx-auto my-4"
        />
        <p className="text-gray-600">
          This is a preview of the {template.name}.
        </p>
      </div>
    </section>
  );
};

export default withHeaderAndFooter(TemplateDetails);
