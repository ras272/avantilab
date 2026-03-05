'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: '',
  })

  const openCalendly = () => {
    window.open('https://calendly.com/avantilab', '_blank')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío
    alert('Mensaje enviado. Te contactaremos pronto.')
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-[50vh] flex flex-col justify-end pb-16 pt-32 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#c81e1e] font-mono text-sm mb-6 block"
            >
              Contacto
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter font-light text-[#1a1a1a] max-w-5xl"
            >
              Hablemos<span className="text-[#c81e1e]">.</span>
            </motion.h1>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 px-6 border-t border-[#1a1a1a]/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-16">
              {/* Info de contacto */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-4"
              >
                <p className="text-[#1a1a1a]/60 text-sm leading-relaxed mb-12">
                  ¿Tenés un proyecto en mente? ¿Querés transformar tu comunicación?
                  Escribinos o agendá una reunión directamente.
                </p>

                <div className="space-y-8">
                  <div>
                    <span className="text-[#1a1a1a]/30 font-mono text-xs uppercase tracking-wider block mb-2">
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
                    <span className="text-[#1a1a1a]/30 font-mono text-xs uppercase tracking-wider block mb-2">
                      Ubicación
                    </span>
                    <p className="font-mono text-lg">Asunción, Paraguay</p>
                    <p className="text-[#1a1a1a]/50 text-sm mt-1">Operamos en todo LATAM</p>
                  </div>

                  <div>
                    <span className="text-[#1a1a1a]/30 font-mono text-xs uppercase tracking-wider block mb-2">
                      Social
                    </span>
                    <div className="flex gap-4">
                      <a
                        href="https://instagram.com/avantilab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm hover:text-[#c81e1e] transition-colors"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://linkedin.com/company/avantilab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm hover:text-[#c81e1e] transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* Calendly CTA */}
                <div className="mt-12 pt-8 border-t border-[#1a1a1a]/10">
                  <p className="text-[#1a1a1a]/50 text-sm mb-4">
                    ¿Preferís hablar directamente?
                  </p>
                  <button
                    onClick={openCalendly}
                    className="group inline-flex items-center gap-4 font-mono text-sm"
                  >
                    <span className="border-b border-[#1a1a1a]/30 pb-1 group-hover:border-[#c81e1e] transition-colors">
                      Agendar reunión
                    </span>
                    <span className="w-10 h-10 rounded-full border border-[#1a1a1a]/20 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-all">
                      ↗
                    </span>
                  </button>
                </div>
              </motion.div>

              {/* Formulario */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-6 md:col-start-7"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="text-[#1a1a1a]/30 font-mono text-xs uppercase tracking-wider block mb-3">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 font-mono text-lg placeholder:text-[#1a1a1a]/20 focus:outline-none focus:border-[#c81e1e] transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="text-[#1a1a1a]/30 font-mono text-xs uppercase tracking-wider block mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 font-mono text-lg placeholder:text-[#1a1a1a]/20 focus:outline-none focus:border-[#c81e1e] transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-[#1a1a1a]/30 font-mono text-xs uppercase tracking-wider block mb-3">
                      Empresa <span className="text-[#1a1a1a]/20">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 font-mono text-lg placeholder:text-[#1a1a1a]/20 focus:outline-none focus:border-[#c81e1e] transition-colors"
                      placeholder="Tu empresa"
                    />
                  </div>

                  <div>
                    <label className="text-[#1a1a1a]/30 font-mono text-xs uppercase tracking-wider block mb-3">
                      Mensaje
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 font-mono text-lg placeholder:text-[#1a1a1a]/20 focus:outline-none focus:border-[#c81e1e] transition-colors resize-none"
                      placeholder="Contanos sobre tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1a1a1a] text-white font-mono text-sm uppercase tracking-wider hover:bg-[#c81e1e] transition-colors"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
