"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
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
    // Handle form submission logic here
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <>
      <SEO
        title="Contact Us - Book Appointment | Ananta Nethralaya Eye Care"
        description="Contact Ananta Nethralaya for eye care appointments in Muvattupuzha, Kerala. Call +91 8075649788 or book online. Located at MCS Hospital, Ernakulam. WhatsApp booking available."
        keywords="book eye appointment Kerala, contact eye doctor, Ananta Nethralaya contact, MCS Hospital Muvattupuzha, eye care booking, WhatsApp appointment, ophthalmology consultation"
        canonical="https://www.anantanethralaya.org/contact"
      />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-teal-700 to-teal-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400 rounded-full animate-float"></div>
            <div
              className="absolute bottom-20 right-20 w-40 h-40 bg-teal-300 rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-300 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">Get In Touch</h1>
            <p
              className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Visit us or schedule an appointment today
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl shadow-2xl p-8 hover-lift stagger-item">
                <h3 className="text-3xl font-bold text-teal-700 mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 hover-scale transition-all duration-300">
                    <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                      <MapPin className="text-amber-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">Location</h4>
                      <p className="text-gray-600 leading-relaxed">
                        MCS Hospital, Muvattupuzha
                        <br />
                        Ernakulam District
                        <br />
                        Kerala, India - 686661
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 hover-scale transition-all duration-300">
                    <div
                      className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-glow"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">Phone</h4>
                      <p className="text-gray-600">
                        <a href="tel:+918075649788" className="hover:text-teal-700 transition-colors">
                          +91 8075649788
                        </a>
                        <br />
                        <a href="tel:+917025195638" className="hover:text-teal-700 transition-colors">
                          +91 7025195638
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 hover-scale transition-all duration-300">
                    <div
                      className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-glow"
                      style={{ animationDelay: "1s" }}
                    >
                      <Clock className="text-amber-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">Working Hours</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                        <br />
                        Sunday: By Appointment Only
                        <br />
                        <span className="text-teal-700 font-semibold">Emergency: 24/7 Available</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 hover-scale transition-all duration-300">
                    <div
                      className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-glow"
                      style={{ animationDelay: "1.5s" }}
                    >
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:info@anantanethralaya.org" className="hover:text-teal-700 transition-colors">
                          info@anantanethralaya.org
                        </a>
                        <br />
                        <a
                          href="mailto:appointments@anantanethralaya.org"
                          className="hover:text-teal-700 transition-colors"
                        >
                          appointments@anantanethralaya.org
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pt-4 border-t-2 border-teal-200 hover-scale transition-all duration-300">
                    <div
                      className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-glow"
                      style={{ animationDelay: "2s" }}
                    >
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

              <div
                className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-teal-100 hover-lift stagger-item"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-3xl font-bold text-teal-700 mb-8">Book Appointment</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
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

                  <div className="animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
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

                  <div className="animate-slide-in-left" style={{ animationDelay: "0.5s" }}>
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

                  <div className="grid grid-cols-2 gap-4 animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all hover:border-teal-400 focus:scale-105"
                      ></select>
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

                  <div className="animate-slide-in-left" style={{ animationDelay: "0.7s" }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all hover:border-teal-400 focus:scale-105"
                      required
                    ></select>
                  </div>

                  <div className="animate-slide-in-left" style={{ animationDelay: "0.8s" }}>
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

                  <div className="animate-slide-in-left" style={{ animationDelay: "0.9s" }}>
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

                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 transition-all font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center group animate-scale-in"
                    style={{ animationDelay: "1s" }}
                  >
                    <MessageCircle
                      className="mr-2 group-hover:scale-110 group-hover:rotate-12 transition-transform"
                      size={24}
                    />
                    Book via WhatsApp
                  </button>

                  <p className="text-sm text-gray-500 text-center animate-fade-in" style={{ animationDelay: "1.1s" }}>
                    <span className="text-red-500">*</span> Required fields. You'll be redirected to WhatsApp to confirm
                    your appointment.
                  </p>
                </form>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mt-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-3xl font-bold text-teal-700 mb-8 text-center">Find Us</h3>
              <div className="bg-gradient-to-br from-teal-100 to-amber-100 rounded-2xl overflow-hidden shadow-2xl h-96 flex items-center justify-center hover-lift">
                <div className="text-center p-8">
                  <MapPin className="text-teal-700 mx-auto mb-4 animate-float" size={64} />
                  <p className="text-2xl font-bold text-teal-700 mb-2">MCS Hospital, Muvattupuzha</p>
                  <p className="text-gray-600">Ernakulam, Kerala</p>
                  <p className="text-sm text-gray-500 mt-4">Google Maps integration coming soon</p>
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
