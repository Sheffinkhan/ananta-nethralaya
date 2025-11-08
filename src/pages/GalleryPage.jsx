// src/pages/GalleryPage.jsx
"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import SEO from "../components/SEO"

const GalleryPage = () => {
  const [hoveredId, setHoveredId] = useState(null)

  const images = [
    { id: 1, title: "Modern Consultation Room", category: "Facility" },
    { id: 2, title: "Advanced Surgical Equipment", category: "Technology" },
    { id: 3, title: "Patient Waiting Area", category: "Facility" },
    { id: 4, title: "Eye Testing Unit", category: "Equipment" },
    { id: 5, title: "Surgery Theater", category: "Facility" },
    { id: 6, title: "Reception Area", category: "Facility" },
    { id: 7, title: "Diagnostic Equipment", category: "Technology" },
    { id: 8, title: "Patient Care Room", category: "Facility" },
  ]

  return (
    <>
      <SEO
        title="Gallery - Our Facility & Equipment | Ananta Nethralaya"
        description="Explore Ananta Nethralaya's state-of-the-art eye care facility in Muvattupuzha. View our modern consultation rooms, advanced surgical equipment, and patient-friendly infrastructure."
        keywords="eye hospital gallery, modern eye clinic, surgical equipment, eye care facility Kerala, ophthalmology center, medical equipment, MCS Hospital Muvattupuzha"
        canonical="https://www.anantanethralaya.org/gallery"
      />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Facility</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              State-of-the-art infrastructure and modern equipment for superior eye care
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, idx) => (
                <div
                  key={image.id}
                  className="relative h-72 bg-gradient-to-br from-teal-100 to-amber-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-teal-200 hover:border-amber-400"
                  onMouseEnter={() => setHoveredId(image.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-teal-700 to-teal-900 transition-all duration-500 flex items-center justify-center ${
                      hoveredId === image.id ? "opacity-95" : "opacity-0"
                    }`}
                  >
                    <div
                      className="text-center text-white p-6 transform transition-transform duration-500"
                      style={{
                        transform: hoveredId === image.id ? "scale(1)" : "scale(0.8)",
                      }}
                    >
                      <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                      <p className="text-amber-400 text-lg font-semibold">{image.category}</p>
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform ${
                      hoveredId === image.id ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
                    }`}
                  >
                    <p className="text-sm font-semibold text-teal-700">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-600 mb-6 text-lg">Want to visit our facility?</p>
              <a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-teal-700 to-teal-800 text-white px-10 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-lg"
              >
                Schedule a Visit
                <ChevronRight className="ml-2" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default GalleryPage
