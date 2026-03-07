'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const services = [
  {
    id: '01',
    title: 'Estrategia y posicionamiento',
    description: 'Comunicación que define rumbo y propósito.',
  },
  {
    id: '02',
    title: 'Producción y creatividad',
    description: 'Contenido audiovisual, narrativas y diseño con identidad.',
  },
  {
    id: '03',
    title: 'Presencia digital y medios',
    description: 'Pauta, redes y gestión reputacional para amplificar resultados.',
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-px bg-white/50" />
              <span className="text-white/70 font-mono text-xs tracking-[0.3em] uppercase">
                Qué Hacemos
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-sans text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light"
            >
              Estrategia que deja
              <br />
              <span className="italic">huella</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-xl md:text-2xl mt-6 max-w-lg"
            >
              Visibilidad, reputación y resultados reales.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/servicios"
              className="group inline-flex items-center gap-3 text-white font-sans text-sm"
            >
              <span className="border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                Ver servicios completos
              </span>
              <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#c81e1e] transition-all duration-300">
                ↗
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 h-full hover:bg-white transition-all duration-500 cursor-pointer">
                <span className="text-white/50 font-sans text-xs group-hover:text-[#c81e1e] transition-colors">
                  {service.id}
                </span>

                <h3 className="font-sans text-white text-2xl md:text-3xl font-light mt-4 mb-4 group-hover:text-[#1a1a1a] transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-white/60 text-lg leading-relaxed group-hover:text-[#1a1a1a]/60 transition-colors duration-500">
                  {service.description}
                </p>

                <span className="inline-block mt-6 text-white/40 group-hover:text-[#c81e1e] group-hover:translate-x-2 transition-all duration-300">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
