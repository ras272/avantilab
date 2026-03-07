'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contacto() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [email, setEmail] = useState('')
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
              <div className="bg-white border border-[#1a1a1a]/10 overflow-hidden p-6">
                {/* Header del calendario */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-lg font-medium capitalize">{currentMonth}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentMonthOffset(prev => prev - 1)}
                      disabled={currentMonthOffset === 0}
                      className="w-8 h-8 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center text-[#1a1a1a]/40 hover:border-[#c81e1e] hover:text-[#c81e1e] transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#1a1a1a]/10 disabled:hover:text-[#1a1a1a]/40"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => setCurrentMonthOffset(prev => prev + 1)}
                      className="w-8 h-8 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center text-[#1a1a1a]/40 hover:border-[#c81e1e] hover:text-[#c81e1e] transition-colors"
                    >
                      →
                    </button>
                  </div>
                </div>

                {/* Días de la semana */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
                    <div key={day} className="text-center text-xs text-[#1a1a1a]/40 font-sans py-2">
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
                          ? 'bg-[#c81e1e] text-white'
                          : isToday(day)
                          ? 'border-2 border-[#c81e1e] text-[#c81e1e]'
                          : isPastDay(day)
                          ? 'text-[#1a1a1a]/20 cursor-not-allowed'
                          : 'hover:bg-[#c81e1e]/10 text-[#1a1a1a]/70 hover:text-[#c81e1e]'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-[#1a1a1a]/10">
                  {selectedDate ? (
                    <p className="text-[#1a1a1a]/70 text-sm mb-4">
                      Fecha seleccionada: <span className="font-medium text-[#c81e1e] capitalize">{formatSelectedDate()}</span>
                    </p>
                  ) : (
                    <p className="text-[#1a1a1a]/50 text-sm mb-4">Seleccioná un día para agendar una reunión de 30 minutos.</p>
                  )}
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 text-white text-center font-sans text-sm rounded-full transition-colors ${
                      selectedDate
                        ? 'bg-[#c81e1e] hover:bg-[#a01818]'
                        : 'bg-[#1a1a1a]/30 hover:bg-[#1a1a1a]/50'
                    }`}
                  >
                    {selectedDate ? 'Confirmar por WhatsApp' : 'Agendar por WhatsApp'}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="py-8 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <span className="text-white/60 font-sans text-sm">
              ¿Preferís escribirnos?
            </span>
            <a
              href="mailto:hola@avanti-lab.com"
              className="text-white font-sans text-sm hover:text-[#c81e1e] transition-colors"
            >
              hola@avanti-lab.com
            </a>
          </div>

          {/* Mini form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = `mailto:hola@avanti-lab.com?subject=Contacto desde web&body=Mi email: ${email}`
            }}
            className="flex items-center gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              className="bg-transparent border-b border-white/20 py-2 px-1 text-white font-sans text-sm placeholder:text-white/30 focus:outline-none focus:border-[#c81e1e] transition-colors w-48"
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
