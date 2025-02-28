//----------------------------------------------Template_Head
import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Template_File from "../../assets/vector-illustration/template-file.png";
import Template_pi from "../../assets/vector-illustration/template-pi.png";


const TemplateHead: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<string[]>([]); // stores the data
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]); // Clear results when input is empty
      return;
    }

    const delaySearch = setTimeout(() => {
      handleSearch();
    }, 500); // Debounce effect (wait 500ms after typing)

    return () => clearTimeout(delaySearch); // Cleanup on new input
  }, [searchQuery]);

  // Function to fetch search results
  const handleSearch = async () => {
    setLoading(true);
    console.log("Searching for:", searchQuery); // 🔥 Replace this with API call later

    // Simulate API response
    setTimeout(() => {
      setResults([`Result for "${searchQuery}"`]);
      setLoading(false);
    }, 1000); // Simulated API delay (replace with actual API call)
  };

  return (
    <section className="relative flex flex-col items-center text-center px-4 py-30 space-y-6">
      {/* Heading */}
      <img
        src={Template_File}
        alt=""
        className="absolute top-[57px] left-[250px]"
      />
      <div>
        <h1 className="text-3xl md:text-5xl font-poppins font-bold">
          <span className="text-gradient-second">Free Template Design</span>
        </h1>
        <p className="text-3xl md:text-5xl font-poppins font-bold mt-3">
          <span className="text-gradient-second">for Everyday Need</span>
        </p>
      </div>

      {/* Search Bar */}
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
      </div>

      {/* Search Results */}
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

      {/* Description */}
      <p className="text-[#0000009E] text-sm md:text-base max-w-2xl">
        Browse through 1000s of professional templates for infographics,
        presentations, charts, maps, documents, printables, and many more
        graphic design projects.
      </p>
      <img
        src={Template_pi}
        alt=""
        className="absolute bottom-[30px] right-[15%]"
      />
    </section>
  );
};

export default TemplateHead;