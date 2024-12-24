'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Emily Johnson',
    role: 'Food Critic',
    content: 'Gourmet Haven is a culinary masterpiece. Each dish is a work of art, bursting with flavors that dance on your palate.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    name: 'Michael Chen',
    role: 'Regular Customer',
    content: 'I\'ve been coming here for years, and the quality and service never disappoint. It\'s my go-to place for special occasions.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    name: 'Sophia Rodriguez',
    role: 'Local Food Blogger',
    content: 'The attention to detail in every aspect of dining at Gourmet Haven is impressive. A must-visit for food enthusiasts!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-16 bg-white mb-2">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Our Customers Say</h2>
        <div className="max-w-2xl mx-auto">
          <div className="relative h-64 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                  <p className="text-gray-700 italic mb-4">{testimonial.content}</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

