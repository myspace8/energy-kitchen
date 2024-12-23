'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md relative z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold
          
          text-gray-800">Energy Kitchen</div>
          <div className="hidden md:flex space-x-4">
            <Link href="#menu" className="text-gray-800 hover:text-gray-600">Menu</Link>
            <Link href="#about" className="text-gray-800 hover:text-gray-600">About</Link>
            <Link href="#contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
          </div>
          <button 
            className="md:hidden text-gray-800 focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      <div 
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-6">
          <button 
            className="mb-4 text-gray-800 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col space-y-4">
            <Link href="#menu" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Menu</Link>
            <Link href="#about" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>About</Link>
            <Link href="#contact" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

