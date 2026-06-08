import React from "react";

import DnaPanelIntro from "./DnaPanelIntro";
import DnaPanelSections from "./DnaPanelSections";
import DnaPanelTests from "./DnaPanelTests";
import HowItWorks from "./HowItWorks";
import ClinicalActionability from "./ClinicalActionability";
import PromoBanner from "../HealthPregnancy/InfertilityGenetics/PromoBanner";
import DnaPanelFAQ from "./DnaPanelFAQ";
import Blog from "../HomePage/Blog";

const ModernDNAPanel = () => {
  return (
    <>
      <div className="font-roboto">
        <section className="relative text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] pt-16 md:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
            <div className="text-white text-center md:text-left w-full md:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Modern DNA <br className="hidden sm:block" /> Panels
              </h1>
            </div>

            <div className="relative flex justify-center items-center w-full md:w-auto py-6 sm:py-8">
              <div className="relative w-[250px] h-[250px] sm:w-[290px] sm:h-[290px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
                <div className="absolute inset-0 rounded-full bg-white/60 blur-[40px] scale-110 pointer-events-none" />
                <div className="absolute inset-0 rounded-full bg-[#15AEE5]/50 blur-[28px] scale-105 pointer-events-none" />
                <div className="overflow-hidden rounded-full w-full h-full border-[3px] sm:border-[1px] md:border-[1px] border-[#000000] shadow-[0_0_72px_28px_rgba(255,255,255,0.46)] box-border">
                  <img
                    src="/assets/Modern-Dna.png"
                    alt="Modern DNA Panels"
                    className="w-full h-full rounded-full object-cover object-center filter brightness-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <DnaPanelIntro />
      </div>

      <DnaPanelSections />
      <HowItWorks />
      <DnaPanelTests />
      <ClinicalActionability />
      <PromoBanner />
      <DnaPanelFAQ />
      <Blog />
    </>
  );
};

export default ModernDNAPanel;
