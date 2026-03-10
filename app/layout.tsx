import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brasileirando no Chile | Passeios Privativos em Português',
  description: 'Passeios privativos no Chile com atendimento em português.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}