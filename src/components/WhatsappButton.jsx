"use client"
import { MessageCircle } from "lucide-react"

const WhatsAppButton = () => {
  const whatsappNumber = "917025195638"
  const message = "Hello! I would like to inquire about your eye care services."

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-8 bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-125 transition-all duration-300 z-50 group animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
    </button>
  )
}

export default WhatsAppButton
