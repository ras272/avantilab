'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="min-h-screen relative flex items-center overflow-hidden bg-[#FAFAF9]"
    >
      {/* Contenido */}
      <div className="relative z-10 w-full px-6 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-[#c81e1e] font-mono text-xs tracking-[0.2em] uppercase">
              Comunicación Estratégica
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-16">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-[#1a1a1a] text-[12vw] md:text-[8vw] lg:text-[6vw] leading-[1.05] tracking-tight font-light"
              >
                El laboratorio donde
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#1a1a1a] text-[12vw] md:text-[8vw] lg:text-[6vw] leading-[1.05] tracking-tight font-light"
              >
                la <span className="italic text-[#c81e1e]">estrategia</span> se convierte
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[#1a1a1a] text-[12vw] md:text-[8vw] lg:text-[6vw] leading-[1.05] tracking-tight font-light"
              >
                en <span className="italic">impacto</span><span className="text-[#c81e1e]">.</span>
              </motion.h1>
            </div>
          </div>

          {/* Grid inferior */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-end"
          >
            <div className="max-w-lg">
              <p className="text-[#1a1a1a]/60 text-xl md:text-2xl leading-relaxed">
                Ideas → Resultados. Comunicación estratégica con método.
              </p>
            </div>

            <div className="flex md:justify-end">
              <a
                href="#servicios"
                className="group inline-flex items-center gap-4"
              >
                <span className="text-[#1a1a1a] font-sans text-sm border-b border-[#1a1a1a]/20 pb-1 group-hover:border-[#c81e1e] transition-colors">
                  Descubrí cómo lo hacemos
                </span>
                <span className="w-12 h-12 rounded-full bg-[#c81e1e] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  ↓
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-[#1a1a1a]/20 rounded-full flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-[#c81e1e] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
