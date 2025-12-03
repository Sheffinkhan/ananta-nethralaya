// src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import DrAshwinPhoto from "../assets/images/DrAshwinCSomarajan.jpg";
import logo from "../assets/images/ANlogo-removebg-preview.png";
import { CataractIcon } from "../constants/icons";
import { DiabeticRetinaIcon } from "../constants/icons";

import {
  ChevronRight,
  ChevronDown,
  Award,
  Eye,
  Cpu,
  Smile,
  Users,
} from "lucide-react";

import { Link } from "../utils/Router";

// Import your premium medical icons
import { RetinaIcon, GlaucomaIcon, RefractiveIcon } from "../constants/icons";

// Bring clinic content
import CLINIC_CONTENT from "../constants/content";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollDown = () => {
    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Stats Cards
  const stats = [
    { icon: Award, value: "8+", label: "Years Experience" },
    { icon: Eye, value: "10+", label: "Specialized Services" },
    { icon: Cpu, value: "Cutting-Edge", label: "Technology" },
    { icon: Smile, value: "High", label: "Patient Satisfaction" },
  ];

  // HomePage FEATURES section — now with new premium icons
  const serviceIcons = [
    CataractIcon, // Cataract
    RetinaIcon, // Retina
    Users,
    DiabeticRetinaIcon, // Diabetic Retina
  ];

  const services = CLINIC_CONTENT.services.slice(0, 4).map((service, idx) => ({
    ...service,
    iconComponent: serviceIcons[idx],
  }));

  return (
    <>
      <SEO
        title="Ananta Nethralaya - Premium Eye Care Center | Muvattupuzha, Kerala"
        description="Expert eye care services in Muvattupuzha, Kerala. Specializing in premium cataract surgery, retina surgery, diabetic retinopathy care, and comprehensive eye treatments."
        keywords="eye care Kerala, cataract surgery Muvattupuzha, retina surgery Kerala, ophthalmology Kerala"
        ogImage="ANlogo.jpg"
        canonical="https://www.anantanethralaya.org/"
      />

      {/* ============================ HERO ============================ */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-400 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Logo with Professional Animations */}
            <div
              className="mb-8 flex justify-center"
              style={{
                animation: `logoFloat 3s ease-in-out infinite, fadeInDown 0.8s ease-out`,
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-teal-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white rounded-full p-2 shadow-2xl hover:shadow-amber-400/50 transition-all duration-500 hover:scale-110 group">
                  <img
                    src={logo}
                    alt="Ananta Nethralaya Logo"
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
                  />
                </div>
              </div>
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ animation: `fadeInUp 1s ease-out 0.2s both` }}
            >
              {CLINIC_CONTENT.about.title.split(",")[0]},
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                {CLINIC_CONTENT.about.title.split(",")[1]}
              </span>
            </h1>

            <p
              className="text-xl text-gray-200 mb-8 leading-relaxed"
              style={{ animation: `fadeInUp 1s ease-out 0.4s both` }}
            >
              {CLINIC_CONTENT.about.description}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              style={{ animation: `fadeInUp 1s ease-out 0.6s both` }}
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl font-semibold text-lg flex items-center justify-center group"
              >
                Book Appointment
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="bg-white text-teal-700 px-8 py-4 rounded-full hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
          onClick={handleScrollDown}
        >
          <ChevronDown className="text-white" size={32} />
        </div>
      </section>

      {/* ============================ STATS ============================ */}
      <section className="stats-section py-20 bg-gradient-to-r from-teal-700 to-teal-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={idx}
                  className="text-center group"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent
                      className="text-amber-400 mx-auto"
                      size={40}
                    />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-100 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ SERVICES ============================ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-700 to-teal-900 bg-clip-text text-transparent mb-4">
              Our Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive eye care solutions with advanced technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.iconComponent;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-teal-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer border border-teal-100 hover:border-amber-300"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${idx * 0.15}s both`,
                  }}
                >
                  <div className="mb-4 bg-gradient-to-br from-teal-100 to-amber-100 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <IconComponent
                      className="text-teal-700 group-hover:text-amber-600 transition-colors duration-300"
                      size={28}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-teal-700 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-gradient-to-r from-teal-700 to-teal-800 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg font-semibold"
            >
              View All Services
              <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================ DOCTOR SECTION ============================ */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0 items-center">
              {/* Text Content - Takes 3 columns */}
              <div className="md:col-span-3 text-white p-8 md:p-12 lg:p-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Meet Dr. Ashwin Cherusseril Somarajan
                </h2>
                <p className="text-amber-300 mb-2 leading-relaxed font-semibold text-base lg:text-lg">
                  MBBS, DNB Ophthalmology (Sankara Nethralaya), MNAMS, FVRS,
                  FAICO, MRCS (Glasgow)
                </p>
                <p className="text-gray-200 mb-2 leading-relaxed text-sm lg:text-base font-medium">
                  Consultant Retina & Cataract Surgeon
                </p>
                <p className="text-gray-200 mb-6 leading-relaxed text-sm lg:text-base">
                  Founder & Medical Director - Ananta Nethralaya
                </p>
                <Link
                  to="/doctors"
                  className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
                >
                  Learn More <ChevronRight className="ml-2" />
                </Link>
              </div>

              {/* Doctor Image - Takes 2 columns */}
              <div className="md:col-span-2 h-full">
                <div className="relative h-full min-h-[400px] md:min-h-[450px] group overflow-hidden">
                  <img
                    src={DrAshwinPhoto}
                    alt="Dr. Ashwin Cherusseril Somarajan - Consultant Vitreo-Retinal & Cataract Surgeon"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-teal-900/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ CTA SECTION ============================ */}
      <section className="py-20 bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to See Clearly?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience world-class eye care
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl font-semibold text-lg"
          >
            Book Your Appointment <ChevronRight className="ml-2" />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </>
  );
};

export default HomePage;
