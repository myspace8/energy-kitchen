'use client'

import { useState } from 'react'
import Image from 'next/image'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', alt: 'Restaurant interior' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0', alt: 'Gourmet dish' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de', alt: 'Chef preparing food' },
  { src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330', alt: 'Cocktail' },
  { src: 'https://images.unsplash.com/photo-1551218372-a8789b81b253', alt: 'Table setting' },
  { src: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31', alt: 'Outdoor dining' },
]

export default function Gallery() {
  const [showAll, setShowAll] = useState(false)

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 3)

  return (
    <section id="gallery" className="py-16 bg-red-600">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {visibleImages.map((img, index) => (
            <div key={index} className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md">
              <Image
                src={img.src}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
        {galleryImages.length > 2 && !showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="hidden bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

