import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const logo = "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778835905/logo1_xkzm1g.svg";
import SupportWidget from "../SupportWidget";

const testOptions = [
  "Gurgaon","Delhi","Noida","Lucknow","Bareilly","Varanasi","Panipat",
  "Amritsar","Jaipur","Karnal","Kurukshetra","Srinagar","Guwahati","Jammu","Kolkata"
];

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    test: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", test: "", message: "" });
  };

  return (
    <>
    <footer className="w-full text-white">

      {/* ================= BOOKING ================= */}
      <div className="bg-gradient-to-b from-[#005E91] to-[#0C759A] py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">
              Book Your Genetic Test
            </h3>
            <p className="text-lg text-[#F5F5F5]">
              Take the first step towards understanding your genetic health.
              Our expert counselors will guide you through the process.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="Your Name*"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-[#115C78] placeholder:text-gray-200 border border-gray-400 rounded-md px-4 py-3 w-full"
              />

              <input
                placeholder="Phone Number*"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="bg-[#115C78] placeholder:text-gray-200 border border-gray-400 rounded-md px-4 py-3 w-full"
              />
            </div>

            <select
              value={formData.test}
              onChange={(e) =>
                setFormData({ ...formData, test: e.target.value })
              }
              required
              className="bg-[#115C78] w-full px-4 py-3 rounded-md border border-gray-400 text-white"
            >
              <option value="" disabled>Select Your City*</option>
              {testOptions.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            <textarea
              placeholder="Message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-[#115C78] placeholder:text-gray-200 border border-gray-400 rounded-md px-4 py-3 w-full"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-[#05AF79] to-[#0ECE91] px-8 py-3 rounded-md"
            >
              Submit
            </button>

            {submitted && (
              <p className="text-green-400">Form submitted successfully!</p>
            )}
          </form>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="bg-[#004e7a] py-12">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LOGO */}
          <div>
            <img
  src={logo}
  alt="MDRC India"
className="h-32 md:h-35 mb-1 object-contain"
/>
            <p className="text-sm text-gray-200">
              Modern Diagnostic & Research Centre Limited is one of India’s
              fastest growing diagnostic chains with 1800+ collection points.
            </p>
          </div>

          {/* GENOMIC SERVICES */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Genomic Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/oncologygenomics" className="hover:text-green-300">Oncology</Link></li>
              <li><Link to="/services/infectious-Disease" className="hover:text-green-300">Infectious Disease</Link></li>
              <li><Link to="/services/pharmacogenomics" className="hover:text-green-300">Pharmacogenomics</Link></li>
              <li><Link to="/services/cyto-genetic-and-fish" className="hover:text-green-300">Cytogenetic and FISH</Link></li>
              <li><Link to="/services/advanced-Sequencing" className="hover:text-green-300">Advanced Sequencing</Link></li>
              <li><Link to="/services/rare-nGS-panel" className="hover:text-green-300">Rare Diseases NGS panel</Link></li>
              <li><Link to="/services/reproductive-health-pregnancy" className="hover:text-green-300">Reproductive Health & Pregnancy</Link></li>
              <li><Link to="/services/whole-exome-and-genome-Sequencing" className="hover:text-green-300">Whole Exome and Genome Sequencing</Link></li>
              
            </ul>
          </div>

          {/* OTHER LINKS & QUICK LINKS */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Other Links</h4>
            <ul className="space-y-2 text-sm mb-8">
              <li>
                <Link
                  to="/service/oncogeneticsdisorders"
                  className="hover:text-green-300"
                >
                  Oncogenetics
                </Link>
              </li>
            
            <li>
                <Link
                  to="/services/modern-dna-panels"
                  className="hover:text-green-300"
                >
                  Modern Dna panels
                </Link>
              </li>
              <li><Link to="/services/tandem-mass-spectrometry-tms" className="hover:text-green-300">Tandem Mass Spectrometry</Link></li>
            </ul>

            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-green-300">
                  Home
                </Link>
              </li>
               
              <li>
                <Link to="/about" className="hover:text-green-300">
                  About
                </Link>
              </li>

                <li>
                <Link to="/blogs" className="hover:text-green-300">
                  Blog
                </Link>
              </li>
              
              
              <li>
                <Link to="/contact" className="hover:text-green-300">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Reach Us</h4>

            <p className="flex gap-2 text-sm mb-2">
              <MapPin size={16} />
              Gurugram, Haryana, India
            </p>

            <p className="flex gap-2 text-sm mb-2">
              <Phone size={16} />
              01246713000, 01246712000
            </p>

            <p className="flex gap-2 text-sm mb-4">
              <Mail size={16} />
              info@mdrcindia.com
            </p>

            {/* SOCIAL */}
           <div className="flex gap-3">

  {/* Facebook */}
  <a
    href="https://www.facebook.com/MdrcIndia/?_rdr"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-[#005E91] p-3 rounded-full hover:bg-[#0ECE91] hover:text-white transition"
  >
    <FaFacebookF size={16} />
  </a>

  {/* Instagram */}
  <a
    href="https://www.youtube.com/channel/UCwZECfhGeCu8o6CvAST95CQ"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-[#005E91] p-3 rounded-full hover:bg-[#0ECE91] hover:text-white transition"
  >
    <FaYoutube size={16} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/modern-diagnostic-research-centre/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-[#005E91] p-3 rounded-full hover:bg-[#0ECE91] hover:text-white transition"
  >
    <FaLinkedinIn size={16} />
  </a>

  {/* Twitter/X */}
  <a
    href="https://x.com/mdrcindia"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-[#005E91] p-3 rounded-full hover:bg-[#0ECE91] hover:text-white transition"
  >
    <FaTwitter size={16} />
  </a>

</div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="text-center text-sm text-gray-300 mt-10 border-t border-gray-600 pt-4">
          © {new Date().getFullYear()} All Rights Reserved | MDRC India
        </div>
      </div>
    </footer>
    <SupportWidget/>
    </>
  );
};

export default Footer;
