'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const servicios = [
  {
    id: '01',
    title: 'Estrategia y posicionamiento',
    description: 'Definimos tu narrativa, posicionamos tu marca y construimos el camino para que tu mensaje llegue donde debe llegar.',
    items: [
      'Diagnóstico de comunicación',
      'Estrategia de posicionamiento',
      'Planificación de mensajes clave',
      'Mapeo de stakeholders',
      'Análisis de competencia',
    ],
  },
  {
    id: '02',
    title: 'Producción y creatividad',
    description: 'Desde la idea hasta la ejecución. Creamos contenido que conecta, campañas que impactan y piezas que se recuerdan.',
    items: [
      'Campañas integrales',
      'Producción audiovisual',
      'Diseño editorial',
      'Contenido para redes',
      'Branding y diseño de marca',
    ],
  },
  {
    id: '03',
    title: 'Presencia digital y medios',
    description: 'Gestionamos tu presencia en el ecosistema digital con estrategia, métricas y contenido que genera conversaciones reales.',
    items: [
      'Social media strategy',
      'Community management',
      'Relaciones con medios',
      'Prensa y PR digital',
      'Monitoreo y métricas',
    ],
  },
  {
    id: '04',
    title: 'Consultoría de marca personal',
    description: 'Construimos y potenciamos tu imagen personal como líder, experto o referente en tu industria.',
    items: [
      'Personal branding',
      'Media training',
      'Estrategia de vocería',
      'Presencia en LinkedIn',
      'Thought leadership',
    ],
  },
]

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-[70vh] flex flex-col justify-end pb-16 pt-32 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#c81e1e] font-mono text-xs tracking-[0.3em] uppercase mb-6 block"
            >
              Servicios
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[10vw] md:text-[7vw] leading-[0.9] tracking-tight font-light text-[#1a1a1a] max-w-5xl"
            >
              Lo que hacemos,
              <br />
              hecho <span className="italic">distinto</span>.
            </motion.h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 px-6 border-t border-[#1a1a1a]/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-6 text-[#1a1a1a]/60 text-sm leading-relaxed"
              >
                Cada servicio es una pieza del sistema. Trabajamos de forma integral
                o por módulos, según tu necesidad. Nuestro enfoque combina estrategia,
                creatividad y ejecución con foco en resultados medibles.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Servicios detallados */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            {servicios.map((servicio, i) => (
              <motion.div
                key={servicio.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-[#1a1a1a]/10 py-16 grid md:grid-cols-12 gap-8"
              >
                <div className="md:col-span-1">
                  <span className="text-[#c81e1e] font-mono text-sm">{servicio.id}</span>
                </div>

                <div className="md:col-span-5">
                  <h2 className="font-sans text-2xl md:text-3xl font-light mb-4">
                    {servicio.title}
                  </h2>
                  <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">
                    {servicio.description}
                  </p>
                </div>

                <div className="md:col-span-4 md:col-start-8">
                  <span className="text-[#1a1a1a]/30 font-mono text-xs uppercase tracking-wider block mb-4">
                    Incluye
                  </span>
                  <ul className="space-y-2">
                    {servicio.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-[#1a1a1a]/80 text-sm flex items-center gap-3"
                      >
                        <span className="w-1 h-1 bg-[#c81e1e] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Proceso */}
        <section className="py-24 px-6 bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline gap-4 mb-16">
              <span className="text-[#c81e1e] font-mono text-sm">Proceso</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-white text-3xl md:text-4xl leading-[1.2] font-light max-w-2xl mb-16"
            >
              Cómo trabajamos.
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: '01', title: 'Diagnóstico', desc: 'Entendemos tu situación, objetivos y contexto.' },
                { num: '02', title: 'Estrategia', desc: 'Diseñamos el plan con foco en resultados.' },
                { num: '03', title: 'Ejecución', desc: 'Implementamos con precisión y seguimiento.' },
                { num: '04', title: 'Medición', desc: 'Evaluamos, ajustamos, optimizamos.' },
              ].map((paso, i) => (
                <motion.div
                  key={paso.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-[#c81e1e] font-mono text-xs">{paso.num}</span>
                  <h3 className="text-white font-sans text-xl font-medium mt-2 mb-3">{paso.title}</h3>
                  <p className="text-white/40 text-sm">{paso.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-6 font-sans text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-light"
              >
                ¿Tenés un proyecto
                <br />
                en mente<span className="text-[#c81e1e]">?</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="md:col-span-4 md:col-start-9"
              >
                <a
                  href="/contacto"
                  className="group inline-flex items-center gap-4 font-sans text-sm"
                >
                  <span className="border-b border-[#1a1a1a]/30 pb-1 group-hover:border-[#c81e1e] transition-colors">
                    Contanos tu idea
                  </span>
                  <span className="w-10 h-10 rounded-full border border-[#1a1a1a]/20 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-all">
                    ↗
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
