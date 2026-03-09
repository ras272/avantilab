'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/casos', label: 'Casos' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar institucional */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#1a1a1a]/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img src="/logo.png" alt="Avanti Lab" className="h-36 w-auto -my-12" />
          </Link>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.slice(1, -1).map((link) => {
              const scrollTarget = link.href === '/servicios' ? 'servicios' : link.href === '/casos' ? 'trabajo' : null
              return scrollTarget ? (
                <button
                  key={link.href}
                  onClick={() => {
                    document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group relative text-[#162139] text-base font-sans font-medium py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c81e1e] transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-[#162139] text-base font-sans font-medium py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c81e1e] transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            })}
            <button
              onClick={() => {
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group bg-[#c81e1e] text-white text-sm font-sans px-6 py-2.5 rounded-full hover:bg-[#a01818] hover:shadow-lg hover:shadow-[#c81e1e]/25 transition-all duration-300 flex items-center gap-2"
            >
              Contáctanos
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </button>
          </div>

          {/* Menu button mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-[#162139] text-base font-sans font-medium"
          >
            menú
          </button>
        </div>
      </nav>

      {/* Menu fullscreen mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 bg-[#1a1a1a] flex items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 text-white/60 text-sm font-sans hover:text-white transition-colors"
            >
              cerrar
            </button>

            <nav className="flex flex-col items-center gap-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-5xl md:text-7xl font-sans font-light hover:text-[#c81e1e] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="absolute bottom-8 left-6 right-6 flex justify-between text-white/40 text-xs font-mono">
              <span>Asunción, PY</span>
              <span>hola@avanti-lab.com</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
