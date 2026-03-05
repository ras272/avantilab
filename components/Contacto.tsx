'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'

export default function Contacto() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [email, setEmail] = useState('')

  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#c81e1e' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <section id="contacto" className="relative overflow-hidden" ref={ref}>
      {/* Sección principal */}
      <div className="py-32 px-6 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-px bg-[#c81e1e]" />
            <span className="text-[#c81e1e] font-mono text-xs tracking-[0.3em] uppercase">
              Contacto
            </span>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-12">
            {/* Columna izquierda */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="md:col-span-5"
            >
              <h2 className="font-mono text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight font-light mb-6">
                Hablemos de tu
                <br />
                próximo <span className="italic text-[#c81e1e]">paso</span>.
              </h2>

              <p className="text-[#1a1a1a]/60 text-base leading-relaxed mb-4">
                Cada marca tiene un punto de partida. En Avanti Lab, hacemos que
                avance con estrategia, propósito y acción.
              </p>

              <p className="text-[#1a1a1a]/80 text-base leading-relaxed mb-8">
                Conversemos sobre cómo transformar tu comunicación en resultados.
              </p>

              {/* Info de contacto */}
              <div className="space-y-4 pt-8 border-t border-[#1a1a1a]/10">
                <div>
                  <span className="text-[#1a1a1a]/30 font-mono text-xs uppercase tracking-wider block mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:hola@avantilab.com"
                    className="font-mono text-lg hover:text-[#c81e1e] transition-colors"
                  >
                    hola@avantilab.com
                  </a>
                </div>
                <div>
                  <span className="text-[#1a1a1a]/30 font-mono text-xs uppercase tracking-wider block mb-1">
                    Ubicación
                  </span>
                  <span className="font-mono text-lg">Asunción, Paraguay</span>
                </div>
              </div>
            </motion.div>

            {/* Columna derecha - Cal.com embed */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-6 md:col-start-7"
            >
              <div className="bg-white border border-[#1a1a1a]/10 overflow-hidden">
                <Cal
                  calLink="avantilab/reunion"
                  style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                  config={{ layout: 'month_view', theme: 'light' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="py-8 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <span className="text-white/60 font-mono text-sm">
              ¿Preferís escribirnos?
            </span>
            <a
              href="mailto:hola@avantilab.com"
              className="text-white font-mono text-sm hover:text-[#c81e1e] transition-colors"
            >
              hola@avantilab.com
            </a>
          </div>

          {/* Mini form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = `mailto:hola@avantilab.com?subject=Contacto desde web&body=Mi email: ${email}`
            }}
            className="flex items-center gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              className="bg-transparent border-b border-white/20 py-2 px-1 text-white font-mono text-sm placeholder:text-white/30 focus:outline-none focus:border-[#c81e1e] transition-colors w-48"
            />
            <button
              type="submit"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#c81e1e] hover:border-[#c81e1e] hover:text-white transition-all text-sm"
            >
              →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
