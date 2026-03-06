'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const lineas = [
  { text: 'No creemos en la suerte:', highlight: false },
  { text: 'creemos en el método.', highlight: true },
  { text: 'No improvisamos:', highlight: false },
  { text: 'planificamos.', highlight: true },
  { text: 'Y no decimos "se puede":', highlight: false },
  { text: 'decimos "hagámoslo".', highlight: true },
]

export default function Filosofia() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Número de fondo */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.02 } : {}}
        transition={{ duration: 1 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[50vw] font-mono font-bold text-[#1a1a1a] leading-none pointer-events-none select-none"
      >
        05
      </motion.span>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-8"
        >
          <span className="w-12 h-px bg-[#c81e1e]" />
          <span className="text-[#c81e1e] font-mono text-xs tracking-[0.3em] uppercase">
            Nuestra Filosofía
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-2xl md:text-3xl font-light text-[#1a1a1a]/60 mb-12"
        >
          Pensamos diferente, trabajamos con método.
        </motion.h2>

        {/* Frases */}
        <div className="max-w-4xl">
          {lineas.map((linea, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.08 }}
                className={`font-sans text-3xl md:text-4xl lg:text-5xl leading-[1.2] tracking-tight font-light ${
                  linea.highlight ? 'text-[#c81e1e]' : 'text-[#1a1a1a]'
                }`}
              >
                {linea.text}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Cierre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 max-w-2xl"
        >
          <p className="text-[#1a1a1a]/80 text-xl md:text-2xl leading-relaxed">
            Comunicamos con propósito, <span className="text-[#c81e1e] font-medium">dejamos huella</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
