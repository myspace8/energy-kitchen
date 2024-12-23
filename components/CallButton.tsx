import { Phone } from 'lucide-react'

export default function CallButton() {
  return (
    <a
      href="tel:+233592771234"
      className="fixed right-4
       bottom-20 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Call us"
    >
      <Phone size={24} />
    </a>
  )
}

