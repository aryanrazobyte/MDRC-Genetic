import { useState } from "react";
import PopupForm from "../PopupForm";

export default function BookingCTA() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const btnStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "0.65rem 1.6rem",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    background: "rgba(255,255,255,0.22)",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.55)",
    transition: "all 0.2s ease",
    textDecoration: "none",
  };

  const handleMouseEnter = (e) => {
    if (e.currentTarget.dataset.type === "white") {
      e.currentTarget.style.background = "#f5f5f5";
      e.currentTarget.style.color = "#0F6E56";
    } else {
      e.currentTarget.style.background = "rgba(255,255,255,0.32)";
      e.currentTarget.style.color = "#fff";
    }

    e.currentTarget.style.transform = "translateY(-2px)";
  };

  const handleMouseLeave = (e) => {
    if (e.currentTarget.dataset.type === "white") {
      e.currentTarget.style.background = "#fff";
      e.currentTarget.style.color = "#0F6E56";
    } else {
      e.currentTarget.style.background = "rgba(255,255,255,0.22)";
      e.currentTarget.style.color = "#fff";
    }

    e.currentTarget.style.transform = "translateY(0)";
  };

  const handleMouseDown = (e) => {
    e.currentTarget.style.transform = "scale(0.97)";
  };

  const handleMouseUp = (e) => {
    if (e.currentTarget.dataset.type === "white") {
      e.currentTarget.style.background = "#fff";
      e.currentTarget.style.color = "#0F6E56";
    }

    e.currentTarget.style.transform = "translateY(-2px)";
  };

  return (
    <>
      <div
        style={{
          padding: "2.8rem 2rem",
          background: "#1DB980",
          borderRadius: "40px",
          textAlign: "center",
          maxWidth: "1000px",
          margin: "0 auto",
          boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: 700,
            color: "#fff",
            margin: "0 0 1rem",
            lineHeight: 1.2,
          }}
        >
          Book Your Genetic Test
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.9)",
            margin: "0 auto 2.2rem",
            maxWidth: "620px",
            lineHeight: 1.7,
          }}
        >
          Enter your information below to schedule your testing appointment.
          Our team will contact you to confirm the details.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Book button */}
          <button
            data-type="white"
            style={{
              ...btnStyle,
              background: "#fff",
              color: "#0F6E56",
              border: "none",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            }}
            onClick={() => setIsPopupOpen(true)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>

            Book Your Test
          </button>

          {/* Phone button */}
          <a
            href="tel:01246713000"
            style={btnStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>

            01246713000
          </a>
        </div>
      </div>

      {/* POPUP */}
      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}