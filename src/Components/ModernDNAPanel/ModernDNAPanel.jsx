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
        <section className="relative overflow-hidden text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] pt-10">
          <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <button
                onClick={() => (window.location.href = "/")}
                className="flex items-center justify-center md:justify-start gap-2 text-xl mb-4"
              >
                ← Back to Home
              </button>

              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
                Modern DNA <br /> Panels
              </h1>
            </div>

            <div className="relative flex justify-center items-center">
              <img
                src="/assets/male-doctor-looking-virtual-dna-coming-out-tablet-gray-wall 1 (7).svg"
                alt="Modern DNA Panels"
                className="rounded-full mt-11 lg:mt-0"
              />
              <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl"></div>
            </div>
          </div>
        </section>

        <div className="block md:hidden">
          <DnaPanelIntro />
        </div>
      </div>

      <div className="hidden md:block">
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
