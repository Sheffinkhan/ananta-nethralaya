// src/components/WhatsappButton.jsx
"use client"
import { MessageCircle } from "lucide-react"

const WhatsAppButton = () => {
  const whatsappNumber = "918075649788"
  const message = "Hello! I would like to inquire about your eye care services."
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }
  
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-8 bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center gap-2 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle 
        size={24} 
        className="group-hover:scale-110 transition-transform duration-300" 
      />
      <span className="font-medium text-sm hidden sm:inline">Chat with us</span>
    </button>
  )
}

export default WhatsAppButton