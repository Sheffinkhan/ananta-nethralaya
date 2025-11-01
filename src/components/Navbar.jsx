//src/components/Navbar.jsx
"use client"

import { useState, useEffect } from "react"
import { Eye, Menu, X } from "lucide-react"
import { Link } from "../utils/Router"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || "/")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    // Update current path when it changes
    const handleLocationChange = () => {
      setCurrentPath(window.location.hash.slice(1) || "/")
    }
    
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("hashchange", handleLocationChange)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("hashchange", handleLocationChange)
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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-2xl py-3" : "bg-white/95 backdrop-blur-md shadow-lg py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
            <Eye className="text-amber-400 group-hover:rotate-12 transition-transform duration-300" size={24} />
          </div>
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-teal-700 to-teal-900 bg-clip-text text-transparent">
              ANANTA NETHRALAYA
            </h1>
            <p className="text-xs text-gray-500 font-medium">Your Vision, Our Priority</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link, idx) => {
            const isActive = currentPath === link.path
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setCurrentPath(link.path)}
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                  isActive
                    ? "text-teal-700 bg-teal-50"
                    : "text-gray-700 hover:text-teal-700"
                }`}
                style={{
                  animation: `slideInDown 0.5s ease-out ${idx * 0.1}s both`,
                }}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-600 to-amber-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
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
        >
          {isMobileMenuOpen ? (
            <X className="text-teal-700 animate-spin" size={24} />
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
              const isActive = currentPath === link.path
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    setCurrentPath(link.path)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-teal-700 bg-teal-50 border-l-4 border-teal-600"
                      : "text-gray-700 hover:text-teal-700 hover:bg-teal-50"
                  }`}
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