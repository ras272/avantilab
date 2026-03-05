'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/trabajo', label: 'Trabajo' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar fija - mínima */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between mix-blend-difference">
        <Link href="/" className="text-white text-sm font-mono tracking-tight">
          avanti lab
        </Link>

        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-sm font-mono tracking-tight hover:opacity-60 transition-opacity"
        >
          menú
        </button>
      </nav>

      {/* Menu fullscreen */}
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
              className="absolute top-5 right-6 text-white/60 text-sm font-mono hover:text-white transition-colors"
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
                    className="text-white text-5xl md:text-7xl font-mono font-light hover:text-[#c81e1e] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="absolute bottom-8 left-6 right-6 flex justify-between text-white/40 text-xs font-mono">
              <span>Asunción, PY</span>
              <span>hola@avantilab.com</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
