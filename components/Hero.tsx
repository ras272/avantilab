'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,30,30,0.15)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* Gradiente inferior para transición */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF9] to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="w-12 h-px bg-[#c81e1e]" />
            <span className="text-[#c81e1e] font-mono text-xs tracking-[0.3em] uppercase">
              Comunicación Estratégica
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-mono text-white text-[10vw] md:text-[7vw] leading-[0.95] tracking-tighter font-light"
            >
              El laboratorio
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-white text-[10vw] md:text-[7vw] leading-[0.95] tracking-tighter font-light"
            >
              donde la <span className="italic text-[#c81e1e]">estrategia</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-mono text-white text-[10vw] md:text-[7vw] leading-[0.95] tracking-tighter font-light"
            >
              se convierte en <span className="italic">impacto</span>
              <span className="text-[#c81e1e]">.</span>
            </motion.h1>
          </div>

          {/* Subtítulo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <div className="max-w-lg">
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-4">
                Transformamos ideas en resultados reales a través de comunicación
                estratégica, creatividad y método.
              </p>
              <p className="text-white font-mono text-sm">
                Avanti Lab: tu objetivo, nuestro plan de acción.
              </p>
            </div>

            <a
              href="#servicios"
              className="group flex items-center gap-4"
            >
              <span className="text-white font-mono text-sm border-b border-white/30 pb-1 group-hover:border-[#c81e1e] transition-colors">
                Descubrí cómo lo hacemos
              </span>
              <span className="w-12 h-12 rounded-full bg-[#c81e1e] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                ↓
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-1"
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
