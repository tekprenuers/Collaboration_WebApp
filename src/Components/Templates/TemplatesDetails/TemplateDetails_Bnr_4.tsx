import React from "react";

const TemplateDetails_Bnr_4: React.FC = () => {
  return (
    <section className="md:p-[4%] pt-9">
      <div className="bg-blue-100 md:py-19 py-6 px-5 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900">
          Letterhead Templates by Headerfy
        </h2>
        <p className="text-gray-700 mt-3">
          Want your business communication to stand out? Start utilizing
          branded, professional letterhead templates to send out internal
          notices, letters, emails, newsletters and more. Customize one of
          Headerfy’s professionally designed letterhead templates to get
          started.
        </p>
        <p className="text-gray-700 mt-5">
          With Headerfy’s design editor, you can fully customize any template to
          match your brand fonts and colors and update any information to fit
          your business needs. Choose from Visme’s design library full of
          shapes, icons, photos and more to decorate your letterhead.
        </p>

        {/* Wrapper div to center the button on small screens */}
        <div className="mt-6 flex justify-center md:justify-start">
          <button className="bg-[#ff5733] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-red-600 transition">
            Create Your Letterhead Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default TemplateDetails_Bnr_4;
