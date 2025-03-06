import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon
import Template_File from "../../assets/vector-illustration/template-file.png";
import Template_pi from "../../assets/vector-illustration/template-pi.png";

const TemplateHead: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const delaySearch = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchQuery]);

  const handleSearch = async () => {
    setLoading(true);
    console.log("Searching for:", searchQuery);

    setTimeout(() => {
      setResults([`Result for "${searchQuery}"`]);
      setLoading(false);
    }, 1000);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setResults([]);
  };

  return (
    <section className="relative flex flex-col items-center text-center px-4 py-30 space-y-4 md:h-auto lg:h-auto">
      <img
        src={Template_File}
        alt=""
        className="absolute lg:top-[1%] lg:left-[80px] -top-[30px] left-[0px] w-40 md:w-55 lg:w-60"
      />
      <div>
        <h1 className="text-3xl md:text-5xl font-poppins font-bold pt-13">
          <span className="text-gradient-second">Free Template Design</span>
        </h1>
        <p className="text-3xl md:text-5xl font-poppins font-bold mt-3">
          <span className="text-gradient-second">for Everyday Need</span>
        </p>
      </div>

      <div className="relative w-full mb-3 max-w-2xl">
        <input
          type="text"
          placeholder="letterhead template..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-5 py-3 text-[#000000] bg-white border border-gray-300 rounded-sm outline-none indent-6"
        />
        <BiSearchAlt
          size={20}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
        {searchQuery && (
          <AiOutlineClose
            size={20}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={clearSearch}
          />
        )}
      </div>

      <div className="w-full max-w-2xl">
        {loading && <p className="text-sm text-gray-500">Searching...</p>}
        {results.length > 0 && (
          <ul className="mt-2 bg-white border border-gray-300 rounded-sm text-left shadow-md">
            {results.map((result, index) => (
              <li key={index} className="p-2 border-b last:border-none">
                {result}
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="text-[#0000009E] text-sm md:text-base max-w-2xl">
        Browse through 1000s of professional templates for infographics,
        presentations, charts, maps, documents, printables, and many more
        graphic design projects.
      </p>
      <img
        src={Template_pi}
        alt=""
        className="absolute lg:bottom-[0px] lg:right-[8%] bottom-[2%] right-[0px] w-35 md:w-45 lg:w-50"
      />
    </section>
  );
};

export default TemplateHead;
