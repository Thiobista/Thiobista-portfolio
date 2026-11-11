import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thiobista Gedefaw | Software Engineer',
  description:
    'Thiobista Gedefaw, a software engineer building scalable SaaS backends in Go and PostgreSQL and modern frontends in Next.js. Creator of GymERP, a multi-tenant gym management platform.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
