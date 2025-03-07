import React from "react";
import { UserCircle } from "lucide-react";

const TestimonialCard = ({
  name,
  role,
  text,
}: {
  name: string;
  role: string;
  text: string;
}) => {
  return (
    <div className="shadow-xl rounded-br-4xl p-6 rounded-tl-4xl border-gray-200">
      <p className="text-gray-700 md:text-xl text-[15px] font-poppins">{text}</p>
      <div className="flex items-center mt-10">
        <UserCircle size={40} className="text-gray-400 rounded-full" />
        <div className="ml-3">
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Pricing_Bnr_4: React.FC = () => {
  return (
    <section className="md:p-[4%] p-[7%]">
      {" "}
      <div className="w-full flex justify-center md:px-8 md:py-8">
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl w-full">
          <TestimonialCard
            name="JOYCE BRANDAO"
            role="Senior HR Manager, Schneider Electric"
            text="Our relationship with Headerfy has been amazing since day one. Their responsiveness to our needs and long-term plans have helped us use their solutions even more intensively."
          />
          <TestimonialCard
            name="Hubert Janowski"
            role="Digital Marketer, IBM"
            text="Our relationship with Headerfy has been amazing since day one. Their responsiveness to our needs and long-term plans have helped us use their solutions even more intensively."
          />
          <TestimonialCard
            name="Hubert Janowski"
            role="Digital Marketer, IBM"
            text="Our relationship with Headerfy has been amazing since day one. Their responsiveness to our needs and long-term plans have helped us use their solutions even more intensively."
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing_Bnr_4;
