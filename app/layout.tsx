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
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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
