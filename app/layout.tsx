import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'World Clocks - Global Time Tracker',
  description: 'A futuristic world clock app displaying multiple city times with customizable settings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
