import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Amniocentesis",
    desc: "Infectious diseases arise from viruses, bacteria, fungi, and parasites affecting multiple organ systems.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/amniocentesis",
  },
  {
    title: "Chorionic Villus Sampling (CVS)",
    desc: "Chorionic Villus Sampling (CVS) suppression testing includes molecular and serological evaluation of infections such as HIV, HCV, and HPV.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/chorionicvillussamplingfeverpanel",
  },
  {
    title: "Fetal Blood and Products of Conception",
    desc: "Respiratory panels utilize multiplex PCR technology for simultaneous detection of viral and bacterial pathogens.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/fetalconception",
  },
  {
    title: "Blood Culture and Karyotyping",
    desc: "Gastrointestinal panels detect a wide range of viral, bacterial, and parasitic agents responsible for infectious diarrhea.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/bloodculturekaryotyping",
  },
  {
    title: "High Resolution Banding",
    desc: "Influenza panel testing helps detect multiple strains of flu viruses for accurate and timely diagnosis.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/highresolutionbanding",
  },
  {
    title: "Fragile X and DNA Studies",
    desc: "Tropical fever panel identifies pathogens responsible for diseases like dengue, malaria, chikungunya, and more.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/fragilexanddnastudies",
  },
];

const Services = () => {
  return (
    <section className="bg-[#f4f6f8] py-8 px-4 lg:py-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[24px] md:text-[28px] font-semibold text-[#1f4e79] mb-14">
          Explore our specialized reproductive genetic services below
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {services.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="group h-full"
            >
              <div className="bg-white rounded-2xl shadow-md p-6 flex gap-5 h-full cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">

                {/* Icon */}
                <div className="min-w-[65px] h-[65px] flex items-center justify-center rounded-xl bg-gradient-to-r from-[#15AEE5] to-[#0C607F] group-hover:scale-110 transition">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">

                  <h3 className="text-[18px] font-semibold text-[#1f4e79] mb-2 group-hover:text-[#0C607F] transition">
                    {item.title}
                  </h3>

                  <p className="text-[14px] text-gray-600 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>

                  {/* Bottom aligned */}
                  <span className="mt-auto pt-3 text-[#00a3e0] text-[14px] font-medium flex items-center gap-1 group-hover:underline">
                    Learn More →
                  </span>

                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;