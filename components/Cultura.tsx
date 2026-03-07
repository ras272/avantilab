'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const valores = [
  {
    title: 'Hacedores',
    description: 'Menos promesas, más resultados.',
  },
  {
    title: 'Excelencia',
    description: 'Lo impecable también comunica.',
  },
  {
    title: 'Transparencia',
    description: 'Coherencia total o nada.',
  },
  {
    title: 'Crecimiento continuo',
    description: 'Lo de ayer ya no alcanza.',
  },
  {
    title: 'Dejamos huella',
    description: 'Buscamos impacto, no ruido.',
  },
]

export default function Cultura() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-16 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Número grande de fondo */}
      <motion.span
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 0.03, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute -left-10 top-1/2 -translate-y-1/2 text-[40vw] font-mono font-bold text-[#1a1a1a] leading-none pointer-events-none select-none"
      >
        07
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
            Cultura Avanti Lab
          </span>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light mb-8">
              La cultura que
              <br />
              nos <span className="italic text-[#c81e1e]">mueve</span>.
            </h2>

            <p className="text-[#1a1a1a]/60 text-xl md:text-2xl leading-relaxed">
              Pensamos, creamos y celebramos en equipo.
            </p>
          </motion.div>

          {/* Columna derecha - valores */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-6 md:col-start-7"
          >
            <div className="space-y-0">
              {valores.map((valor, i) => (
                <motion.div
                  key={valor.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group py-5 border-b border-[#1a1a1a]/10 flex items-start justify-between gap-4 hover:border-[#c81e1e]/30 transition-colors cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[#c81e1e] text-xl leading-none">•</span>
                    <div>
                      <h3 className="font-sans text-xl md:text-2xl font-medium text-[#1a1a1a] group-hover:text-[#c81e1e] transition-colors">
                        {valor.title}
                      </h3>
                      <p className="text-[#1a1a1a]/50 text-base md:text-lg mt-1">
                        {valor.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
