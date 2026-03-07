'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pilares = [
  {
    id: '01',
    title: 'Estrategia',
    description: 'Cada paso tiene una razón.',
  },
  {
    id: '02',
    title: 'Creatividad',
    description: 'Ideas que nacen del propósito.',
  },
  {
    id: '03',
    title: 'Ejecución',
    description: 'Acción y resultados visibles.',
  },
]

export default function Enfoque() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-32 px-6 bg-[#1a1a1a] relative overflow-hidden" ref={ref}>
      {/* Número grande de fondo */}
      <motion.span
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 0.03, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute -left-10 top-1/2 -translate-y-1/2 text-[40vw] font-mono font-bold text-white leading-none pointer-events-none select-none"
      >
        02
      </motion.span>

      {/* Textura */}
      <div
        className="absolute inset-0 opacity-[0.3] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-8"
        >
          <span className="w-12 h-px bg-[#c81e1e]" />
          <span className="text-[#c81e1e] font-mono text-xs tracking-[0.3em] uppercase">
            Nuestro Enfoque
          </span>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-6"
          >
            <h2 className="font-sans text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light">
              Método, innovación
              <br />
              y <span className="italic text-[#c81e1e]">humanidad</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-5 md:col-start-8 flex items-end"
          >
            <p className="text-white/60 text-xl md:text-2xl leading-relaxed">
              Pensar, planificar y ejecutar con propósito.
            </p>
          </motion.div>
        </div>

        {/* Pilares */}
        <div className="grid md:grid-cols-3 gap-6">
          {pilares.map((pilar, i) => (
            <motion.div
              key={pilar.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group p-8 border border-white/10 hover:border-[#c81e1e]/50 hover:bg-white/5 transition-all duration-300"
            >
              <span className="text-[#c81e1e] font-sans text-xs mb-6 block">
                {pilar.id}
              </span>
              <h3 className="font-sans text-white text-3xl font-light mb-4">
                {pilar.title}
              </h3>
              <p className="text-white/50 text-lg">
                {pilar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
