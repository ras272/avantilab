'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const casos = [
  {
    id: '01',
    category: 'Campaña',
    title: 'Reposicionamiento de figura pública',
    result: '+340%',
    resultLabel: 'alcance en medios',
  },
  {
    id: '02',
    category: 'Branding',
    title: 'Lanzamiento regional en 5 países',
    result: '12M',
    resultLabel: 'impresiones',
  },
  {
    id: '03',
    category: 'Reputación',
    title: 'Gestión de crisis institucional',
    result: '85%',
    resultLabel: 'recuperación',
  },
]

export default function Casos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="trabajo" className="py-32 px-6 bg-[#1a1a1a] relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-px bg-[#c81e1e]" />
              <span className="text-[#c81e1e] font-mono text-xs tracking-[0.3em] uppercase">
                Casos
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-mono text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light"
            >
              Resultados que hablan
              <br />
              <span className="italic">por sí solos</span>.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/trabajo"
              className="group inline-flex items-center gap-3 text-white font-mono text-sm"
            >
              <span className="border-b border-white/30 pb-1 group-hover:border-[#c81e1e] transition-colors">
                Ver todos
              </span>
              <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#c81e1e] group-hover:border-[#c81e1e] transition-all duration-300">
                ↗
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-base max-w-xl mb-16"
        >
          Nuestro trabajo no se mide en publicaciones, sino en impacto.
          Hemos acompañado a marcas, instituciones y líderes a construir
          reputación, crecer y posicionarse.
        </motion.p>

        {/* Grid de casos */}
        <div className="grid md:grid-cols-3 gap-4">
          {casos.map((caso, i) => (
            <motion.article
              key={caso.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
              className="group cursor-pointer"
            >
              {/* Card con resultado destacado */}
              <div className="aspect-[3/4] bg-white/5 relative overflow-hidden mb-6 p-6 flex flex-col justify-between hover:bg-white/10 transition-colors duration-300">
                {/* Categoría */}
                <span className="text-[#c81e1e] font-mono text-xs uppercase tracking-wider">
                  {caso.category}
                </span>

                {/* Resultado grande */}
                <div>
                  <span className="font-mono text-6xl md:text-7xl font-light text-white block leading-none">
                    {caso.result}
                  </span>
                  <span className="text-white/50 font-mono text-xs uppercase tracking-wider mt-2 block">
                    {caso.resultLabel}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#c81e1e] flex items-center justify-center opacity-0 group-hover:opacity-95 transition-opacity duration-300">
                  <span className="text-white font-mono text-sm">Ver caso ↗</span>
                </div>
              </div>

              {/* Título */}
              <h3 className="font-mono text-white text-lg md:text-xl font-light group-hover:text-[#c81e1e] transition-colors duration-300">
                {caso.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
