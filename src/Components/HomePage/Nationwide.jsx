import React from "react";

function Nationwide() {
  const data = [
    {
      img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827873/vite-project/dfcullcyjtvxyrm5mzwc.svg",
      title: "State-of-the-Art Labs",
      desc: "Equipped with latest NGS platforms, real-time PCR, and automated sample processing systems.",
    },
    {
      img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827868/vite-project/grxo6ubd3uis4whlmc3b.svg",
      title: "NABH & NABL Certified",
      desc: "Every result is backed by internationally recognized quality standards and rigorous validation.",
    },
    {
      img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827866/vite-project/jaiu1rf2kikefkj5jysz.svg",
      title: "Patient-Centric Care",
      desc: "Genetic counseling support, fast turnaround times, and transparent reporting for every patient.",
    },
  ];

  return (
  <>
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <h2 className="text-[20px] font-medium text-[#15AEE5] mb-4">
          WHY MDRC
        </h2>

        <h3 className="text-[32px] font-bold text-[#005C96] mb-12">
          Trusted by Clinicians Nationwide
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className=""
            >
                <div className="flex justify-center mb-4">
              <img
                src={item.img}
                alt={item.title}
                className=""
              />
              </div>

              <h4 className="text-[20px] font-semibold text-[#1160A5] mb-2">
                {item.title}
              </h4>
              <p className="text-[#727070] text-[16px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    
    </>
  );
}

export default Nationwide;