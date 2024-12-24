'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isOverlayVisible, setIsOverlayVisible] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsOverlayVisible(!isOverlayVisible)
  }

  return (
    <header className="bg-white shadow-md relative z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href={"/"} className="text-xl md:text-2xl font-bold text-gray-800 uppercase">Energy Kitchen</Link>
          <div className="hidden md:flex space-x-4 uppercase font-medium">
            <Link href="#menu" className="text-gray-800 hover:text-red-600">Menu</Link>
            <Link href="#about" className="text-gray-800 hover:text-red-600">About Us</Link>
            <Link href="#gallery" className="text-gray-800 hover:text-red-600">Gallery</Link>
            <Link href="#testimonials" className="text-gray-800 hover:text-red-600">Testimonials</Link>
            <Link href="#contact" className="text-gray-800 hover:text-red-600">Contact</Link>
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
        className={`fixed inset-y-0 right-0 w-[90vw] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0 z-50' : 'translate-x-full'
          } md:hidden`}
      >
        <div className="p-6">
          <button
            className="mb-8 text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col space-y-4 font-semibold text-3xl uppercase">
            <Link href="#menu" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Menu</Link>
            <Link href="#about" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>About Us</Link>
            <Link href="#gallery" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Gallery</Link>
            <Link href="#testimonials" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Testimonials</Link>
            <Link href="#contact" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      </div>
      {/* Overlay */}
      {isOverlayVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </header>
  )
}

