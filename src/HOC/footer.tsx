import React from "react";
import HLogo from "../assets/vector-illustration/Heady.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaLongArrowAltRight,
} from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className=" bg-[#003366] text-white p-[7%] max-w-[]">
      {/* Top Section */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3">
        {/* Left - Logo & Contact */}
        <div>
          <div className="flex items-center ">
            <img src={HLogo} alt="Headerfly Logo" className="object-contain" />
            <span className="text-md ml-0.5 text-[#ffffff]">eaderfly</span>
          </div>
          <p className="mt-3">+234 804-895-014</p>
          <p className="text-gray-300 mt-3">support@Headerfly</p>
        </div>

        {/* Center - Quick Links */}
        <div className="pt-4 md:pt-0 lg:pt-0">
          <h3 className="text-lg font-semibold mb-3 ">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="#"
                className="hover:text-white relative  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white relative  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white relative  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Subscription */}
        <div className="lg:ml-auto">
          <h3 className="text-lg font-semibold pt-4 md:pt-0 lg:pt-0 mb-3">Subscribe</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Get product updates"
              className="px-3 py-2  bg-[#ffffff] text-black border-none rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-md">
              <FaLongArrowAltRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" mx-auto mt-8 flex flex-col-reverse md:flex-row items-center justify-between border-t border-gray-300 pt-4 text-gray-300">
        {/* Social Icons */}
        <div className="flex space-x-4 mt-3 lg:mt-8">
          <a href="#" className="hover:text-[#ff5733] border p-2 rounded-full">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-[#ff5733] border p-2 rounded-full">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-[#ff5733] border p-2 rounded-full">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-[#ff5733] border p-2 rounded-full">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-4 md:mt-9">
          {"\u00A9"} {new Date().getFullYear()} Headerfly. All rights reserved.
        </p>

        {/* Legal Links */}
        <div className="flex lg:space-x-4 space-x-1 mt-4 md:mt-9">
          <a
            href="#"
            className="hover:text-white relative  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <span>|</span>
          <a
            href="#"
            className="hover:text-white relative  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            href="#"
            className="hover:text-white relative  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};
