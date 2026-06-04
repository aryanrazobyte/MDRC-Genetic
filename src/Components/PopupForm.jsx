import React, { useState, useEffect } from "react";

const testOptions = [
  "Gurgaon",
  "Delhi",
  "Noida",
  "Lucknow",
  "Bareilly",
  "Varanasi",
  "Panipat",
  "Amritsar",
  "Jaipur",
  "Karnal",
  "Kurukshetra",
  "Srinagar",
  "Guwahati",
  "Jammu",
  "Kolkata",
];

const PopupForm = ({ isOpen, onClose }) => {

useEffect(() => {
  if (isOpen || open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isOpen, open]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    test: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Background scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);

    setFormData({
      name: "",
      phone: "",
      test: "",
      message: "",
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-2xl p-6 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-3xl text-gray-700 hover:text-black"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-black mb-3">
          Book Your Genetic Test
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Enter your details below to schedule your test with a specialist.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Your Name*"
              value={formData.name}
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              type="tel"
              placeholder="Phone Number*"
              value={formData.phone}
              required
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* City */}
          <select
            value={formData.test}
            required
            onChange={(e) =>
              setFormData({ ...formData, test: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Your City*</option>

            {testOptions.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          {/* Message */}
          <textarea
            placeholder="Message..."
            value={formData.message}
            required
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-400 resize-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-[#05AF79] to-[#0ECE91] py-3 text-lg font-semibold text-white hover:opacity-90 transition"
          >
            Submit
          </button>

          {/* Success Message */}
          {submitted && (
            <p className="text-center text-green-600 font-medium">
              Form submitted successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PopupForm;