'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import FoodModal from './FoodModal'

const menuItems = [
  { 
    name: 'Grilled Salmon', 
    description: 'Fresh Atlantic salmon with lemon butter sauce', 
    price: '$24.99', 
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    marketingContent: 'Dive into ocean-fresh flavors with our perfectly grilled salmon. Each bite is a journey of succulence and zest!'
  },
  { 
    name: 'Beef Tenderloin', 
    description: 'Prime cut beef with red wine reduction', 
    price: '$29.99', 
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    marketingContent: 'Savor the pinnacle of beef perfection. Our tenderloin melts in your mouth, leaving an unforgettable taste of luxury.'
  },
  { 
    name: 'Vegetarian Pasta', 
    description: 'Penne with roasted vegetables and pesto', 
    price: '$18.99', 
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    marketingContent: 'A symphony of colors and flavors, our vegetarian pasta is a garden-fresh delight that satisfies and surprises.'
  },
  { 
    name: 'Lobster Risotto', 
    description: 'Creamy risotto with fresh lobster meat', 
    price: '$32.99', 
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    marketingContent: 'Indulge in the ultimate comfort food elevated to gourmet heights. Our lobster risotto is a creamy dream come true.'
  },
  { 
    name: 'Chicken Marsala', 
    description: 'Pan-seared chicken with Marsala wine sauce', 
    price: '$22.99', 
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80',
    marketingContent: 'Experience Italy on a plate. Our Chicken Marsala brings together tender chicken and rich wine flavors in perfect harmony.'
  },
  { 
    name: 'Seared Scallops', 
    description: 'Pan-seared scallops with cauliflower puree', 
    price: '$28.99', 
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    marketingContent: 'Dive into oceanic bliss with our seared scallops. Each morsel is a perfect balance of delicate flavor and exquisite texture.'
  },
]

export default function MenuHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedFood, setSelectedFood] = useState<typeof menuItems[0] | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % menuItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + menuItems.length) % menuItems.length)
  }

  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (href) {
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Menu Highlights</h2>
        
        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors z-10"
            aria-label="Previous menu item"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors z-10"
            aria-label="Next menu item"
          >
            <ChevronRight size={24} />
          </button>

          {/* Desktop view */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % menuItems.length
              const item = menuItems[index]
              return (
                <div 
                  key={index} 
                  className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                  // onClick={() => setSelectedFood(item)} // Enabling this will show a modal
                >
                  <Image src={item.image} alt={item.name} width={400} height={300} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <span className="font-bold text-gray-800">{item.price}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile view */}
          <div className="md:hidden">
            <div 
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md cursor-pointer"
              // onClick={() => setSelectedFood(menuItems[currentIndex])}
            >
              <Image src={menuItems[currentIndex].image} alt={menuItems[currentIndex].name} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{menuItems[currentIndex].name}</h3>
                <p className="text-gray-700 mb-4">{menuItems[currentIndex].description}</p>
                <span className="font-bold text-gray-800">{menuItems[currentIndex].price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-4">
          {menuItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {selectedFood && (
        <FoodModal food={selectedFood} onClose={() => setSelectedFood(null)} />
      )}
    </section>
  )
}

