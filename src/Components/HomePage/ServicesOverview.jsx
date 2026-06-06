import { Link } from "react-router-dom";
import { ArrowRight, Bug, Baby, Microscope, Dna, FlaskConical, Pill } from "lucide-react";

const services = [
  {
    icon: Pill,
    title: "Longevity Panels (TMS)",
    description: "LC-MS/MS (Liquid Chromatography–Tandem Mass Spectrometry) has become one of the most powerful analytical tools.",
    path: "/tandem-mass-spectrometry-tms",
  },
  {
    icon: Bug,
    title: "Infectious Disease",
    description: "Molecular diagnostics for rapid and accurate pathogen detection using advanced PCR and NGS technologies.",
    path: "/infectious-disease",
  },
  {
    icon: Baby,
    title: "Reproductive Health & Pregnancy",
    description: "Comprehensive genetic screening for family planning including NIPT, carrier screening, and PGT.",
    path: "/reproductive-health-pregnancy",
  },
  {
    icon: Microscope,
    title: "Cyto Genetic & FISH",
    description: "Chromosome analysis and fluorescence in situ hybridization for detecting structural abnormalities.",
    path: "/cyto-genetic-and-fish",
  },
  {
    icon: Dna,
    title: "Rare NGC Panel",
    description: "Targeted next-generation sequencing panels for identifying rare and inherited genetic disorders.",
    path: "/rare-nGS-panel",
  },
  {
    icon: FlaskConical,
    title: "Whole Exome & Genome",
    description: "Comprehensive sequencing of the entire coding or full genome for undiagnosed genetic conditions.",
    path: "/whole-exome-and-genome-Sequencing",
  },
 
  {
    icon: Pill,
    title: "Pharmacogenmics",
    description: "Genetic testing to guide personalized medication choices, dosing, and reduce adverse drug reactions.",
    path: "/pharmacogenomics",
  },
   {
    icon: Pill,
    title: "Oncology Genomics",
    description: "MDRC Genomics delivers advanced molecular oncology services focused on the identification",
    path: "/oncologygenomics",
  },
  {
    icon: Pill,
    title: "Advanced Sequencing",
    description: "Whole Genome Sequencing, Whole Exome Sequencing (WES).",
    path: "/advanced-Sequencing",
  },
  
];

const ServicesOverview = () => (
  <section id="services" className="bg-[#F5F7F9] py-16 lg:py-16">
    <div className="container mx-auto px-4">
      <div className="text-center  mx-auto mb-12">
        <span className="text-[#15AEE5] font-medium ">Our Expertise</span>
        <h2 className="font-heading text-[32px] font-bold  mt-1 mb-1">
        Specialised Genetic and Molecular Services
        </h2>
        <p className="text-[20px] text-[#424040] font-regular">
          From prenatal screening to rare disease diagnosis, our laboratory delivers clinically validated genomic insights.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
  {services.map((service, i) => {
    const isLast = i === services.length ;
    return (
      <Link
        key={service.path}
        to={service.path}
        className={`group bg-card rounded-xl p-6 lg:p-8 
       shadow-[0_0_10px_#7e7e7e] transition-all duration-300 animate-fade-in-up
        ${isLast ? "sm:col-span-2 lg:col-span-2" : ""}`}
        style={{ animationDelay: `${i * 80}ms` }}
      >
        <div
  className="w-[56px] h-[56px] rounded-lg flex items-center justify-center mb-5"
  style={{ background: "linear-gradient(to right, #15AEE5, #0C607F)" }}
>
  <service.icon className="text-white" />
</div>

        <h3 className="font-modium text-[20px]  mb-2">
          {service.title}
        </h3>

        <p className=" text-[#727070] text-[16px]  mb-4">
          {service.description}
        </p>

        <span className="inline-flex items-center gap-1 text-[16px] font-medium text-[#15AEE5] group-hover:gap-2 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    );
  })}
</div>
    </div>
  </section>
);

export default ServicesOverview;
