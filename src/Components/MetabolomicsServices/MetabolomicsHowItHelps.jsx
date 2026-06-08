import React from "react";

const benefits = [
  "Understand your body's biological aging process",
  "Identify nutritional deficiencies that may affect health and appearance",
  "Assess oxidative stress (a key contributor to aging)",
  "Evaluate metabolic health and energy production",
  "Support personalised nutrition and lifestyle recommendations",
  "Help optimise overall wellness and healthy aging",
];

const MetabolomicsHowItHelps = () => {
  return (
    <div className="py-6 sm:py-8 px-4 sm:px-6 font-roboto bg-white">
      <div className="max-w-6xl mx-auto text-gray-800">
        <h2 className="text-lg sm:text-xl md:text-[25px] font-semibold mb-4 sm:mb-6 text-center md:text-left">
          How Can It Help?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-7 mb-8 sm:mb-10">
          {benefits.map((item, index) => (
            <p key={index} className="flex gap-2">
              <span className="font-semibold text-[#005C96] shrink-0">
                {index + 1}.
              </span>
              <span>{item}</span>
            </p>
          ))}
        </div>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-7 md:leading-8 text-gray-700 text-center md:text-left">
          Advanced LC-MS/MS technology enables the simultaneous quantification
          of multiple metabolites, supporting precise clinical diagnosis and
          personalised healthcare.
        </p>
      </div>
    </div>
  );
};

export default MetabolomicsHowItHelps;
