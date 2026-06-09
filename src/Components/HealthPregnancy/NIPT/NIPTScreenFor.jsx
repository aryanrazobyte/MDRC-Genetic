import React from "react";
import { Dna, Baby, Microscope } from "lucide-react";

const screeningGroups = [
  {
    icon: Dna,
    title: "Autosomal Aneuploidies",
    items: [
      "Down syndrome (Trisomy 21)",
      "Edward's syndrome (Trisomy 18)",
      "Patau's syndrome (Trisomy 13)",
      "Chromosomes 1–22 covered",
    ],
  },
  {
    icon: Baby,
    title: "Sex Chromosome Aneuploidies",
    items: [
      "Monosomy X (Turner syndrome)",
      "XXX (Triple X syndrome)",
      "XXY (Klinefelter syndrome)",
      "XYY (Jacob's syndrome)",
    ],
  },
  {
    icon: Microscope,
    title: "Microdeletions (EVAA Extended Screening)",
    items: [
      "DiGeorge syndrome",
      "1p36 deletion syndrome",
      "Prader-Willi syndrome",
      "Cri-du-Chat syndrome",
      "Angelman syndrome",
      "Wolf-Hirschhorn syndrome",
    ],
  },
];

const NIPTScreenFor = () => {
  return (
    <section className="bg-[#F5F7F9] py-10 sm:py-12 px-4 sm:px-6 font-roboto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[#15AEE5] font-medium text-sm sm:text-base">
            Comprehensive Screening
          </span>
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mt-1">
            What Does EVAA Screen For?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {screeningGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="bg-white rounded-xl p-5 sm:p-6 lg:p-8 shadow-[0_0_10px_#7e7e7e] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col h-full"
              >
                <div
                  className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-lg flex items-center justify-center mb-4 sm:mb-5"
                  style={{
                    background: "linear-gradient(to right, #15AEE5, #0C607F)",
                  }}
                >
                  <Icon className="text-white w-6 h-6" />
                </div>

                <h3 className="text-base sm:text-[18px] md:text-[20px] font-semibold text-gray-800 mb-3 leading-snug">
                  {group.title}
                </h3>

                <ul className="space-y-2 flex-grow">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm sm:text-[15px] text-[#727070] leading-relaxed"
                    >
                      <span className="text-green-500 shrink-0 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NIPTScreenFor;
