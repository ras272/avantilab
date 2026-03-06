'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#1a1a1a] border-t border-white/5 relative overflow-hidden">
      {/* Text logo de fondo */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] text-[25vw] font-bold text-[#121212] whitespace-nowrap pointer-events-none select-none tracking-tighter">
        AVANTI
      </span>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Logo y tagline */}
          <div className="md:col-span-4">
            <Link href="/" className="font-sans text-white text-xl mb-4 block">
              avanti lab
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              Comunicar para cambiar realidades.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-2 md:col-start-6">
            <span className="text-white/30 font-sans text-xs uppercase tracking-wider block mb-4">
              Nav
            </span>
            <nav className="flex flex-col gap-2">
              {['Inicio', 'Nosotros', 'Servicios', 'Trabajo', 'Contacto'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
                  className="text-white/60 font-sans text-sm hover:text-[#c81e1e] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <span className="text-white/30 font-sans text-xs uppercase tracking-wider block mb-4">
              Social
            </span>
            <nav className="flex flex-col gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 font-sans text-sm hover:text-[#c81e1e] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/avantilab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 font-sans text-sm hover:text-[#c81e1e] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://wa.me/595993330623"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 font-sans text-sm hover:text-[#c81e1e] transition-colors"
              >
                WhatsApp
              </a>
            </nav>
          </div>

          {/* Contacto */}
          <div className="md:col-span-3 md:col-start-10">
            <span className="text-white/30 font-sans text-xs uppercase tracking-wider block mb-4">
              Contacto
            </span>
            <a
              href="mailto:hola@avanti-lab.com"
              className="text-white font-sans text-sm hover:text-[#c81e1e] transition-colors block mb-2"
            >
              hola@avanti-lab.com
            </a>
            <a
              href="https://wa.me/595993330623"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-sans text-sm hover:text-[#c81e1e] transition-colors block mb-2"
            >
              +595 993 330623
            </a>
            <span className="text-white/40 font-sans text-sm">
              Asunción, Paraguay
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/30 font-sans text-xs">
            © 2025 Avanti Lab. Todos los derechos reservados.
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white/30 font-sans text-xs hover:text-white transition-colors flex items-center gap-2"
          >
            Volver arriba
            <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
