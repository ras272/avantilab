'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contacto() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [currentMonthOffset, setCurrentMonthOffset] = useState(0)

  // Generar días del mes
  const today = new Date()
  const viewDate = new Date(today.getFullYear(), today.getMonth() + currentMonthOffset, 1)
  const currentMonth = viewDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay()
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const handleDateSelect = (day: number) => {
    const selected = new Date(viewDate.getFullYear(), viewDate.getMonth(), day)
    if (selected >= today || selected.toDateString() === today.toDateString()) {
      setSelectedDate(selected)
    }
  }

  const formatSelectedDate = () => {
    if (!selectedDate) return ''
    return selectedDate.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })
  }

  const getWhatsAppLink = () => {
    const baseUrl = 'https://wa.me/595993330623'
    const message = selectedDate
      ? `Hola! Quiero agendar una reunión para el ${formatSelectedDate()}`
      : 'Hola! Quiero agendar una reunión'
    return `${baseUrl}?text=${encodeURIComponent(message)}`
  }

  const isPastDay = (day: number) => {
    const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day)
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    return date < todayStart
  }

  const isToday = (day: number) => {
    return viewDate.getMonth() === today.getMonth() &&
           viewDate.getFullYear() === today.getFullYear() &&
           day === today.getDate()
  }

  const isSelected = (day: number) => {
    if (!selectedDate) return false
    return selectedDate.getDate() === day &&
           selectedDate.getMonth() === viewDate.getMonth() &&
           selectedDate.getFullYear() === viewDate.getFullYear()
  }

  return (
    <section id="contacto" className="relative overflow-hidden" ref={ref}>
      {/* Número grande de fondo */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.02 } : {}}
        transition={{ duration: 1 }}
        className="absolute right-0 top-1/3 -translate-y-1/2 text-[50vw] font-mono font-bold text-[#1a1a1a] leading-none pointer-events-none select-none z-0"
      >
        08
      </motion.span>

      {/* Sección principal */}
      <div className="py-32 px-6 bg-[#FAFAF9] relative z-10">
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
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight font-light mb-6">
                Hablemos del próximo
                <br />
                paso de tu <span className="italic text-[#c81e1e]">marca</span>.
              </h2>

              <p className="text-[#1a1a1a]/60 text-base leading-relaxed mb-4">
                Cada marca tiene un punto de partida. En Avanti Lab, evaluamos las
                oportunidades de crecimiento desde el diagnóstico.
              </p>

              <p className="text-[#1a1a1a]/80 text-base leading-relaxed mb-8">
                Conversemos sobre tu marca.
              </p>

              {/* Info de contacto */}
              <div className="space-y-4 pt-8 border-t border-[#1a1a1a]/10">
                <div>
                  <span className="text-[#1a1a1a]/30 font-sans text-xs uppercase tracking-wider block mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:hola@avanti-lab.com"
                    className="font-sans text-lg hover:text-[#c81e1e] transition-colors"
                  >
                    hola@avanti-lab.com
                  </a>
                </div>
                <div>
                  <span className="text-[#1a1a1a]/30 font-sans text-xs uppercase tracking-wider block mb-1">
                    WhatsApp
                  </span>
                  <a
                    href="https://wa.me/595993330623"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-lg hover:text-[#c81e1e] transition-colors"
                  >
                    +595 993 330623
                  </a>
                </div>
                <div>
                  <span className="text-[#1a1a1a]/30 font-sans text-xs uppercase tracking-wider block mb-1">
                    Ubicación
                  </span>
                  <span className="font-sans text-lg">Asunción, Paraguay</span>
                </div>
              </div>
            </motion.div>

            {/* Columna derecha - Calendario placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-6 md:col-start-7"
            >
              <div className="bg-gradient-to-br from-[#c81e1e] to-[#9a1717] rounded-3xl overflow-hidden p-8 shadow-2xl shadow-[#c81e1e]/30">
                {/* Header del calendario */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-xl font-medium capitalize text-white">{currentMonth}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentMonthOffset(prev => prev - 1)}
                      disabled={currentMonthOffset === 0}
                      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white hover:text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-white/20 disabled:hover:text-white/60 disabled:hover:bg-transparent"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => setCurrentMonthOffset(prev => prev + 1)}
                      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white hover:text-white hover:bg-white/10 transition-all"
                    >
                      →
                    </button>
                  </div>
                </div>

                {/* Días de la semana */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
                    <div key={day} className="text-center text-xs text-white/50 font-sans py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Días del mes */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Espacios vacíos antes del primer día */}
                  {Array.from({ length: firstDayOfMonth }, (_, i) => (
                    <div key={`empty-${i}`} className="aspect-square" />
                  ))}
                  {/* Días */}
                  {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => handleDateSelect(day)}
                      disabled={isPastDay(day)}
                      className={`aspect-square rounded-full flex items-center justify-center text-sm font-sans transition-all ${
                        isSelected(day)
                          ? 'bg-white text-[#c81e1e] font-medium shadow-lg'
                          : isToday(day)
                          ? 'border-2 border-white text-white font-medium'
                          : isPastDay(day)
                          ? 'text-white/20 cursor-not-allowed'
                          : 'hover:bg-white/20 text-white/80 hover:text-white'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  {selectedDate ? (
                    <p className="text-white/80 text-sm mb-4">
                      Fecha seleccionada: <span className="font-medium text-white capitalize">{formatSelectedDate()}</span>
                    </p>
                  ) : (
                    <p className="text-white/60 text-sm mb-4">Seleccioná un día para agendar una reunión.</p>
                  )}
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 font-sans text-sm rounded-full transition-all ${
                      selectedDate
                        ? 'bg-white text-[#c81e1e] font-medium hover:bg-white/90 shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {selectedDate ? 'Confirmar por WhatsApp' : 'Agendar por WhatsApp'}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  )
}
