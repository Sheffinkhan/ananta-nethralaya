"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, MessageCircle, Globe, Navigation, ExternalLink } from "lucide-react"
import SEO from "../components/SEO"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    age: "",
    service: "",
    date: "",
    message: "",
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.fullName || !formData.phone || !formData.service) {
      alert("Please fill in all required fields (Full Name, Phone Number, and Service)")
      return
    }

    const whatsappMessage = `*Appointment Request - Ananta Nethralaya*

*Personal Information:*
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Gender: ${formData.gender || "Not provided"}
Age: ${formData.age || "Not provided"}

*Appointment Details:*
Service: ${formData.service}
Preferred Date: ${formData.date || "Flexible"}
Message: ${formData.message || "No additional message"}

Please confirm this appointment.`

    const whatsappNumber = "917025195638"
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappURL, "_blank")
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const openInGoogleMaps = () => {
    window.open('https://maps.google.com/?q=9.992033615752066,76.58789641593297', '_blank')
  }

  const getDirections = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=9.992033615752066,76.58789641593297', '_blank')
  }

  return (
    <>
      <SEO
        title="Contact Us - Book Appointment | Ananta Nethralaya Eye Care"
        description="Contact Ananta Nethralaya for eye care appointments in Muvattupuzha, Kerala. Call +91 8075649788 or book online. Located at MCS Hospital, Muvattupuzha. WhatsApp booking available."
        keywords="book eye appointment Kerala, contact eye doctor, Ananta Nethralaya contact, MCS Hospital Muvattupuzha, eye care booking, WhatsApp appointment, ophthalmology consultation"
        canonical="https://www.anantanethralaya.org/contact"
      />

      <div className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-br from-teal-700 to-teal-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400 rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-300 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-300 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">Get In Touch</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Visit us or schedule an appointment today
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl shadow-2xl p-8 hover-lift stagger-item">
                <h3 className="text-3xl font-bold text-teal-700 mb-8">Contact Information</h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4 hover-scale transition-all duration-300">
                    <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                      <MapPin className="text-amber-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        MCS - Ananta Nethralaya, <br />
                        MCS Hospital, <br />
                        Muvattupuzha, <br />
                        Ernakulam, Kerala - 686673
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 hover-scale transition-all duration-300">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-glow" style={{ animationDelay: "0.5s" }}>
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">Contact</h4>
                      <p className="text-gray-600">
                        <a href="tel:+918075649788" className="hover:text-teal-700 transition-colors">
                          +91 8075649788
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 hover-scale transition-all duration-300">
                    <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-glow" style={{ animationDelay: "1s" }}>
                      <Mail className="text-amber-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:anantanethralaya@gmail.com" className="hover:text-teal-700 transition-colors">
                          anantanethralaya@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start space-x-4 hover-scale transition-all duration-300">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-glow" style={{ animationDelay: "1.5s" }}>
                      <Globe className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">Website</h4>
                      <p className="text-gray-600">
                        <a href="https://www.anantanethralaya.org" target="_blank" rel="noopener noreferrer" className="hover:text-teal-700 transition-colors">
                          www.anantanethralaya.org
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4 pt-4 border-t-2 border-teal-200 hover-scale transition-all duration-300">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-glow" style={{ animationDelay: "2s" }}>
                      <MessageCircle className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">WhatsApp</h4>
                      <p className="text-gray-600 mb-3">Quick appointment booking available</p>
                      <a
                        href="https://wa.me/917025195638"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 hover:scale-105 transition-all text-sm font-semibold shadow-lg hover:shadow-xl"
                      >
                        <MessageCircle className="mr-2" size={16} />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Form */}
              <div
                className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-teal-100 hover-lift stagger-item"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-3xl font-bold text-teal-700 mb-8">Book Appointment</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all hover:border-teal-400 focus:scale-105"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter 10-digit mobile number"
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all hover:border-teal-400 focus:scale-105"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all hover:border-teal-400 focus:scale-105"
                    />
                  </div>

                  {/* Gender & Age */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all hover:border-teal-400 focus:scale-105 text-black bg-white"
                      >
                        <option value="" hidden>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Age"
                        min="1"
                        max="120"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all hover:border-teal-400 focus:scale-105"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all hover:border-teal-400 focus:scale-105 text-black bg-white"
                      required
                    >
                      <option value="" hidden>Choose a Service</option>
                      <option value="Premium Cataract Surgery">Premium Cataract Surgery</option>
                      <option value="Retina & Vitreous Services">Retina & Vitreous Services</option>
                      <option value="Glaucoma Management">Glaucoma Management</option>
                      <option value="ROP Screening & Treatment">ROP Screening & Treatment</option>
                      <option value="Uvea & Inflammatory Eye Diseases">Uvea & Inflammatory Eye Diseases</option>
                      <option value="Ocular Trauma Care">Ocular Trauma Care</option>
                      <option value="Neuro-Ophthalmology">Neuro-Ophthalmology</option>
                      <option value="Dry Eye & Ocular Surface Disorders">Dry Eye & Ocular Surface Disorders</option>
                      <option value="Refractive Services (LASIK & Beyond)">Refractive Services (LASIK & Beyond)</option>
                      <option value="Comprehensive Eye Care for All Ages">Comprehensive Eye Care for All Ages</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all hover:border-teal-400 focus:scale-105"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific concerns or questions?"
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none hover:border-teal-400 focus:scale-105"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 transition-all font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center group"
                  >
                    <MessageCircle className="mr-2 group-hover:scale-110 group-hover:rotate-12 transition-transform" size={24} />
                    Book via WhatsApp
                  </button>

                  <p className="text-sm text-gray-500 text-center mt-2">
                    <span className="text-red-500">*</span> Required fields. You'll be redirected to WhatsApp to confirm your appointment.
                  </p>
                </form>
              </div>
            </div>

            {/* ENHANCED GOOGLE MAP SECTION - REPLACE YOUR OLD MAP WITH THIS */}
            <div className="max-w-6xl mx-auto mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-teal-700 mb-3">Find Us</h3>
                <p className="text-gray-600">MCS Hospital, Muvattupuzha, Kerala</p>
              </div>

              {/* Map Container with Enhanced Border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-100 hover:border-teal-300 transition-all duration-300 group">
                {/* Decorative Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-teal-500/20 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-amber-500/20 to-transparent z-10 pointer-events-none"></div>

                {/* Google Maps Iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d694.6087231162195!2d76.58789641593297!3d9.992033615752066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e77bf1f9fd5f%3A0xfb6ce3bdd67fad42!2sMCS%20Hospital%2C%20Muvattupuzha!5e0!3m2!1sen!2sin!4v1762707443342!5m2!1sen!2sin"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MCS Hospital - Ananta Nethralaya Location"
                  className="grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                ></iframe>

                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                  <button
                    onClick={openInGoogleMaps}
                    className="bg-white text-teal-700 px-4 py-2 rounded-lg shadow-lg hover:bg-teal-700 hover:text-white transition-all flex items-center gap-2 text-sm font-semibold group/btn"
                    aria-label="Open in Google Maps"
                  >
                    <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
                    <span className="hidden md:inline">Open in Maps</span>
                  </button>
                  
                  <button
                    onClick={getDirections}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2 text-sm font-semibold group/btn"
                    aria-label="Get Directions"
                  >
                    <Navigation size={16} className="group-hover/btn:rotate-45 transition-transform" />
                    <span className="hidden md:inline">Directions</span>
                  </button>
                </div>

                {/* Location Badge at Bottom */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg z-20 border border-teal-200">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-teal-600" size={20} />
                    <div>
                      <p className="text-xs font-semibold text-gray-700">MCS - Ananta Nethralaya</p>
                      <p className="text-xs text-gray-600">Inside MCS Hospital Campus</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Cards Grid Below Map */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {/* Address Card */}
                <div className="bg-gradient-to-br from-teal-50 via-teal-100 to-cyan-100 p-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl border-2 border-teal-200">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal-800 mb-1">Full Address</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        MCS Hospital, Randarkara Rd,<br/>
                        Muvattupuzha, Kerala 686673
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Card */}
                <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 p-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl border-2 border-blue-200 cursor-pointer" onClick={getDirections}>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Navigation className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-1">Easy Access</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Well-connected by road.<br/>
                        <span className="text-blue-600 font-semibold">Click for directions →</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-gradient-to-br from-amber-50 via-amber-100 to-orange-100 p-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl border-2 border-amber-200">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-800 mb-1">Need Help?</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Call us for directions<br/>
                        <a href="tel:+918075649788" className="text-amber-600 font-semibold hover:underline">
                          +91 8075649788
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Landmark Information */}
              <div className="mt-6 bg-gradient-to-r from-teal-600 to-teal-800 text-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <MapPin size={20} />
                  Nearby Landmarks
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">📍 Main Building:</p>
                    <p className="text-teal-100">Located inside MCS Hospital complex on Randarkara Road</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">🚗 Parking:</p>
                    <p className="text-teal-100">Ample parking available within hospital premises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage