'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    id: '01',
    title: 'Estrategia',
    description: 'Diagnóstico, posicionamiento y planificación de comunicación.',
  },
  {
    id: '02',
    title: 'Creatividad',
    description: 'Conceptos creativos, campañas y desarrollo de marca.',
  },
  {
    id: '03',
    title: 'Contenidos',
    description: 'Producción de contenido para medios digitales y tradicionales.',
  },
  {
    id: '04',
    title: 'Diseño',
    description: 'Diseño gráfico, piezas de comunicación y desarrollo visual.',
  },
  {
    id: '05',
    title: 'Producción',
    description: 'Adaptaciones, piezas para medios y producción de campañas.',
  },
]

export default function Servicios() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="servicios" className="py-32 px-6 bg-[#c81e1e] relative overflow-hidden" ref={ref}>
      {/* Textura */}
      <div
        className="absolute inset-0 opacity-[0.3] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Número grande de fondo */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.18 } : {}}
        transition={{ duration: 1 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[50vw] font-mono font-bold text-black leading-none pointer-events-none select-none z-[5]"
      >
        03
      </motion.span>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-5"
            >
              <span className="w-10 h-px bg-white/40" />
              <span className="text-white/60 font-mono text-[11px] tracking-[0.25em] uppercase">
                Qué Hacemos
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-sans text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light"
            >
              Comunicación con
              <br />
              <span className="italic">dirección</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-white/60 text-lg md:text-xl mt-5 max-w-md"
            >
              Combinamos estrategia, creatividad y metodología para transformar ideas en acciones.
            </motion.p>
          </div>

        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 h-full rounded-sm hover:bg-white transition-all duration-300 ease-out cursor-pointer focus-within:ring-2 focus-within:ring-white/50 focus-within:ring-offset-2 focus-within:ring-offset-[#c81e1e]">
                <h3 className="font-sans text-white text-lg md:text-xl font-light mb-3 group-hover:text-[#1a1a1a] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed group-hover:text-[#1a1a1a]/70 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
