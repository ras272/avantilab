'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const casos = [
  {
    id: '01',
    slug: 'reposicionamiento-figura-publica',
    category: 'Campaña Política',
    title: 'Reposicionamiento de figura pública',
    description: 'Estrategia integral de comunicación para transformar la percepción y aumentar el engagement.',
    result: '+340% alcance en medios',
    year: '2024',
  },
  {
    id: '02',
    slug: 'lanzamiento-regional',
    category: 'Branding Corporativo',
    title: 'Lanzamiento de marca regional',
    description: 'Desarrollo de identidad, estrategia de lanzamiento y activación en 5 países de LATAM.',
    result: '12M impresiones en 30 días',
    year: '2024',
  },
  {
    id: '03',
    slug: 'gestion-crisis',
    category: 'Crisis Management',
    title: 'Gestión de crisis reputacional',
    description: 'Estrategia de contención y reconstrucción de imagen para empresa del sector financiero.',
    result: '85% recuperación de confianza',
    year: '2023',
  },
  {
    id: '04',
    slug: 'campana-concientizacion',
    category: 'Campaña Social',
    title: 'Campaña de concientización',
    description: 'Diseño y ejecución de campaña multiplataforma para ONG regional.',
    result: '2M alcance orgánico',
    year: '2023',
  },
  {
    id: '05',
    slug: 'marca-personal-ceo',
    category: 'Personal Branding',
    title: 'Posicionamiento de CEO',
    description: 'Construcción de marca personal y estrategia de thought leadership.',
    result: '+500% engagement LinkedIn',
    year: '2023',
  },
  {
    id: '06',
    slug: 'transformacion-digital',
    category: 'Digital',
    title: 'Transformación digital de comunicación',
    description: 'Migración y optimización de canales digitales para empresa de retail.',
    result: '+180% tráfico web',
    year: '2022',
  },
]

const categorias = ['Todos', 'Campaña Política', 'Branding Corporativo', 'Crisis Management', 'Digital', 'Personal Branding']

export default function TrabajoPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-[60vh] flex flex-col justify-end pb-16 pt-32 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#c81e1e] font-mono text-sm mb-6 block"
            >
              Trabajo
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter font-light text-[#1a1a1a] max-w-5xl"
            >
              Resultados que
              <br />
              <span className="italic">hablan</span>.
            </motion.h1>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-8 px-6 border-t border-[#1a1a1a]/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {categorias.map((cat, i) => (
                <button
                  key={cat}
                  className={`font-mono text-xs uppercase tracking-wider py-2 px-4 border transition-colors ${
                    i === 0
                      ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                      : 'border-[#1a1a1a]/20 text-[#1a1a1a]/60 hover:border-[#1a1a1a]/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Grid de casos */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
              {casos.map((caso, i) => (
                <motion.article
                  key={caso.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  {/* Imagen */}
                  <div className="aspect-[16/10] bg-[#1a1a1a]/5 mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#1a1a1a] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-mono text-sm">Ver caso ↗</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#c81e1e] font-mono text-xs uppercase tracking-wider">
                          {caso.category}
                        </span>
                        <span className="text-[#1a1a1a]/30 font-mono text-xs">
                          {caso.year}
                        </span>
                      </div>
                      <h2 className="font-mono text-xl md:text-2xl font-light mb-2 group-hover:text-[#c81e1e] transition-colors">
                        {caso.title}
                      </h2>
                      <p className="text-[#1a1a1a]/50 text-sm leading-relaxed">
                        {caso.description}
                      </p>
                    </div>
                    <span className="text-[#1a1a1a]/30 font-mono text-sm whitespace-nowrap">
                      {caso.result}
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-white text-3xl md:text-4xl leading-[1.2] font-light mb-8"
            >
              ¿Tu proyecto podría estar acá?
            </motion.h2>
            <motion.a
              href="/contacto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group inline-flex items-center gap-4 text-white font-mono text-sm"
            >
              <span className="border-b border-white/30 pb-1 group-hover:border-[#c81e1e] transition-colors">
                Conversemos
              </span>
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#c81e1e] group-hover:border-[#c81e1e] transition-all">
                ↗
              </span>
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
