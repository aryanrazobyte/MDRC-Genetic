import React from "react";
import OncologyGenomicInfo from "./OncologyGenomicInfo";

const ComprehensiveGenomicSection = () => {
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
                <b>Technology</b> –   Hybrid capture–based NGS

              </p>
            </li>

         

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Gene Coverage</b> –  Typically 300–500+ cancer-associated genes




              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Sequencing Depth</b> –  ≥500× mean coverage




              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Variant Types Detected</b> –  
                <ul>
                  <li>Single Nucleotide Variants (SNVs)</li>
                  <li>Insertions and Deletions (Indels)</li>
                  <li>Copy Number Variations (CNVs)</li>
                  <li>Structural Variants (SVs)</li>
                  <li>Gene Fusions (via RNA sequencing)</li>
                  <li>Tumor Mutational Burden (TMB)</li>
                  <li>Microsatellite Instability (MSI)</li>
                </ul>




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
Identification of actionable mutations for targeted therapies


              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Selection of patients for immunotherapy

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Therapeutic decision-making
       </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Detection of resistance mechanisms
</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Prognostic and predictive biomarker assessment
</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Eligibility for clinical trials
</p>
            </li>

          

          </ul>
        </div>

        



      

      </div>
    </div>
    <OncologyGenomicInfo/>
    </>
  );
};

export default ComprehensiveGenomicSection; 