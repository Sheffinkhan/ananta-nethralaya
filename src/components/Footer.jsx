import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";
import { Link } from "../utils/Router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About Section with Logo */}
          <div className="space-y-4 flex items-center md:items-start">
            <img
              src="Footer.JPG"
              alt="MCS Ananta Nethralaya"
              className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Doctors", path: "/doctors" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                Premium Cataract Surgery
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                Retina & Vitreous Services
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                Glaucoma Management
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                ROP Screening & Treatment
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                Uvea & Inflammatory Eye Diseases
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                Ocular Trauma Care
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                Neuro-Ophthalmology
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                Dry Eye & Ocular Surface Disorders
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                Refractive Services (LASIK & Beyond)
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                Comprehensive Eye Care for All Ages
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 group">
                <MapPin
                  className="text-amber-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={18}
                />
                <span className="text-gray-300">
                  MCS Hospital, Muvattupuzha
                  <br />
                  Ernakulam District
                  <br />
                  Kerala, India - 686661
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <Phone
                  className="text-amber-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={18}
                />
                <a
                  href="tel:+918075649788"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  +91 8075649788
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <Clock
                  className="text-amber-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={18}
                />
                <div className="text-gray-300">
                  <div>Mon - Sat: 9:00 AM - 5:00 PM</div>
                </div>
              </li>

              <li className="flex items-start space-x-3 group">
                <Mail
                  className="text-amber-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={18}
                />
                <a
                  href="mailto:anantanethralaya@gmail.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  anantanethralaya@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-amber-400">
                Connect With Us
              </h5>
              <div className="flex space-x-3">
                {/* <a
                  href="#"
                  className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a> */}
                <a
                  href="https://www.instagram.com/ananta_nethralaya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="mailto:anantanethralaya@gmail.com"
                  className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Ananta Nethralaya. All rights
              reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
