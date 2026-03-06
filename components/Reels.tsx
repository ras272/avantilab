'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const reels = [
  {
    id: 1,
    video: 'https://ohygfcp2wigfpwer.public.blob.vercel-storage.com/As%C3%AD%20celebramos%20nuestros%2010%20a%C3%B1os%20en%20Paraguay%20%F0%9F%87%B5%F0%9F%87%BE%2010%20a%C3%B1os%2C%20juntos%20siempre%21Muchas%20gracias%20por%20acom.mp4'
  },
  {
    id: 2,
    video: 'https://ohygfcp2wigfpwer.public.blob.vercel-storage.com/%C2%A1Empezamos%20una%20nueva%20etapa%20en%20la%20Universidad%20San%20Carlos%21%F0%9F%8E%93%20Nuestro%20compromiso%20con%20la%20calidad%20y%20f.mp4'
  },
  {
    id: 3,
    video: 'https://ohygfcp2wigfpwer.public.blob.vercel-storage.com/T%C3%A9cnicas%20cl%C3%A1sicas%2C%20tendencias%20actuales%2C%20en%20un%20ambiente%20exclusivo%2C%20pensado%20solo%20para%20caballeros.%20.mp4'
  },
  {
    id: 4,
    video: 'https://ohygfcp2wigfpwer.public.blob.vercel-storage.com/10%20a%C3%B1os%2C%20cerca%20siempre%E2%80%9CAcompa%C3%B1ar%20es%20lo%20que%20nos%20une.%E2%80%9DEn%20estos%2010%20a%C3%B1os%20en%20Paraguay%2C%20Jean%20Vernier%20h.mp4'
  },
]

const videos = [
  {
    id: 1,
    video: 'https://ohygfcp2wigfpwer.public.blob.vercel-storage.com/Conti%20FINAL.mp4'
  },
  {
    id: 2,
    video: 'https://ohygfcp2wigfpwer.public.blob.vercel-storage.com/Reuzel%20GALERIA%20CORREGIDO%20.MOV'
  },
]

export default function Reels() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 md:py-32 px-6 bg-[#FAFAF9] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-px bg-[#c81e1e]" />
              <span className="text-[#c81e1e] font-mono text-xs tracking-[0.3em] uppercase">
                Contenido
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-sans text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light"
            >
              Lo que <span className="italic text-[#c81e1e]">creamos</span>.
            </motion.h2>
          </div>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="group inline-flex items-center gap-3 font-sans text-sm"
          >
            <span className="border-b border-[#1a1a1a]/30 pb-1 group-hover:border-[#c81e1e] transition-colors">
              Ver más en Instagram
            </span>
            <span className="w-10 h-10 rounded-full border border-[#1a1a1a]/20 flex items-center justify-center group-hover:bg-[#c81e1e] group-hover:border-[#c81e1e] group-hover:text-white transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </span>
          </motion.a>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group aspect-[9/16] bg-[#1a1a1a] overflow-hidden rounded-lg relative"
            >
              <video
                src={reel.video}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }}
              />
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              className="group aspect-video bg-[#1a1a1a] overflow-hidden rounded-lg relative"
            >
              <video
                src={video.video}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }}
              />
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
