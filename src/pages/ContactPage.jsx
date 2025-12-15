// src/pages/ContactPage.jsx
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

  const [errors, setErrors] = useState({})

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/
    return phoneRegex.test(phone)
  }

  const validateEmail = (email) => {
    if (!email) return true
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateAge = (age) => {
    if (!age) return true
    const ageNum = parseInt(age)
    return ageNum >= 1 && ageNum <= 120
  }

  const validateDate = (date) => {
    if (!date) return true
    const selectedDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (selectedDate < today) return false
    if (selectedDate.getDay() === 0) return false
    
    return true
  }

  const formatDateToDDMMYYYY = (dateString) => {
    if (!dateString) return "Flexible"
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters"
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required"
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number"
    }

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email address"
    }

    if (formData.age && !validateAge(formData.age)) {
      newErrors.age = "Age must be between 1 and 120"
    }

    if (!formData.service) {
      newErrors.service = "Please select a service"
    }

    if (formData.date && !validateDate(formData.date)) {
      const selectedDate = new Date(formData.date)
      if (selectedDate.getDay() === 0) {
        newErrors.date = "We are closed on Sundays. Please select Monday to Saturday"
      } else {
        newErrors.date = "Please select a current or future date"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validateForm()) {
      const firstErrorField = Object.keys(errors)[0]
      const errorElement = document.getElementsByName(firstErrorField)[0]
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        errorElement.focus()
      }
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
Preferred Date: ${formatDateToDDMMYYYY(formData.date)}
Message: ${formData.message || "No additional message"}

Please confirm this appointment.`

    const whatsappNumber = "918075649788"
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappURL, "_blank")
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }

    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10)
      setFormData({ ...formData, [name]: numericValue })
      return
    }

    if (name === 'age') {
      const numericValue = value.replace(/\D/g, '')
      if (numericValue === '' || (parseInt(numericValue) >= 1 && parseInt(numericValue) <= 120)) {
        setFormData({ ...formData, [name]: numericValue })
      }
      return
    }

    setFormData({ ...formData, [name]: value })
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

      <div className="pt-16 sm:pt-20">
        {/* Header */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-teal-700 to-teal-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-amber-400 rounded-full animate-float"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-28 sm:w-40 h-28 sm:h-40 bg-teal-300 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-4">
              Visit us or schedule an appointment today
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-6 sm:mb-8">Contact Information</h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-amber-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Address</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        MCS - Ananta Nethralaya, MCS Hospital,<br />
                        Muvattupuzha, Ernakulam, Kerala - 686661
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Contact</h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        <a href="tel:+918075649788" className="hover:text-teal-700 transition-colors">
                          +91 8075649788
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-amber-400" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Email</h4>
                      <p className="text-xs sm:text-sm text-gray-600 break-words">
                        <a href="mailto:anantanethralaya@gmail.com" className="hover:text-teal-700 transition-colors">
                          anantanethralaya@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 pt-4 border-t-2 border-teal-200">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">WhatsApp</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">Quick appointment booking</p>
                      <a
                        href="https://wa.me/918075649788"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-green-600 hover:scale-105 transition-all text-xs sm:text-sm font-semibold shadow-lg"
                      >
                        <MessageCircle className="mr-1 sm:mr-2" size={14} />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-teal-100">
                <h3 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-6 sm:mb-8">Book Appointment</h3>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" noValidate>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile"
                      maxLength="10"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Gender</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-2 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Age</label>
                      <input
                        type="text"
                        inputMode="numeric"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Age"
                        maxLength="3"
                        className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                          errors.age ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.age && <p className="mt-1 text-xs text-red-500">{errors.age}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      Select Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white ${
                        errors.service ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Choose a Service</option>
                      <option value="Premium Cataract Surgery">Premium Cataract Surgery</option>
                      <option value="Retina & Vitreous Services">Retina & Vitreous Services</option>
                      <option value="Glaucoma Management">Glaucoma Management</option>
                      <option value="ROP Screening & Treatment">ROP Screening</option>
                      <option value="Uvea & Inflammatory Eye Diseases">Uvea & Inflammatory</option>
                      <option value="Ocular Trauma Care">Ocular Trauma Care</option>
                      <option value="Neuro-Ophthalmology">Neuro-Ophthalmology</option>
                      <option value="Dry Eye & Ocular Surface Disorders">Dry Eye Care</option>
                      <option value="Refractive Services (LASIK & Beyond)">Refractive Services</option>
                      <option value="Comprehensive Eye Care for All Ages">Comprehensive Eye Care</option>
                    </select>
                    {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.date ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                    <p className="mt-1 text-xs text-teal-600">Mon-Sat, 9AM-5PM</p>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any concerns?"
                      rows="3"
                      maxLength="500"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                    ></textarea>
                    <p className="mt-1 text-xs text-gray-500 text-right">{formData.message.length}/500</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 sm:py-3.5 rounded-lg hover:bg-green-600 transition-all font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center group"
                  >
                    <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                    Book via WhatsApp
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    <span className="text-red-500">*</span> Required fields
                  </p>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="max-w-6xl mx-auto mt-10 sm:mt-12 md:mt-16">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-700 mb-2">Find Us</h3>
                <p className="text-sm sm:text-base text-gray-600">MCS Hospital, Muvattupuzha</p>
              </div>

              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-teal-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d694.6087231162195!2d76.58789641593297!3d9.992033615752066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e77bf1f9fd5f%3A0xfb6ce3bdd67fad42!2sMCS%20Hospital%2C%20Muvattupuzha!5e0!3m2!1sen!2sin!4v1762707443342!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="MCS Hospital Location"
                  className="min-h-[300px] sm:min-h-[400px] md:min-h-[450px]"
                ></iframe>

                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col gap-1.5 sm:gap-2 z-20">
                  <button
                    onClick={openInGoogleMaps}
                    className="bg-white text-teal-700 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-lg hover:bg-teal-700 hover:text-white transition-all flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold"
                  >
                    <ExternalLink size={14} />
                    <span className="hidden sm:inline">Open</span>
                  </button>
                  
                  <button
                    onClick={getDirections}
                    className="bg-blue-600 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold"
                  >
                    <Navigation size={14} />
                    <span className="hidden sm:inline">Directions</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-4 sm:p-6 rounded-xl shadow-md border-2 border-teal-200">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal-800 mb-1 text-sm sm:text-base">Address</h4>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        MCS Hospital, Randarkara Rd,<br/>Muvattupuzha 686673
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 rounded-xl shadow-md border-2 border-blue-200 cursor-pointer" onClick={getDirections}>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Navigation className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-1 text-sm sm:text-base">Easy Access</h4>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Well-connected by road<br/>
                        <span className="text-blue-600 font-semibold">Click for directions →</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-4 sm:p-6 rounded-xl shadow-md border-2 border-amber-200 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-800 mb-1 text-sm sm:text-base">Need Help?</h4>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Call for directions<br/>
                        <a href="tel:+918075649788" className="text-amber-600 font-semibold hover:underline">
                          +91 8075649788
                        </a>
                      </p>
                    </div>
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