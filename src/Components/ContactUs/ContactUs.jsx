import React from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SimpleForm from "../SimpleForm";

const locations = [
  {
    title: "Modern Diagnostic & Research Centre, Gurugram",
    address:
      "363-364/4, Sector-12, New Railway Road, Gurugram - 122001 Haryana, India",
    phone1: "01246712000",
    phone2: "01246713000",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Sector-40, Gurugram",
    address: "1057P, Sector - 40, Gurugram, Haryana - 122002",
    phone1: "01246713000",
    phone2: "01246712000",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Bhiwadi",
    address:
      "S.S Hospital, OCF-2, Bhagat Singh Colony, Bhiwadi, Rajasthan 301019",
    phone1: "08287513174",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Yamunanagar, Haryana",
    address:
      "No 25C/L, Bend Box Building, near NATHU SWEETS, Model Town, Yamuna Nagar, Haryana 135106",
    phone1: "08368952737",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Srinagar",
    address:
      "1st Floor, Hotel New Al Humza Building Iqbal Market, Karan Nagar, Srinagar - 190010",
    phone1: "09599815370",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Kurukshetra",
    address:
      "Ground Floor, Red Rd, near Sharda Nand Chowk, Kurukshetra, Haryana 136118",
    phone1: "08368944712",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Bareilly",
    address:
      "Emerald Tower, Pilibhit Bypass Rd, Chhoti Vihar, Bareilly, UP 243006",
    phone1: "08287513173",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Guwahati",
    address:
      "2nd Floor, PB Chaudhary Mansion, Ulubari, Guwahati, Assam 781007",
    phone1: "08287513173",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Panipat, Haryana",
    address:
      "Shop no - 75, opp. Manisha Hospital, Ram Nagar, Tehsil Camp, Panipat, Haryana 132103",
    phone1: "08287513175",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Karnal, Haryana",
    address:
      "446/F, opp. Kalpana Chawla Govt. Medical College, near Sai Mandir, Karnal, Haryana 132001",
    phone1: "09599815373",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Kolkata",
    address:
      "F119/60, 3 Ambika Mukherjee Road, Kolkata, West Bengal 700056",
    phone1: "8287513179",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Jaipur",
    address:
      "BL tower, S-268, Ground Floor, Mahaveer Nagar 2, Durgapura, Jaipur, Rajasthan 302018",
    phone1: "8287513179",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Indore",
    address:
      "R9, Ratna Lok Colony, Near Apollo Premium Centre Scheme No-53, Vijay Nagar, Indore",
    phone1: "9599815372",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Jammu",
    address:
      "JPDA Complex, Old Janipur, Jammu, Jammu and Kashmir 180007",
    phone1: "08287513177",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Varanasi",
    address:
      "Shiv Complex, Opposite Simaya Mall, Sunderpur, Varanasi - 221005",
    phone1: "9599815369",
    phone2: "9721322322",
    email: "info@mdrcindia.com",
  },
];

function ContactUs() {
  return (
    <div className="font-roboto">

      {/* BANNER */}
      <section className="relative min-h-[220px] md:min-h-[420px] lg:pt-32">
        <img
          src="/images/contact-banner.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#005E91]/90 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-2 text-base md:text-lg">Home / Contact Us</p>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-8 px-4 lg:py-16 lg:px-8 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {/* LEFT - LOCATIONS */}
          <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
            {locations.map((loc, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">

                <h3 className="text-[#005C96] font-semibold text-lg mb-3">
                  {loc.title}
                </h3>

                <p className="flex gap-2 text-gray-600 mb-2 text-[15px]">
                  <MapPin size={18} /> {loc.address}
                </p>

                <a href={`tel:${loc.phone1}`} className="flex gap-2 text-gray-700 mb-1 hover:text-[#0ECE91]">
                  <Phone size={18} /> {loc.phone1}
                </a>

                {loc.phone2 && (
                  <a href={`tel:${loc.phone2}`} className="flex gap-2 text-gray-700 mb-1 hover:text-[#0ECE91]">
                    <Phone size={18} /> {loc.phone2}
                  </a>
                )}

                <a href={`mailto:${loc.email}`} className="flex gap-2 text-gray-700 mb-2 hover:text-[#0ECE91]">
                  <Mail size={18} /> {loc.email}
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#005C96] text-sm hover:underline"
                >
                  View on map <ArrowUpRight size={15} />
                </a>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div>

            {/* CONTACT CARD */}
            <div className="bg-white rounded-xl shadow-lg p-6">

              <h3 className="text-xl font-semibold text-[#005C96] mb-5">
                Get in Touch
              </h3>

              <div className="flex gap-2 mb-3">
                <Phone size={18} />
                <span>01246712000 / 01246713000</span>
              </div>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 mb-2 hover:text-[#25D366]"
              >
                <FaWhatsapp size={18} />
                +91 9876543210
              </a>

              <a
                href="mailto:info@mdrcindia.com"
                className="flex gap-2 mb-4 hover:text-[#0ECE91]"
              >
                <Mail size={18} /> info@mdrcindia.com
              </a>

              <button className="w-full bg-gradient-to-r from-[#05AF79] to-[#0ECE91] text-white py-2 rounded-md hover:opacity-90 transition">
                Book Appointment
              </button>
            </div>

            {/* FORM BELOW */}
            <div className="mt-6">
              <SimpleForm />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

export default ContactUs;