import React from "react";

const NIPTCytogenetic = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none">
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* Image */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src="/assets/male-doctor-looking-virtual-dna-coming-out-tablet-gray-wall 1 (7).svg"
            alt="NIPT Screening"
            className="w-full scale-x-[-1]"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          
          {/* Desktop only heading */}
          <h2 className="hidden md:block text-2xl md:text-3xl font-semibold text-gray-800">
            Non-Invasive Prenatal Chromosomal Screening
          </h2>

          {/* Description */}
          <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed mt-3">
            At MDRC, Non-Invasive Prenatal Testing (NIPT) offers a safe, reliable approach to screen for common fetal chromosomal abnormalities using maternal blood. By analyzing circulating cell-free fetal DNA, NIPT provides high sensitivity and specificity without posing any risk to the fetus.
          </p>

        </div>

      </div>
    </section>
  );
};

export default NIPTCytogenetic;