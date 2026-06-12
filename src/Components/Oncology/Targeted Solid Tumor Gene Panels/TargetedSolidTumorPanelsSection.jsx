import React from "react";
import TargetedSolidTumorPanelsGenomicInfo from "./TargetedSolidTumorPanelsGenomicInfo";

const TargetedSolidTumorPanelsSection = () => {
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
                <b>Technology</b> –    Amplicon or hybrid capture–based NGS


              </p>
            </li>

         

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Gene Content</b> –   20–150+ genes (panel dependent)





              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Sequencing Depth</b> –  ≥500–1000×





              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
                <b>Variant Types</b> –  SNVs, indels, CNVs, and selected gene fusions






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
Non-Small Cell Lung Cancer (NSCLC): EGFR, ALK, ROS1, BRAF, MET, RET, NTRK, KRAS


              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Breast Cancer: BRCA1/2, PIK3CA, ERBB2

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Colorectal Cancer: KRAS, NRAS, BRAF, MSI
       </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Ovarian and Prostate Cancers
</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1 text-xl">•</span>
              <p>
Melanoma and other solid tumors
</p>
            </li>
           

          

          </ul>
        </div>

        



      

      </div>
    </div>
    <TargetedSolidTumorPanelsGenomicInfo/>
    </>
  );
};

export default TargetedSolidTumorPanelsSection; 