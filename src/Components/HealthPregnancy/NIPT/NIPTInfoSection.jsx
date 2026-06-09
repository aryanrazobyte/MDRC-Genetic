import React from "react";

const whoCanItems = [
  "Women who are at least 10 weeks pregnant",
  "Patients with abnormal USG reports or maternal screening test results",
  "Women with a previous history of abnormal pregnancy",
  "Women of advanced maternal age (above 35 years)",
  "Individuals with a family history of genetic disorders",
  "IVF pregnancies (including egg donor and surrogacy cases)",
];

const unsuitableItems = [
  "Has cancer",
  "Has trisomy",
  "Has undergone stem cell therapy",
  "Has received an organ transplant",
  "Has triplet pregnancy",
  "Has Vanishing Twins cases",
];

const NIPTInfoSection = () => {
  return (
    <div className="bg-gray-100 py-10 sm:py-12 px-4 sm:px-6 md:px-10 font-roboto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-5 sm:px-6 py-2 rounded-lg font-semibold shadow text-base sm:text-lg">
            Who Can Undergo the Test?
          </div>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {whoCanItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm text-sm sm:text-base text-gray-700"
              >
                <span className="text-green-500 shrink-0 text-lg">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              Low Risk
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              It is very unlikely that the pregnancy is affected by a trisomy or
              aneuploidy.
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-[#005C96]">
            <h3 className="text-lg font-semibold text-[#005C96] mb-2">
              Aneuploidy Detected
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The result should be confirmed by amniocentesis.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#005C96] to-[#15AEE5] text-white rounded-xl p-5 sm:p-6 mb-10 text-center shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            ACOG Guidelines Recommendation
          </h3>
          <p className="text-sm sm:text-base leading-relaxed opacity-95">
            ACOG Guidelines Recommend NIPS for All Pregnancies Regardless of
            Risk.
          </p>
        </div>

        <div>
          <div className="inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-5 sm:px-6 py-2 rounded-lg font-semibold shadow text-base sm:text-lg">
            Important Notes
          </div>
          <p className="mt-4 text-sm sm:text-base text-gray-700 mb-4">
            The test is unsuitable if the patient:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {unsuitableItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm text-sm sm:text-base text-gray-700"
              >
                <span className="text-red-400 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NIPTInfoSection;
