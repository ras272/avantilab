import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import QuienesSomos from '@/components/QuienesSomos'
import Enfoque from '@/components/Enfoque'
import Servicios from '@/components/Servicios'
import Filosofia from '@/components/Filosofia'
import Casos from '@/components/Casos'
import Reels from '@/components/Reels'
import Cultura from '@/components/Cultura'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Enfoque />
        <Servicios />
        {/* <Filosofia /> */}
        <Casos />
        {/* <Reels /> */}
        {/* <Cultura /> */}
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
