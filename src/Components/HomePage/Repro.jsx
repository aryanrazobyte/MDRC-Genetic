import React, { useRef, useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "KAROTYPING",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827820/vite-project/qkdwtp5jzkfigoccsbwt.jpg",
    path: "/service/bloodculturekaryotyping",
  },
  {
    title: "CARRIER SCREENING",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828008/vite-project/yv8hyanavztk9j6k0snd.svg",
    path: "/services/carrier-screening",
  },
  {
    title: "NIPT",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827820/vite-project/qkdwtp5jzkfigoccsbwt.jpg",
    path: "/reproductive-health-pregnancy/services/nipt",
  },
  {
    title: "GENETIC TESTING",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828008/vite-project/yv8hyanavztk9j6k0snd.svg",
    path: "#",
  },
  {
    title: "GENOTYPING TESTS",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827824/vite-project/b3mwmwygppili0vqesfw.jpg",
    path: "#",
  },
  {
    title: "DRUG RESISTANCE TESTING",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827824/vite-project/b3mwmwygppili0vqesfw.jpg",
    path: "#",
  },
  {
    title: "CYTOGENETIC TESTS",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827826/vite-project/pjqg8lwymfisjcjex5ad.jpg",
    path: "#",
  },
  {
    title: "MICROARRAY",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827826/vite-project/pjqg8lwymfisjcjex5ad.jpg",
    path: "#",
  },
];

// ✅ Single card with its own image loaded state
const ServiceCard = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition h-full">
      {/* Header */}
      <div className="bg-gray-100 px-4 py-3 flex items-center justify-center font-semibold text-[#005C96] text-sm md:text-lg text-center min-h-[52px]">
        <span>{card.title}</span>
      </div>

      {/* Image area */}
      <div className="relative h-[180px] md:h-[240px] overflow-hidden bg-white flex items-center justify-center">

        {/* Skeleton loader */}
        {!loaded && !error && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
        )}

        {/* Error fallback */}
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-xs text-gray-400">{card.title}</span>
          </div>
        )}

        <img
          src={card.img}
          alt={card.title}
          onLoad={() => setLoaded(true)}
          onError={() => { setError(true); setLoaded(true); }}
          className={`w-full h-full object-contain p-2 bg-white transition-opacity duration-500 ${
            loaded && !error ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

        {/* Know More Button */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-max">
          <Link
            to={card.path}
            className="bg-white text-[#005C96] px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-lg border border-gray-200 hover:bg-[#005C96] hover:text-white transition-all duration-300 inline-block whitespace-nowrap"
          >
            Know More →
          </Link>
        </div>
      </div>
    </div>
  );
};

const Repro = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const getScrollStep = () => {
    const slider = sliderRef.current;
    if (!slider?.firstElementChild) return 276;
    const gap = window.innerWidth >= 768 ? 24 : 16;
    return slider.firstElementChild.offsetWidth + gap;
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const step = getScrollStep();
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft >= maxScroll - 10) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  // Auto-rotate carousel on all screen sizes
  useEffect(() => {
    if (isPaused) return;

    const autoScroll = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const gap = window.innerWidth >= 768 ? 24 : 16;
      const step = (slider.firstElementChild?.offsetWidth ?? 260) + gap;
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 10) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [isPaused]);

  return (
    <>
      {/* 🔹 Header */}
      <div className="text-center pt-6 pb-5 bg-gradient-to-r from-[#0C759A] to-[#005E91] text-white">
        <h2 className="text-xl md:text-[25px] font-semibold px-4">
          High-End Testing
        </h2>
        <p className="text-[15px] md:text-[20px] opacity-90 px-4">
          Our comprehensive range of next-generation genetic tests.
        </p>
      </div>

      {/* 🔹 Section */}
      <div
        className="py-8 md:py-12 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827793/vite-project/jn3lx6mi0bepp3pvc0u6.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">

          {/* 🔹 Mobile Arrows row */}
          <div className="flex md:hidden justify-between items-center mb-3 px-1">
            <button
              onClick={scrollLeft}
              className="bg-green-500 p-2 rounded-full shadow-md active:scale-95 transition"
            >
              <HiChevronLeft size={20} className="text-white" />
            </button>
            <span className="text-xs text-gray-400 font-medium tracking-wide">
              Swipe to explore
            </span>
            <button
              onClick={scrollRight}
              className="bg-green-500 p-2 rounded-full shadow-md active:scale-95 transition"
            >
              <HiChevronRight size={20} className="text-white" />
            </button>
          </div>

          <div className="relative">

            {/* 🔹 Left Arrow — desktop only */}
            <button
              onClick={scrollLeft}
              className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <HiChevronLeft size={22} className="text-white" />
            </button>

            {/* 🔹 Cards — KEY FIX: w-[75vw] on mobile instead of min-w */}
            <div
              ref={sliderRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-2"
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  // ✅ Fixed pixel width — not relative to parent
                  style={{ width: "260px", minWidth: "260px" }}
                  className="md:min-w-[320px] md:w-[320px] lg:min-w-[350px] lg:w-[350px] flex-shrink-0 snap-start"
                >
                  <ServiceCard card={card} />
                </div>
              ))}
            </div>

            {/* 🔹 Right Arrow — desktop only */}
            <button
              onClick={scrollRight}
              className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <HiChevronRight size={22} className="text-white" />
            </button>

          </div>
        </div>
      </div>

      {/* 🔹 Bottom Strip */}
      <div className="bg-[#005E91] h-2" />
    </>
  );
};

export default Repro;