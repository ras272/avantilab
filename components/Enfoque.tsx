'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Enfoque() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-32 md:py-40 px-6 bg-[#FAFAF9] relative overflow-hidden" ref={ref}>
      {/* Numero grande de fondo */}
      <motion.span
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 0.03, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute -left-10 top-1/2 -translate-y-1/2 text-[40vw] font-mono font-bold text-[#1a1a1a] leading-none pointer-events-none select-none"
      >
        02
      </motion.span>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <span className="w-12 h-px bg-[#c81e1e]" />
          <span className="text-[#c81e1e] font-mono text-xs tracking-[0.3em] uppercase">
            Nuestro Enfoque
          </span>
        </motion.div>

        {/* Statement potente */}
        <div className="max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-sans text-[#1a1a1a] text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight font-light"
          >
            No seguimos{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#1a1a1a]/30"
            >
              tendencias
            </motion.span>
            .
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="italic text-[#c81e1e]"
            >
              Las creamos
            </motion.span>
            .
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-[#1a1a1a]/50 text-xl md:text-2xl leading-relaxed mt-12 max-w-2xl"
          >
            Cada marca tiene una historia que contar. Nosotros la convertimos en una estrategia que transforma, conecta y deja huella.
          </motion.p>
        </div>

        {/* Linea decorativa animada */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-px bg-gradient-to-r from-[#c81e1e] via-[#c81e1e]/50 to-transparent mt-16 origin-left"
        />
      </div>
    </section>
  )
}
