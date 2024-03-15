import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const inter = Nunito({ subsets: ['latin'] })
export const viewport: Viewport = {
  userScalable:false
}
export const metadata: Metadata = {
  title: 'Guaraní',
  description: 'La mejor página para aprender un poco de guarani en un formato moderno',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className + '  bg-cover '} style={{background:"url(/bg2.svg) ", backgroundSize:"300px" }}>{children}</body>
    </html>
  )
}
