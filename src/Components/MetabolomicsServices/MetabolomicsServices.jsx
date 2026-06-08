import React from "react";

import MetabolomicsIntro from "./MetabolomicsIntro";
import MetabolomicsHowItHelps from "./MetabolomicsHowItHelps";
import MetabolomicsPanels from "./MetabolomicsPanels";
import MetabolomicsTmsLink from "./MetabolomicsTmsLink";
import MetabolomicsFAQ from "./MetabolomicsFAQ";
import PromoBanner from "../HealthPregnancy/InfertilityGenetics/PromoBanner";
import Blog from "../HomePage/Blog";

const MetabolomicsServices = () => {
  return (
    <>
      <div className="font-roboto">
        <section className="relative text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] pt-16 md:pt-20 overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-14 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10">
            <div className="text-white text-center md:text-left w-full md:w-1/2 order-1">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Metabolomics <br className="hidden sm:block" /> Services
              </h1>
            </div>

            <div className="relative flex justify-center items-center w-full md:w-auto py-4 sm:py-6 md:py-8 order-2 overflow-visible">
              <div className="relative w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[370px] lg:h-[370px]">
                <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl scale-110 pointer-events-none" />
                <div className="absolute inset-0 rounded-full bg-[#15AEE5]/40 blur-[24px] sm:blur-[28px] scale-105 pointer-events-none" />
                <div className="overflow-hidden rounded-full w-full h-full border-[3px] sm:border-[4px] md:border-[5px] border-[#000000] shadow-[0_0_48px_20px_rgba(255,255,255,0.35)] sm:shadow-[0_0_72px_28px_rgba(255,255,255,0.46)] box-border">
                  <img
                    src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828050/vite-project/sg9b6bi3mhospqje1l0s.svg"
                    alt="Metabolomics Services"
                    className="w-full h-full rounded-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <MetabolomicsIntro />
      </div>

      <MetabolomicsHowItHelps />
      <MetabolomicsPanels />
      <MetabolomicsTmsLink />
      <PromoBanner />
      <MetabolomicsFAQ />
      <Blog />
    </>
  );
};

export default MetabolomicsServices;
