'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center bg-[#FAFAF9] overflow-hidden">
      {/* Fondo topográfico */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 400 Q150 350 300 400 T600 380 T900 420 T1100 400" stroke="#c81e1e" strokeWidth="1.5"/>
          <path d="M-100 450 Q200 400 350 450 T650 420 T950 470 T1100 450" stroke="#1a1a1a" strokeWidth="1"/>
          <path d="M-100 500 Q180 480 320 520 T620 490 T920 530 T1100 500" stroke="#1a1a1a" strokeWidth="1"/>
          <path d="M-100 550 Q220 510 380 560 T680 530 T980 570 T1100 550" stroke="#c81e1e" strokeWidth="1.5"/>
          <path d="M-100 600 Q160 580 300 620 T600 590 T900 630 T1100 600" stroke="#1a1a1a" strokeWidth="1"/>
          <path d="M-100 650 Q200 620 360 660 T660 640 T960 680 T1100 650" stroke="#1a1a1a" strokeWidth="1"/>
          <path d="M-100 700 Q180 720 340 690 T640 720 T940 700 T1100 720" stroke="#c81e1e" strokeWidth="1.5"/>
          <path d="M-100 300 Q200 280 400 320 T700 290 T1000 330 T1100 300" stroke="#1a1a1a" strokeWidth="1"/>
          <path d="M-100 250 Q150 270 350 240 T650 270 T950 250 T1100 260" stroke="#1a1a1a" strokeWidth="1"/>
          <path d="M-100 200 Q180 180 380 210 T680 190 T980 220 T1100 200" stroke="#c81e1e" strokeWidth="1.5"/>
          <path d="M-100 750 Q220 780 420 750 T720 780 T1020 760 T1100 780" stroke="#1a1a1a" strokeWidth="1"/>
          <path d="M-100 800 Q180 820 380 800 T680 830 T980 810 T1100 830" stroke="#1a1a1a" strokeWidth="1"/>
          <path d="M-100 850 Q200 830 400 860 T700 840 T1000 870 T1100 850" stroke="#c81e1e" strokeWidth="1.5"/>
          <path d="M-100 150 Q160 170 360 140 T660 170 T960 150 T1100 170" stroke="#1a1a1a" strokeWidth="1"/>
          <path d="M-100 100 Q200 80 400 110 T700 90 T1000 120 T1100 100" stroke="#1a1a1a" strokeWidth="1"/>
          <path d="M-100 900 Q180 920 380 900 T680 930 T980 910 T1100 930" stroke="#1a1a1a" strokeWidth="1"/>
          <path d="M-100 950 Q220 930 420 960 T720 940 T1020 970 T1100 950" stroke="#c81e1e" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF9] via-transparent to-[#FAFAF9]" />

      {/* Contenido */}
      <div className="w-full px-6 py-32">
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
            <div className="max-w-md">
              <p className="text-[#1a1a1a]/60 text-lg leading-relaxed">
                Transformamos ideas en resultados reales a través de comunicación estratégica, creatividad y método.
              </p>
            </div>

            <div className="flex md:justify-end">
              <a
                href="#servicios"
                className="group inline-flex items-center gap-4"
              >
                <span className="text-[#1a1a1a] font-mono text-sm border-b border-[#1a1a1a]/20 pb-1 group-hover:border-[#c81e1e] transition-colors">
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
