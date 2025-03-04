import React, { useState } from "react";
import Industry_Logo from "../../assets/vector-illustration/Industrylogo.png";
import Profile_Logo from "../../assets/vector-illustration/Profile.png";
import Orange_Profile_Logo from "../../assets/vector-illustration/orange_profile.png"
import Orange_Industry_Logo from "../../assets/vector-illustration/orange_industrylogo.png";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";


const industries = [
  "Real Estate & Construction",
  "IT, Internet & Telecom",
  "Healthcare & Medical",
  "Engineering",
  "Fintech Company",
  "Financial Institution",
  "Electronic Distribution",
  "Courier & Logistics",
  "Hostel Management",
];

const roles = [
  "Analyst",
  "Designer",
  "Executive/Director",
  "Engineering",
  "Consultant",
  "Communication Manager",
  "IT",
  "HR",
  "Hostel Management",
];

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


const TemplateBody: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"industry" | "role">("industry");
  const [selectedTab, setSelectedTab] = useState("industry");
  const [dropdownOpen, setDropdownOpen] = useState<"industry" | "role" | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);


  const handleSelect = (category: "industry" | "role", option: string) => {
    setSelectedTab(category);
    setSelectedOption(option);
    setDropdownOpen(null);
  };

  return (
    <>
      <section className="lg:flex p-9 hidden">
        {/* Sidebar */}
        <aside>
          {/* Industry & Role Header */}
          <div className="flex space-x-10 mb-4">
            <div
              className={`flex flex-col items-center cursor-pointer ${activeTab === "industry"
                  ? "text-[#FF5733] font-bold"
                  : "text-[#000000b0]"
                }`}
              onClick={() => setActiveTab("industry")}
            >
              <img
                src={
                  activeTab === "industry"
                    ? Orange_Industry_Logo
                    : Industry_Logo
                }
                alt="Industry"
                className="w-6 h-6 mb-1 transition"
              />
              <span className="text-lg font-semibold">Industry</span>
            </div>

            <div
              className={`flex flex-col items-center cursor-pointer ${activeTab === "role"
                  ? "text-[#FF5733] font-bold"
                  : "text-[#000000b0]"
                }`}
              onClick={() => setActiveTab("role")}
            >
              <img
                src={activeTab === "role" ? Orange_Profile_Logo : Profile_Logo}
                alt="Role"
                className="w-6 h-6 mb-1 transition"
              />
              <span className="text-lg font-semibold">Role</span>
            </div>
          </div>

          {/* List (Industry or Role) */}
          <ul className="space-y-5 text-[#000000B0] text-sm pt-3">
            {(activeTab === "industry" ? industries : roles).map(
              (item, index) => (
                <li
                  key={index}
                  className="cursor-pointer p-1 border-b border-blue-200 hover:text-orange-500 transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </aside>

        {/* Main Content */}
        <div className="flex-1 pl-6">
          {/* Title */}
          <div className="flex items-center ">
            <h2 className="text-2xl font-semibold text-[#000000B0]">
              Letterhead Template
            </h2>
            <span className="bg-[#DCEEFF] text-xs px-2 py-1 rounded-full ml-2">
              10
            </span>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-4 gap-10 mt-4">
            {templates.map((template, index) => (
              <Link key={index} to={`/template/${template.path}`}>
                <div className="border border-gray-200 transition hover:shadow-lg">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-40 object-cover"
                  />
                  <p className="text-sm text-center p-2">{template.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>






      {/*Small screen-------------------------------------------------------------------*/}

      <section className="lg:hidden p-3">
        <div className="flex items-center mb-3">
          <h2 className="text-2xl font-semibold text-[#000000B0] font-poppins">
            Letterhead Template
          </h2>
          <span className="bg-[#DCEEFF] text-xl px-3 py-2 rounded-full ml-2">
            10
          </span>
        </div>
        {/* Dropdown Buttons */}
        <div className="flex gap-2 mb-3 relative">
          {/* Industry Button */}
          <button
            className={`flex items-center justify-between p-3 w-36  rounded-md shadow-md ${selectedTab === "industry"
                ? " text-orange-600"
                : "bg-white border-gray-300"
              }`}
            onClick={() =>
              setDropdownOpen(dropdownOpen === "industry" ? null : "industry")
            }
          >
            <span className="flex items-center space-x-2">
              <img
                src={
                  selectedTab === "industry"
                    ? Orange_Industry_Logo
                    : Industry_Logo
                }
                alt="icon"
                className="w-5 h-5"
              />
              <span
                className={`font-medium text-gray-700 ${selectedTab === "industry" ? "text-orange-600" : ""
                  }`}
              >
                Industry
              </span>
            </span>
            <span>
              {dropdownOpen === "industry" ? <IoMdArrowDropup size={30} className="ml-7" /> : <IoMdArrowDropdown size={30} className="ml-7" />}
            </span>
          </button>

          {/* Role Button */}
          <button
            className={`flex items-center justify-between p-3 w-36 rounded-md shadow-md ${selectedTab === "role"
                ? "text-orange-600"
                : "bg-white border-gray-300"
              }`}
            onClick={() =>
              setDropdownOpen(dropdownOpen === "role" ? null : "role")
            }
          >
            <span className="flex items-center space-x-2">
              <img
                src={
                  selectedTab === "role" ? Orange_Profile_Logo : Profile_Logo
                }
                alt="icon"
                className="w-5 h-5"
              />
              <span
                className={`font-medium text-gray-700 ${selectedTab === "role" ? "text-orange-600" : ""
                  }`}
              >
                Role
              </span>
            </span>
            <span>
              {dropdownOpen === "role" ? <IoMdArrowDropup size={30} className="ml-7" /> : <IoMdArrowDropdown size={30} className="ml-7" />}
            </span>
          </button>
        </div>

        {/* Dropdown Options */}
        {dropdownOpen && (
          <ul className=" absolute bg-white border max-h-60 overflow-y-auto  border-gray-300 rounded-b-2xl shadow-md">
            {(dropdownOpen === "industry" ? industries : roles).map(
              (item, index) => (
                <li
                  key={index}
                  className="flex items-center p-2 cursor-pointer border-b border-blue-300 hover:bg-gray-100"
                  onClick={() => handleSelect(dropdownOpen, item)}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        )}

        {/* Selected Option Heading */}
        {selectedOption && (
          <h3 className="mt-4 text-lg font-semibold text-orange-600">
            {selectedOption}
          </h3>
        )}

        {/* Templates Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {templates.map((template, index) => (
            <Link
              key={index}
              to={`/template/${template.path}`}
              className="block bg-red-200 p-2 rounded-md shadow"
            >
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-20 object-cover rounded-md"
              />
              <p className="text-xs text-center mt-2 font-medium">
                {template.name}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default TemplateBody;












