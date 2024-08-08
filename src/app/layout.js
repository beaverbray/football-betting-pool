// src/app/layout.js
import '@/styles/globals.css'

export const metadata = {
  title: 'Football Betting Pool',
  description: 'A Next.js app for managing a football betting pool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  )
}