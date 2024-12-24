"use client"

import ImageCarousel from './ImageCarousel'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen">
      <ImageCarousel />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className={`text-center transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Energy Kitchen</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Experience culinary excellence</p>
          <a href="#menu" className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            View Menu
          </a>
        </div>
      </div>
    </section>
  )
}

