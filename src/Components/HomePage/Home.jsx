import HeroSection from "./HeroSection";
import TrustBanner from "./TrustBanner";
import ServicesOverview from "./ServicesOverview";
import BookingCTA from "./BookingCTA";
import { Link } from "react-router-dom";
// import { ArrowRight, Microscope, Shield, HeartPulse } from "lucide-react";
// import Health from "../components/Health";
import Nationwide from "./Nationwide";
import Blog from "./Blog";
// import OncologySection from "../components/Oncology";
import Repro from "./Repro";
import FAQ from "./FAQ";
import FoundationSection from "../FoundationSection";
import { FaPhoneAlt } from "react-icons/fa";

const Home = () => (
  <>
   

    {/* ✅ HERO SECTION */}
    <div className="pt-[36px]">
      <HeroSection />
    </div>

    {/* <TrustBanner /> */}
    <FoundationSection />

    <section
      className="w-full py-12 px-4 md:px-10 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827997/vite-project/c0mcnqdruhqlbeg9ahxi.svg')",
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* IMAGE */}
        <div className="order-2 md:order-1">
          <img
            src="/assets/mdoctor.svg"
            alt="section"
            className="w-full h-auto"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-4 order-1 md:order-2">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#424040]">
            Why Genomics?
          </h2>

          <p className="text-[#424040] text-[16px] md:text-[18px] font-medium leading-relaxed">
            <strong>Genomics</strong> is the cornerstone of precision medicine,
            moving diagnostics from reactive treatment to proactive prevention.
            By analyzing an individual’s unique{" "}
            <strong>genetic architecture</strong>
            we can identify molecular markers that traditional pathology often
            overlooks.
          </p>

          <p className="mt-2 text-[#424040] text-[16px] md:text-[18px] font-medium leading-relaxed">
            This data-driven approach allows for the
            <strong> detection of hereditary predispositions </strong>, the
            diagnosis of complex rare diseases, and the optimization of
            therapeutic interventions based on an individual's specific
            biological makeup.
          </p>

          {/* BUTTON */}
          <Link to={"/about"}>
            <button className="cursor-pointer mt-6 w-max bg-gradient-to-r from-[#05AF79] to-[#0ECE91] text-white text-base md:text-lg px-5 md:px-6 py-2 md:py-3 rounded-lg hover:opacity-90 transition">
              KNOW MORE ABOUT MDRC GENOMICS
            </button>
          </Link>
        </div>
      </div>
    </section>

    <ServicesOverview />

    <Repro />

    {/* <OncologySection /> */}

    {/* <Health /> */}

    <Nationwide />

    <Blog />

    <BookingCTA />

    <FAQ />

    {/* MEDIA SECTION */}
    <section className="py-16 bg-[#F0FBFF] px-6">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-[#005C96] font-bold text-[32px]">
          Media & Gallery
        </h2>

        <p className="text-[#424040] text-[20px] font-medium">
          Showcasing Care, Compassion and Clinical Excellence
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-[180px] lg:h-[380px] rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827967/vite-project/ms4y2uifdn8lesorqe1t.svg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="h-[180px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827889/vite-project/l9cbqqbsyvrcm38olewl.svg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="h-[180px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827885/vite-project/cjhj8jn5xk3vxxfykq81.svg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="h-[180px] lg:h-[380px] rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827883/vite-project/rkor9gmxcdp8kbu98ksl.svg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  </>
);

export default Home;