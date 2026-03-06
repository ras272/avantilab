'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Mostrar loader por 2.5 segundos
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
        >
          {/* Logo container */}
          <div className="relative flex flex-col items-center">
            {/* Logo con animación */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                src="/logo.png"
                alt="Avanti Lab"
                className="h-32 w-auto"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Barra de progreso */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 w-48 h-0.5 bg-[#1a1a1a]/10 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full bg-[#c81e1e]"
              />
            </motion.div>
          </div>

          {/* Cortina de salida */}
          <motion.div
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 0 }}
            className="absolute inset-0 bg-[#1a1a1a]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
