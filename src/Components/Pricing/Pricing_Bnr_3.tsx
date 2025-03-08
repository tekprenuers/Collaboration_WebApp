import React from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Pricing_Bnr_3: React.FC = () => {
  return (
    <section className="md:p-[7%]">
      <div className="hidden md:block">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-center font-poppins">
              <th className="md:w-1/4 px-3 text-start text-gray-600 border text-2xl border-blue-200 align-top">
                <h2>Features</h2>
              </th>
              <th className="md:w-1/4 px-3 text-start text-gray-600 border border-blue-200 text-2xl align-top">
                <h2> Basic</h2>
              </th>
              <th className="md:w-1/4 px-3 text-gray-600 border border-blue-200">
                <div className="flex flex-col justify-between h-full">
                  <h2 className="text-2xl text-start">Starter</h2>
                  <div className="flex flex-col ">
                    <h2 className="text-[#000000B0] font-poppins text-sm">
                      NG{" "}
                      <span className="text-[#000000B0] font-bold text-3xl">
                        #0
                      </span>
                      /mo
                    </h2>
                    <span className="text-sm mr-4">billed #00</span>
                  </div>
                </div>
              </th>
              <th className="md:w-1/4 px-3 text-gray-600 bg-red-100 border-t-3 border-t-[#FF5733] border-blue-200">
                <div className="flex flex-col justify-between h-full">
                  <h2 className="text-2xl text-start">Pro</h2>
                  <div className="flex flex-col items-center">
                    <h2 className="text-[#000000B0] font-poppins text-sm">
                      NG{" "}
                      <span className="text-[#000000B0] font-bold text-3xl">
                        #0
                      </span>
                      /mo
                    </h2>
                    <span className="text-sm mr-4">billed #00</span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {[
              {
                feature: "Number of Projects",
                values: ["Unlimited", "Unlimited", "Unlimited"],
              },
              { feature: "Available Storage", values: ["500MB", "1GB", "5GB"] },
              {
                feature: "Slides/pages per project",
                values: ["50", "Unlimited", "Unlimited"],
              },
              {
                feature: "Premium assets & templates",
                values: [false, true, true],
              },
              {
                feature: "No headerfy Logo on design",
                values: [false, true, true],
              },
              { feature: "Brand Kit", values: [false, false, true] },
              {
                feature: "My Files (File Manager)",
                values: [true, true, true],
              },
              {
                feature: "Charts and Data Widgets",
                values: ["Limited", true, true],
              },
            ].map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-3 border flex justify-between border-blue-200 whitespace-nowrap text-start">
                  {item.feature}{" "}
                  <RxQuestionMarkCircled size={20} color="gray" />
                </td>
                {item.values.map((val, i) => (
                  <td
                    key={i}
                    className={`p-3 border border-blue-200 whitespace-nowrap ${
                      i === 2 ? "bg-red-100" : ""
                    }`}
                  >
                    {typeof val === "boolean" ? (
                      val ? (
                        <IoCheckmarkCircleSharp
                          className="text-[#FF5733] inline"
                          size={18}
                        />
                      ) : (
                        <HiOutlineXMark className="inline" size={18} />
                      )
                    ) : (
                      val
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Small Screen Version */}
      <section className="p-[7%] md:hidden">
        <div className="">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead className="overflow-x-hidden">
              <tr className="bg-gray-100">
                <th className="px-2 py-2 text-start text-[12px] border border-gray-300 align-top">
                  <h2> Features</h2>
                </th>
                <th className="px-2 py-2 text-center text-[12px] border border-gray-300 align-top">
                  <h2> Basic</h2>
                </th>
                <th className="px-1 py-2 text-center text-[12px] border border-gray-300">
                  Starter <br />
                  <div className="flex flex-col ">
                    <h2 className="text-[#000000B0] font-poppins text-[8px]">
                      NG{" "}
                      <span className="text-[#000000B0] font-bold text-[15px]">
                        1000
                      </span>
                      /mo
                    </h2>
                    <span className="text-[6px] mr-4">billed #00</span>
                  </div>
                </th>
                <th className="px-1 py-2 text-center text-[12px] border border-gray-300 bg-red-100">
                  Pro <br />
                  <div className="flex flex-col ">
                    <h2 className="text-[#000000B0] font-poppins text-[8px]">
                      NG{" "}
                      <span className="text-[#000000B0] font-bold text-[15px]">
                        1000
                      </span>
                      /mo
                    </h2>
                    <span className="text-[6px] mr-4 font-poppins">
                      billed #00
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Number of Projects",
                  values: ["Unlimited", "Unlimited", "Unlimited"],
                },
                {
                  feature: "Available Storage",
                  values: ["500MB", "1GB", "5GB"],
                },
                {
                  feature: "Slides/pages per project",
                  values: ["50", "Unlimited", "Unlimited"],
                },
                {
                  feature: "Premium assets & templates",
                  values: [false, true, true],
                },
                {
                  feature: "No headerfy Logo on design",
                  values: [false, true, true],
                },
                { feature: "Brand Kit", values: [false, false, true] },
                {
                  feature: "My Files (File Manager)",
                  values: [true, true, true],
                },
                {
                  feature: "Charts and Data Widgets",
                  values: ["Limited", true, true],
                },
              ].map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border flex justify-between items-center border-gray-300 text-start text-[10px]">
                    {item.feature}
                  </td>
                  {item.values.map((val, i) => (
                    <td
                      key={i}
                      className={`p-2 border border-gray-300 text-[9px] ${
                        i === 2 ? "bg-red-100" : ""
                      }`}
                    >
                      {typeof val === "boolean" ? (
                        val ? (
                          <IoCheckmarkCircleSharp
                            className="text-[#FF5733] inline"
                            size={12}
                          />
                        ) : (
                          <HiOutlineXMark
                            className="inline text-gray-500"
                            size={12}
                          />
                        )
                      ) : (
                        val
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Pricing_Bnr_3;
