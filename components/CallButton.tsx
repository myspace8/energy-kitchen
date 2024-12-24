'use client'

import { Phone } from 'lucide-react'

export default function CallButton() {
  return (
    <a
      href="tel:+15551234567"
      className="fixed right-4 bottom-8 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors group"
      aria-label="Call us"
    >
      <Phone size={24} />
      <span className="absolute inset-0 rounded-full border-4 border-green-300 opacity-0 group-hover:opacity-100 animate-pulse"></span>
    </a>
  )
}

