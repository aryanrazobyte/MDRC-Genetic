import React from "react";
import { Shield, Target, Droplets } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Safe",
    description:
      "Non-invasive with no risk of miscarriage.",
    image:
      "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827894/vite-project/yb0dkzfhcyczjpkit5n1.svg",
  },
  {
    icon: Target,
    title: "Accurate",
    description:
      "More than 99% detection rate for autosomal trisomy conditions, with a false positive rate of less than 1%.",
    image:
      "/assets/male-doctor-looking-virtual-dna-coming-out-tablet-gray-wall 1 (6).svg",
  },
  {
    icon: Droplets,
    title: "Simple",
    description:
      "Uses just one maternal blood sample of 10 ml, with a low sample re-draw rate of less than 1%.",
    image:
      "/assets/lab-technicians-talking-video-call-with-professional-chemist-doctor-explaning-vaccine-reactions 1.svg",
  },
];

const NIPTAdvantages = () => {
  return (
    <section className="bg-white py-10 sm:py-12 px-4 sm:px-6 font-roboto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold text-gray-800 mb-8 text-center">
          Advantages of EVAA Prenatal Screening
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-36 sm:h-40 bg-[#E8F6FC] flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-auto max-w-full object-contain"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(to right, #15AEE5, #0C607F)",
                      }}
                    >
                      <Icon className="text-white w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#005C96]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NIPTAdvantages;
