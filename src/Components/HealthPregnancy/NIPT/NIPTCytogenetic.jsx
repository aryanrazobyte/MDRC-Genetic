import React from "react";

const NIPTCytogenetic = () => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-20">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src="/assets/male-doctor-looking-virtual-dna-coming-out-tablet-gray-wall 1 (7).svg"
            alt="EVAA Prenatal Screening"
            className="w-full max-w-md mx-auto scale-x-[-1]"
          />
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white md:text-gray-800 mb-4">
            Advanced Non-Invasive Prenatal Screening
          </h2>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            EVAA prenatal screening is a non-invasive prenatal test for
            pregnant women that estimates the risk of the fetus having
            Down&apos;s syndrome and other aneuploidy-based genetic diseases.
            This test is more accurate and sensitive than any other available
            screening assays.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NIPTCytogenetic;
