'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function QuienesSomos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="nosotros" className="py-32 px-6 bg-[#1a1a1a] relative overflow-hidden" ref={ref}>
      {/* Número grande de fondo */}
      <motion.span
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 0.03, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute -left-10 top-1/2 -translate-y-1/2 text-[40vw] font-mono font-bold text-white leading-none pointer-events-none select-none"
      >
        01
      </motion.span>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="w-12 h-px bg-[#c81e1e]" />
          <span className="text-[#c81e1e] font-mono text-xs tracking-[0.3em] uppercase">
            Quiénes Somos
          </span>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <h2 className="font-sans text-white text-4xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tight font-light mb-10">
              Somos <span className="italic text-[#c81e1e]">estrategas</span>{' '}
              de la comunicación.
              <br />
              <span className="text-white/60">Pensamos antes de comunicar.</span>
            </h2>

            <p className="text-white/60 text-xl md:text-2xl leading-relaxed">
              La estrategia define las decisiones que construyen la comunicación con propósito.
            </p>
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 md:col-start-9 flex flex-col justify-between"
          >
            {/* Quote */}
            <blockquote className="border-l-2 border-[#c81e1e] pl-6 mb-10">
              <p className="font-sans text-2xl md:text-3xl font-light italic text-white">
                Claridad. Criterio. Consistencia.
              </p>
            </blockquote>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
