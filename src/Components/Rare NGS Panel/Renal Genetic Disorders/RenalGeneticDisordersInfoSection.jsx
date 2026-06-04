import React from "react";

const RenalGeneticDisordersInfoSection = () => {
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
                <b>Genetic Sequencing </b> – Detects mutations linked to hereditary kidney diseases.

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Targeted Renal Panels</b> – Focused testing for cystic, glomerular, and tubular disorders.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Molecular Diagnosis </b> – Correlates genetic findings with clinical and biochemical data for precise management.
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
Enables early and accurate diagnosis of inherited renal disorders.


              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Guides disease monitoring and personalized treatment strategies.

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Supports prognosis assessment and long-term care planning.
       </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Facilitates genetic counseling and risk assessment for family members.
</p>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default RenalGeneticDisordersInfoSection; 