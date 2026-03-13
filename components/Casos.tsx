'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import IPhoneMockup from './IPhoneMockup'

const videos = [
  'https://ohygfcp2wigfpwer.public.blob.vercel-storage.com/Conti%20FINAL.mp4',
  'https://ohygfcp2wigfpwer.public.blob.vercel-storage.com/T%C3%A9cnicas%20cl%C3%A1sicas%2C%20tendencias%20actuales%2C%20en%20un%20ambiente%20exclusivo%2C%20pensado%20solo%20para%20caballeros.%20.mp4',
  'https://ohygfcp2wigfpwer.public.blob.vercel-storage.com/10%20a%C3%B1os%2C%20cerca%20siempre%E2%80%9CAcompa%C3%B1ar%20es%20lo%20que%20nos%20une.%E2%80%9DEn%20estos%2010%20a%C3%B1os%20en%20Paraguay%2C%20Jean%20Vernier%20h.mp4',
  'https://ohygfcp2wigfpwer.public.blob.vercel-storage.com/As%C3%AD%20celebramos%20nuestros%2010%20a%C3%B1os%20en%20Paraguay%20%F0%9F%87%B5%F0%9F%87%BE%2010%20a%C3%B1os%2C%20juntos%20siempre%21Muchas%20gracias%20por%20acom.mp4',
  'https://ohygfcp2wigfpwer.public.blob.vercel-storage.com/Reuzel%20GALERIA%20CORREGIDO%20.MOV',
  'https://ohygfcp2wigfpwer.public.blob.vercel-storage.com/%C2%A1Empezamos%20una%20nueva%20etapa%20en%20la%20Universidad%20San%20Carlos%21%F0%9F%8E%93%20Nuestro%20compromiso%20con%20la%20calidad%20y%20f.mp4',
]

const AUTO_ADVANCE_MS = 6000

export default function Casos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  // Auto-advance
  useEffect(() => {
    if (!isInView) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(timer)
  }, [isInView])

  // Play/pause videos based on active index
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === activeIndex) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [activeIndex])

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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
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

        {/* iPhone Mockup centrado con videos */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <IPhoneMockup className="w-72 md:w-80 lg:w-[22rem]">
            <div className="w-full h-full relative bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <video
                    ref={(el) => { videoRefs.current[activeIndex] = el }}
                    src={videos[activeIndex]}
                    muted
                    playsInline
                    loop
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </IPhoneMockup>

          {/* Indicadores */}
          <div className="flex gap-2 mt-8">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? 'bg-[#c81e1e] w-6'
                    : 'bg-white/30 hover:bg-white/50 w-2'
                }`}
                aria-label={`Ver video ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
