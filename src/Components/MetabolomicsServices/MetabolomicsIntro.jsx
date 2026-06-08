import React from "react";

const MetabolomicsIntro = () => {
  return (
    <section className="w-full py-6 sm:py-8 bg-[#0C759A] md:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10">
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-lg sm:text-xl md:text-[25px] font-semibold text-white md:text-gray-800 mb-3 sm:mb-4 leading-snug">
            Why comprehensive Metabolomics for health improvement?
          </h2>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            Metabolomics is an advanced test that analyses hundreds of small
            molecules in your body to understand how your body is functioning
            today. It can provide insights into your metabolism, nutrition,
            energy production, inflammation, and overall wellness.
          </p>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            Metabolomics is a modern health-testing approach that examines the
            chemical substances produced by your body to assess how well it is
            functioning.
          </p>
        </div>

        <div className="w-full md:w-1/2 order-2 md:order-1 max-w-md md:max-w-none mx-auto">
          <img
            src="/assets/lab-technicians-talking-video-call-with-professional-chemist-doctor-explaning-vaccine-reactions 1.svg"
            alt="Metabolomics Services"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MetabolomicsIntro;
