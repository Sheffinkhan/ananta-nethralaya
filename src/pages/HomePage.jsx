"use client"

import { useEffect, useState } from "react"
import SEO from "../components/SEO"
import { ChevronRight, ChevronDown, Users, Award, Heart, Eye } from "lucide-react"
import { Link } from "../utils/Router"
import  CLINIC_CONTENT  from "../constants/content"
const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleScrollDown = () => {
    const statsSection = document.querySelector(".stats-section")
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Patients" },
    { icon: Award, value: "8+", label: "Years Experience" },
    { icon: Heart, value: "99%", label: "Success Rate" },
    { icon: Eye, value: "6+", label: "Specialized Services" },
  ]

  const services = CLINIC_CONTENT.services.slice(0, 4)

  return (
    <>
      <SEO
        title="Ananta Nethralaya - Premium Eye Care Center | Muvattupuzha, Kerala"
        description="Expert eye care services in Muvattupuzha, Kerala. Specializing in premium cataract surgery, retina surgery, diabetic retinopathy care, and comprehensive eye treatments. Book your appointment today with Dr. Ashwin C Somarajan."
        keywords="eye care Kerala, cataract surgery Muvattupuzha, retina surgery Kerala, eye hospital Ernakulam, diabetic retinopathy treatment, ophthalmology Kerala, eye specialist Muvattupuzha, premium IOL surgery, vitrectomy Kerala, eye doctor near me"
        ogImage="/logo.png"
        canonical="https://www.anantanethralaya.org/"
      />
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
            <div
              className="mb-8 animate-fade-in"
              style={{
                animation: `fadeInDown 0.8s ease-out`,
              }}
            >
              {/* <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                Premium Eye Care Center
              </div> */}
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              style={{
                animation: `fadeInUp 1s ease-out 0.2s both`,
              }}
            >
              {CLINIC_CONTENT.about.title.split(",")[0]},
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                {CLINIC_CONTENT.about.title.split(",")[1]}
              </span>
            </h1>

            <p
              className="text-xl text-gray-200 mb-8 leading-relaxed"
              style={{
                animation: `fadeInUp 1s ease-out 0.4s both`,
              }}
            >
              {CLINIC_CONTENT.about.description}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              style={{
                animation: `fadeInUp 1s ease-out 0.6s both`,
              }}
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

        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
          onClick={handleScrollDown}
        >
          <ChevronDown className="text-white" size={32} />
        </div>
      </section>

      <section className="stats-section py-20 bg-gradient-to-r from-teal-700 to-teal-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={idx}
                  className="text-center group"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-amber-400 mx-auto" size={40} />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-100 font-medium">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

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
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-teal-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer border border-teal-100 hover:border-amber-300"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${idx * 0.15}s both`,
                }}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-teal-700 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
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

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-4">Meet {CLINIC_CONTENT.doctor.name}</h2>
                <p className="text-gray-200 mb-4 leading-relaxed font-medium">{CLINIC_CONTENT.doctor.qualifications}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{CLINIC_CONTENT.doctor.experience}</p>
                <Link
                  to="/doctors"
                  className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
                >
                  Learn More
                  <ChevronRight className="ml-2" />
                </Link>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl flex items-center justify-center shadow-2xl group hover:scale-110 transition-transform duration-300">
                  <Users className="text-white" size={120} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to See Clearly?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience world-class eye care
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl font-semibold text-lg"
          >
            Book Your Appointment
            <ChevronRight className="ml-2" />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
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
    </>
  )
}

export default HomePage
