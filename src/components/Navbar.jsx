"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "../utils/Router"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState("")

  // Function to get current path from URL
  const getCurrentPath = () => {
    const hash = window.location.hash
    if (hash) {
      return hash.slice(1) // Remove the # and return
    }
    return window.location.pathname
  }

  // Initialize current path
  useEffect(() => {
    setCurrentPath(getCurrentPath())
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Handle hash changes
    const handleHashChange = () => {
      const newPath = getCurrentPath()
      console.log("Hash changed to:", newPath)
      setCurrentPath(newPath)
    }

    // Handle popstate (back/forward buttons)
    const handlePopState = () => {
      const newPath = getCurrentPath()
      console.log("PopState changed to:", newPath)
      setCurrentPath(newPath)
    }

    // Handle custom route change events
    const handleRouteChange = (e) => {
      console.log("RouteChange event:", e.detail?.path)
      if (e.detail?.path) {
        setCurrentPath(e.detail.path)
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    window.addEventListener("popstate", handlePopState)
    window.addEventListener("routechange", handleRouteChange)

    // Also listen for click events on the document to catch Link clicks
    const handleClick = () => {
      setTimeout(() => {
        const newPath = getCurrentPath()
        console.log("Click detected, path:", newPath)
        setCurrentPath(newPath)
      }, 10)
    }

    document.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      window.removeEventListener("popstate", handlePopState)
      window.removeEventListener("routechange", handleRouteChange)
      document.removeEventListener("click", handleClick)
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

  const isActive = (path) => {
    console.log("Checking active - Link path:", path, "Current path:", currentPath)
    
    // Exact match for home
    if (path === "/" && currentPath === "/") return true
    
    // For other paths, check if current path matches exactly
    if (path !== "/" && currentPath === path) return true
    
    return false
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-2xl py-3" : "bg-white/95 backdrop-blur-md shadow-lg py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden">
            <img
              src="/Logo2.png"
              alt="Ananta Nethralaya Logo"
              className="w-full h-full object-cover group-hover:rotate-12 transition-transform duration-300"
            />
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
            const active = isActive(link.path)
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => {
                  setTimeout(() => setCurrentPath(link.path), 10)
                }}
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
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setTimeout(() => setCurrentPath(link.path), 10)
                  }}
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