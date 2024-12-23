import ImageCarousel from './ImageCarousel'

export default function Hero() {
  return (
    <section className="relative h-screen">
      <ImageCarousel />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Energy Kitchen</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Experience culinary excellence</p>
          <a href="#menu" className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            View Menu
          </a>
        </div>
      </div>
    </section>
  )
}

