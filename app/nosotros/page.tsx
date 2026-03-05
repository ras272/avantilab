'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const equipo = [
  {
    nombre: 'Nombre Apellido',
    rol: 'Director Estratégico',
    bio: 'Más de 15 años liderando comunicación política y corporativa en LATAM.',
  },
  {
    nombre: 'Nombre Apellido',
    rol: 'Directora Creativa',
    bio: 'Especialista en narrativas de marca y producción audiovisual.',
  },
  {
    nombre: 'Nombre Apellido',
    rol: 'Head of Digital',
    bio: 'Estratega digital con foco en datos, métricas y performance.',
  },
  {
    nombre: 'Nombre Apellido',
    rol: 'Consultor Senior',
    bio: 'Experto en gestión de crisis y comunicación institucional.',
  },
]

const valores = [
  {
    id: '01',
    title: 'Hacedores',
    description: 'No esperamos que las cosas pasen. Las hacemos pasar.',
  },
  {
    id: '02',
    title: 'Excelencia',
    description: 'Cada detalle importa. Nos obsesionan los estándares altos.',
  },
  {
    id: '03',
    title: 'Transparencia',
    description: 'Hablamos claro, sin vueltas. La confianza se construye con verdad.',
  },
  {
    id: '04',
    title: 'Crecimiento',
    description: 'Aprendemos, evolucionamos, nos reinventamos constantemente.',
  },
]

export default function NosotrosPage() {
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
              className="text-[#c81e1e] font-mono text-sm mb-6 block"
            >
              Nosotros
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter font-light text-[#1a1a1a] max-w-5xl"
            >
              El laboratorio
              <br />
              donde las ideas
              <br />
              <span className="italic">se transforman</span>.
            </motion.h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-6"
              >
                <p className="font-mono text-xl md:text-2xl leading-[1.4] font-light text-[#1a1a1a]">
                  Avanti Lab nace de la convicción de que comunicar es transformar.
                  Somos un equipo multidisciplinario que combina estrategia, datos
                  y creatividad para construir narrativas que conectan.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-4 md:col-start-8"
              >
                <p className="text-[#1a1a1a]/60 text-sm leading-relaxed mb-6">
                  No somos una agencia tradicional. Somos socios estratégicos que
                  acompañan, ejecutan y hacen que las cosas pasen. Cada cliente
                  es un proyecto único que abordamos con rigor metodológico y
                  pasión por los detalles.
                </p>
                <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">
                  Trabajamos con líderes, empresas e instituciones que entienden
                  que la comunicación es un activo estratégico.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-24 px-6 bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline gap-4 mb-16">
              <span className="text-[#c81e1e] font-mono text-sm">01</span>
              <span className="text-white/30 font-mono text-sm">Valores</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-white text-3xl md:text-4xl leading-[1.2] font-light max-w-2xl mb-16"
            >
              La cultura que nos mueve.
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {valores.map((valor, i) => (
                <motion.div
                  key={valor.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-t border-white/10 pt-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[#c81e1e] font-mono text-xs">{valor.id}</span>
                    <div>
                      <h3 className="text-white font-mono text-lg mb-2">{valor.title}</h3>
                      <p className="text-white/40 text-sm">{valor.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline gap-4 mb-16">
              <span className="text-[#c81e1e] font-mono text-sm">02</span>
              <span className="text-[#1a1a1a]/30 font-mono text-sm">Equipo</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[#1a1a1a] text-3xl md:text-4xl leading-[1.2] font-light max-w-2xl mb-16"
            >
              Las personas detrás.
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-6">
              {equipo.map((persona, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-[#1a1a1a]/5 mb-4" />
                  <span className="text-[#c81e1e] font-mono text-xs">{persona.rol}</span>
                  <h3 className="font-mono text-lg mt-1 mb-2">{persona.nombre}</h3>
                  <p className="text-[#1a1a1a]/50 text-sm leading-relaxed">{persona.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]/10">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-3xl md:text-4xl leading-[1.2] font-light mb-8"
            >
              ¿Querés conocernos más?
            </motion.h2>
            <motion.a
              href="/contacto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 font-mono text-sm border-b border-[#1a1a1a]/30 pb-1 hover:border-[#c81e1e] transition-colors"
            >
              Hablemos
              <span>↗</span>
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
