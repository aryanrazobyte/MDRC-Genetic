import React from "react";

const ClopidogrelPharmacogenomicsSection = () => {
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
                <b>CYP2C19 Genotyping</b> – Detects variants affecting Clopidogrel metabolism and therapeutic response.


              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Pharmacogenomic Interpretation </b> –   Integrates genetic findings with clinical context for individualized therapy.



              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Risk Assessment</b> –  Identifies patients at increased risk of suboptimal response or cardiovascular complications

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
Enables personalized antiplatelet therapy for cardiovascular patients.


              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Guides selection of alternative drugs or adjusted dosing for poor metabolizers.

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Reduces risk of thrombotic events and enhances therapy efficacy.
       </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Supports precision medicine in cardiovascular care and long-term management.
</p>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default ClopidogrelPharmacogenomicsSection; 