import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiDna1 } from "react-icons/gi";
import { HiArrowRight } from "react-icons/hi";
import PopupForm from "../../Components/PopupForm";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden text-white bg-gradient-to-b from-[#005E91] to-[#0C759A]">

        {/* Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full border border-white/20 animate-pulse" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full border border-white/10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-28 lg:py-32 flex flex-col lg:flex-row justify-between">

          {/* LEFT */}
          <div className="max-w-3xl z-10">
            <div className="flex items-center gap-2 mb-6 pt-15">
              <GiDna1 className="w-5 h-5" />
              <span className="text-sm uppercase tracking-widest">
                Genetic Division
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Precision Genomics for <br />
              <span className="text-[#0ECE91]">Better Health</span>
            </h1>

            <p className="text-lg mb-10">
              MDRC India's Genetic Division delivers advanced molecular diagnostics.
            </p>

            <div className="flex gap-4 flex-wrap">

              {/* Explore */}
              <button
  onClick={() => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className=" cursor-pointer border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1160A5]"
>
  Explore Our Services
</button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828059/vite-project/eqi7twgdhim4fec4rwq1.svg"
              className="mt-10"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* ✅ POPUP */}
      <PopupForm isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default HeroSection;