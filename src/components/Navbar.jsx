"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "../utils/Router"
import Logo from "../assets/images/ANlogo-removebg-preview.png"


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState(() => {
    // Initialize with current hash path
    return window.location.hash.slice(1) || '/'
  })

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle route changes - SIMPLIFIED
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/'
      setCurrentPath(hash)
    }

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ]

  // Simplified active check
  const isActive = (path) => {
    return currentPath === path
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-2xl py-3" : "bg-white/95 backdrop-blur-md shadow-lg py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section with Brand Name */}
        <Link to="/" className="flex items-center gap-3 lg:gap-4 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full p-1 shadow-md">
            <img
                src={Logo}
              alt="Ananta Nethralaya Logo"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Brand Name - Visible on all screens */}
          <div className="flex flex-col">
            <span className="text-teal-700 font-bold text-lg md:text-xl lg:text-2xl leading-tight group-hover:text-teal-800 transition-colors">
              Ananta Nethralaya
            </span>
            <span className="text-gray-600 text-xs md:text-sm font-medium">
              Super Speciality Eye Centre
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link, idx) => {
            const active = isActive(link.path)
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                  active ? "text-teal-700 bg-teal-50 font-bold" : "text-gray-700 hover:text-teal-700"
                }`}
                style={{
                  animation: `slideInDown 0.5s ease-out ${idx * 0.1}s both`,
                }}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-600 to-amber-500 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            )
          })}
          <Link
            to="/contact"
            className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-2.5 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold ml-4"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="text-teal-700" size={24} />
          ) : (
            <Menu className="text-teal-700" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col space-y-2 p-6">
            {navLinks.map((link, idx) => {
              const active = isActive(link.path)
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                    active
                      ? "text-teal-700 bg-teal-50 font-bold border-l-4 border-teal-600"
                      : "text-gray-700 hover:text-teal-700 hover:bg-teal-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    animation: `slideInLeft 0.3s ease-out ${idx * 0.05}s both`,
                  }}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all text-center font-semibold mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar