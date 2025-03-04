import React from "react";
import { FaFilePdf } from "react-icons/fa";

const TemplatesDetails_Bnr_2: React.FC = () => {
  return (
    <section className="p-6">
      <div className="bg-blue-100 p-6 rounded-lg max-w-7xl mx-auto">
        {/* Template Specifications Content */}
        <div className="grid grid-cols-3 gap-6">
          <h2 className="text-lg font-semibold mb-4 text-[#000000B0]">
            Template Specifications:
          </h2>

          {/* Dimensions */}
          <div>
            <h3 className="font-semibold text-gray-900">Dimensions:</h3>
            <p className="text-gray-700">8.5” x 11” (US Letter)</p>

            {/* Formats (Moved under Dimensions) */}
            <h3 className="font-semibold text-gray-900 mt-14">Formats:</h3>
            <p className="text-gray-700 text-sm">
              Download as a PDF to share with your recipient or generate a
              shareable link for online sharing.
            </p>
          </div>

          {/* Customizable */}
          <div>
            <h3 className="font-semibold text-gray-900">Customizable:</h3>
            <p className="text-gray-700 text-sm">
              This template can be fully customized. You can edit content,
              yourself or use Ai, change image(s), apply custom colors, input
              your own fonts and logo, and more.
            </p>
          </div>
        </div>

        {/* Compatibility & File Formats */}
        <div className="mt-6 flex items-center space-x-3">
          <h2 className="text-lg font-semibold text-gray-900">
            Compatibility:
          </h2>
          <div className="flex space-x-2 ml-[24%]">
            <span className="bg-[#3CACD7] text-white p-2 rounded">
              <FaFilePdf />
            </span>
            <span className="bg-[#FCBC41] text-white p-2 rounded">
              <FaFilePdf />
            </span>
            <span className="bg-[#F45F50] text-white p-2 rounded">
              <FaFilePdf />
            </span>
          </div>
        </div>

        {/* Related Tags */}
        <div className="mt-6 flex items-center">
          <h2 className="text-lg font-semibold mr-4 text-gray-900">
            Related Tags:
          </h2>
          <div className="flex flex-wrap gap-2 ml-[24%]">
            {[
              "Letterheads",
              "Letterhead",
              "Printable Letterhead",
              "Letterhead Template",
            ].map((tag, index) => (
              <span
                key={index}
                className="bg-white text-gray-700 border px-3 py-1 rounded-md text-sm shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplatesDetails_Bnr_2;
