import React from "react";

const DiseaseSpectrumofInfectiousInfoSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-10 font-roboto">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Section 1 */}
        <div className="mb-10">
          <div className="inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-6 py-2 rounded-lg font-semibold shadow text-lg">
            Key Diagnostic Evaluations
          </div>

          <ul className="mt-5 space-y-4 text-gray-700 text-lg md:text-xl leading-relaxed">
            
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Microbiological Culture & Sensitivity</b> – Identifies bacterial and fungal pathogens with antibiotic susceptibility profiling.

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Serological Testing</b> – Detects pathogen-specific antibodies and antigens for viral, bacterial, and parasitic infections.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Molecular Assays</b> – PCR and nucleic acid amplification tests for rapid and precise detection of infectious agents.

              </p>
            </li>

          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <div className="inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-6 py-2 rounded-lg font-semibold shadow text-lg">
            Clinical Applications
          </div>

          <ul className="mt-5 space-y-4 text-gray-700 text-lg md:text-xl leading-relaxed">
            
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                Enables early diagnosis for prompt and targeted therapy.

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                Reduces risk of transmission in community and hospital settings.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                Supports epidemiological surveillance and outbreak management.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                Guides personalized treatment strategies based on pathogen identification and resistance profiles.
</p>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default DiseaseSpectrumofInfectiousInfoSection;