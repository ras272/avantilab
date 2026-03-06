import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SmoothScroll } from '@/components/SmoothScroll'
import Loader from '@/components/Loader'
import './globals.css'

export const metadata: Metadata = {
  title: 'Avanti Lab | Comunicación Estratégica',
  description: 'Somos el laboratorio donde la estrategia se convierte en impacto. Transformamos ideas en resultados reales a través de comunicación estratégica, creatividad y método.',
  keywords: ['comunicación estratégica', 'agencia', 'LATAM', 'branding', 'marketing', 'estrategia'],
  authors: [{ name: 'Avanti Lab' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Avanti Lab | Comunicación Estratégica',
    description: 'El laboratorio donde la estrategia se convierte en impacto.',
    type: 'website',
    locale: 'es_LA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <Loader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
