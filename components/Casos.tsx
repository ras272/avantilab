'use client'

import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import IPhoneMockup from './IPhoneMockup'

const casos = [
  {
    id: '01',
    category: 'Campaña',
    title: 'Reposicionamiento de figura pública',
    result: '+340%',
    resultLabel: 'alcance en medios',
    description: 'Transformamos la percepción pública mediante una estrategia integral de comunicación.',
    color: '#c81e1e',
  },
  {
    id: '02',
    category: 'Branding',
    title: 'Lanzamiento regional en 5 países',
    result: '12M',
    resultLabel: 'impresiones',
    description: 'Coordinación de lanzamiento simultáneo con adaptación cultural para cada mercado.',
    color: '#1e88c8',
  },
  {
    id: '03',
    category: 'Reputación',
    title: 'Gestión de crisis institucional',
    result: '85%',
    resultLabel: 'recuperación',
    description: 'Respuesta rápida y efectiva para proteger la imagen de una institución líder.',
    color: '#1ec87a',
  },
]

export default function Casos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)
  const dragX = useMotionValue(0)

  const SLIDE_WIDTH = 100 // percentage

  const handleDragEnd = (_: never, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = 50
    const velocity = info.velocity.x
    const offset = info.offset.x

    let newIndex = activeIndex

    if (offset < -threshold || velocity < -500) {
      newIndex = Math.min(activeIndex + 1, casos.length - 1)
    } else if (offset > threshold || velocity > 500) {
      newIndex = Math.max(activeIndex - 1, 0)
    }

    setActiveIndex(newIndex)
    animate(dragX, -newIndex * SLIDE_WIDTH, { type: 'spring', stiffness: 300, damping: 30 })
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
    animate(dragX, -index * SLIDE_WIDTH, { type: 'spring', stiffness: 300, damping: 30 })
  }

  return (
    <section id="trabajo" className="py-32 px-6 bg-[#1a1a1a] relative overflow-hidden" ref={ref}>
      {/* Numero grande de fondo */}
      <motion.span
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 0.03, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute -left-10 top-1/2 -translate-y-1/2 text-[40vw] font-mono font-bold text-white leading-none pointer-events-none select-none"
      >
        05
      </motion.span>

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
              className="font-sans text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light"
            >
              Resultados que hablan
              <br />
              <span className="italic">por si solos</span>.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/trabajo"
              className="group inline-flex items-center gap-3 text-white font-sans text-sm"
            >
              <span className="border-b border-white/30 pb-1 group-hover:border-[#c81e1e] transition-colors">
                Ver galeria
              </span>
              <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#c81e1e] group-hover:border-[#c81e1e] transition-all duration-300">
                ↗
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Descripcion */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-base max-w-xl mb-16"
        >
          Cada proyecto responde a una necesidad distinta, pero todos parten del mismo punto: pensar la comunicacion antes de producirla.
        </motion.p>

        {/* Layout de 2 columnas */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna izquierda: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            {casos.map((caso, i) => (
              <motion.button
                key={caso.id}
                onClick={() => goToSlide(i)}
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 border ${
                  activeIndex === i
                    ? 'bg-white/10 border-[#c81e1e]/50'
                    : 'bg-white/5 border-transparent hover:bg-white/8'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[#c81e1e] font-mono text-xs uppercase tracking-wider">
                      {caso.category}
                    </span>
                    <h3 className="font-sans text-white text-lg font-light mt-2 mb-3">
                      {caso.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="font-sans text-4xl md:text-5xl font-light text-white block leading-none">
                      {caso.result}
                    </span>
                    <span className="text-white/50 font-mono text-xs uppercase tracking-wider mt-1 block">
                      {caso.resultLabel}
                    </span>
                  </div>
                </div>
                {/* Indicador activo */}
                <motion.div
                  className="h-0.5 bg-[#c81e1e] mt-4 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.div>

          {/* Columna derecha: iPhone Mockup con Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <IPhoneMockup className="w-64 md:w-72 lg:w-80">
              {/* Carousel container */}
              <div className="w-full h-full overflow-hidden bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
                <motion.div
                  className="flex h-full"
                  style={{ x: dragX.get() + '%' }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragEnd={handleDragEnd}
                >
                  {casos.map((caso) => (
                    <div
                      key={caso.id}
                      className="min-w-full h-full flex flex-col p-6 pt-16"
                      style={{ touchAction: 'pan-y' }}
                    >
                      {/* Header del slide */}
                      <div className="mb-auto">
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4"
                          style={{ backgroundColor: caso.color + '20', color: caso.color }}
                        >
                          {caso.category}
                        </span>
                        <h4 className="text-white text-lg font-light leading-tight">
                          {caso.title}
                        </h4>
                      </div>

                      {/* Resultado destacado */}
                      <div className="my-8 text-center">
                        <span
                          className="text-6xl font-light block"
                          style={{ color: caso.color }}
                        >
                          {caso.result}
                        </span>
                        <span className="text-white/50 text-xs uppercase tracking-wider mt-2 block">
                          {caso.resultLabel}
                        </span>
                      </div>

                      {/* Descripcion */}
                      <p className="text-white/60 text-sm leading-relaxed mb-8">
                        {caso.description}
                      </p>

                      {/* CTA */}
                      <button
                        className="w-full py-3 rounded-full text-white text-sm font-medium transition-opacity hover:opacity-80"
                        style={{ backgroundColor: caso.color }}
                      >
                        Ver caso completo
                      </button>
                    </div>
                  ))}
                </motion.div>
              </div>
            </IPhoneMockup>

            {/* Indicadores de pagina */}
            <div className="flex gap-2 mt-6">
              {casos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? 'bg-[#c81e1e] w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Ir a caso ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
