import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock } from "lucide-react"
import { Link } from "../utils/Router"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden">
                <img
                  src="/Logo2.png"
                  alt="Ananta Nethralaya Logo"
                  className="w-full h-full object-cover group-hover:rotate-12 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">ANANTA NETHRALAYA</h3>
                <p className="text-xs text-gray-300">Your Vision, Our Priority</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading super specialty eye care center dedicated to preserving and restoring vision with compassion and
              excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">Quick Links</h4>
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
            <h4 className="text-lg font-bold mb-4 text-amber-400">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Premium Cataract Surgery</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Retina Surgery</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Diabetic Retinopathy</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Glaucoma Management</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Corneal Treatments</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">Contact Us</h4>
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
                <div className="text-gray-300">
                  <a href="tel:+918075649788" className="hover:text-amber-400 transition-colors block">
                    +91 8075649788
                  </a>
                  <a href="tel:+917025195638" className="hover:text-amber-400 transition-colors block">
                    +91 7025195638
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <Clock
                  className="text-amber-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={18}
                />
                <div className="text-gray-300">
                  <div>Mon - Sat: 9:00 AM - 6:00 PM</div>
                  <div>Sunday: By Appointment</div>
                  <div className="text-amber-400 font-semibold">Emergency: 24/7</div>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <Mail
                  className="text-amber-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={18}
                />
                <div className="text-gray-300">
                  <a href="mailto:info@anantanethralaya.org" className="hover:text-amber-400 transition-colors block">
                    info@anantanethralaya.org
                  </a>
                  <a
                    href="mailto:appointments@anantanethralaya.org"
                    className="hover:text-amber-400 transition-colors block"
                  >
                    appointments@anantanethralaya.org
                  </a>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-amber-400">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Ananta Nethralaya. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;