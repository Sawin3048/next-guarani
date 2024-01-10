import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guarní',
  description: 'La mejor página para aprender un poco de guarani en un formato moderno',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className + ' pt-4'}>{children}</body>
    </html>
  )
}
