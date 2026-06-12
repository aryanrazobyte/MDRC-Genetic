import React from "react";
import LongReadGenomicInfo from "./MetagenomicGenomicInfo";

const MetagenomicGeneratiSection = () => {
  return (
    <>
    <div className="bg-gray-100 py-6 px-4 md:px-10 font-roboto lg:py-12">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Section 1 */}
        <div className="mb-10">
          <div className="inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-6 py-2 rounded-lg font-semibold shadow text-lg">
Technical Scope
          </div>

          <ul className="mt-5 space-y-4 text-gray-700 text-lg md:text-xl leading-relaxed">
            
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Analyte</b> –  Total nucleic acids from clinical specimens




              </p>
            </li>

         

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Detection</b> –  Bacteria, viruses, fungi, and parasites





              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Additional Insights</b> –   Antimicrobial resistance markers and microbial diversity




              </p>
            </li>
           

          </ul>
        </div>



        <div>
          <div className="inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-6 py-2 rounded-lg font-semibold shadow text-lg">
            Clinical Applications
          </div>

          <ul className="mt-5 space-y-4 text-gray-700 text-lg md:text-xl leading-relaxed">
            
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Diagnosis of culture-negative infections


              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Central nervous system infections

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Sepsis of unknown origin
       </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Respiratory and transplant-related infections
</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Immunocompromised patient management
</p>
            </li>

          

          </ul>
        </div>



      

      </div>
    </div>
    <LongReadGenomicInfo/>
    </>
  );
};

export default MetagenomicGeneratiSection; 