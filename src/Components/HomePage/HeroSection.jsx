import React, { useState } from "react";
import { GiDna1 } from "react-icons/gi";
import PopupForm from "../../Components/PopupForm";

const HERO_IMAGE =
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1781071911/final_hvfvco.png";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-b from-[#005E91] to-[#0C759A] text-white lg:min-h-[760px]">
        {/* Decorative circles — full blue area */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full border border-white/20" />
          <div className="absolute bottom-10 right-20 h-96 w-96 rounded-full border border-white/10" />
        </div>

        {/* Right half — rectangular image */}
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <img
            src={HERO_IMAGE}
            alt="Precision Genomics"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        {/* Content — original full-width blue hero height */}
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-4 py-36 lg:min-h-[760px] lg:py-44">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-2 pt-15">
              <GiDna1 className="h-5 w-5" />
              <span className="text-sm uppercase tracking-widest">
                Genetic Division
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Precision Genomics for <br />
              <span className="text-[#0ECE91]">Better Health</span>
            </h1>

            <p className="mb-10 text-lg">
              MDRC India&apos;s Genetic Division delivers advanced molecular
              diagnostics.
            </p>

            <button
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer rounded-lg border border-white px-8 py-3 transition-colors hover:bg-white hover:text-[#1160A5]"
            >
              Explore Our Services
            </button>
          </div>
        </div>

        {/* Mobile image */}
        <div className="relative z-10 h-72 w-full sm:h-96 lg:hidden">
          <img
            src={HERO_IMAGE}
            alt="Precision Genomics"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </section>

      <PopupForm isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default HeroSection;
