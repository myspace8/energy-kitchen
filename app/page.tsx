import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MenuHighlights from '@/components/MenuHighlights'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTopButton from '@/components/BackToTopButton'
import CallButton from '@/components/CallButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MenuHighlights />
      <About />
      <Contact />
      <div className='flex justify-center'>
      <BackToTopButton />

      </div>
      <Footer />
      <CallButton />
    </main>
  )
}

