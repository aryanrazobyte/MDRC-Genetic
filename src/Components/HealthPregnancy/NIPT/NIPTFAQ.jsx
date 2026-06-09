import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "What is EVAA Non-Invasive Prenatal Screening?",
    answer:
      "EVAA is a non-invasive prenatal test that estimates the risk of the fetus having Down's syndrome and other aneuploidy-based genetic diseases using a simple maternal blood sample.",
  },
  {
    question: "How accurate is EVAA screening?",
    answer:
      "EVAA offers more than 99% detection rate for autosomal trisomy conditions, with a false positive rate of less than 1% — making it more accurate than conventional screening assays.",
  },
  {
    question: "When can EVAA testing be done?",
    answer:
      "The EVAA Prenatal Screening Test is recommended for women who are at least 10 weeks pregnant.",
  },
  {
    question: "Is EVAA safe for the baby?",
    answer:
      "Yes. EVAA is completely non-invasive with no risk of miscarriage — only a 10 ml maternal blood sample is required.",
  },
  {
    question: "Can EVAA be used for IVF pregnancies?",
    answer:
      "Yes. EVAA is validated for twins, egg donor pregnancies, and surrogacy cases.",
  },
  {
    question: "What does EVAA extended screening include?",
    answer:
      "EVAA extended screening can detect rare microdeletions including DiGeorge syndrome, 1p36 deletion syndrome, Prader-Willi syndrome, Cri-du-Chat syndrome, Angelman syndrome, and Wolf-Hirschhorn syndrome.",
  },
  {
    question: "What does a Low Risk result mean?",
    answer:
      "A Low Risk result means it is very unlikely that the pregnancy is affected by a trisomy or aneuploidy, providing reassurance to expectant parents.",
  },
  {
    question: "What should I do if Aneuploidy is Detected?",
    answer:
      "If aneuploidy is detected, the result should be confirmed by amniocentesis or further diagnostic testing as recommended by your healthcare provider.",
  },
  {
    question: "Who is recommended to undergo EVAA testing?",
    answer:
      "EVAA is recommended for women at least 10 weeks pregnant, those with abnormal ultrasound or screening results, advanced maternal age (above 35), previous abnormal pregnancies, family history of genetic disorders, and IVF pregnancies.",
  },
  {
    question: "When is EVAA testing not suitable?",
    answer:
      "The test is unsuitable for patients with cancer, existing trisomy, stem cell therapy, organ transplant, triplet pregnancy, or vanishing twin cases. Your doctor will advise if EVAA is right for you.",
  },
];

const NIPTFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full py-6 sm:py-8 px-4 sm:px-6 flex justify-center font-roboto">
      <div className="max-w-4xl w-full">
        <h2 className="text-xl sm:text-[28px] md:text-[32px] font-semibold text-gray-800 mb-6 sm:mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border-l-4 border-[#1160A5] overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-start sm:items-center p-4 sm:p-5 text-left cursor-pointer gap-3"
              >
                <span className="text-[14px] sm:text-[16px] md:text-[17px] font-medium text-gray-700 leading-snug">
                  {faq.question}
                </span>
                <HiChevronDown
                  className={`shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#1160A5]" : ""
                  }`}
                  size={22}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NIPTFAQ;
