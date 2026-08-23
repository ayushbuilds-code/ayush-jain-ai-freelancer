import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const devanagari = Noto_Sans_Devanagari({ subsets: ['devanagari'], variable: '--font-devanagari' })

export const metadata: Metadata = {
  metadataBase: new URL('https://ayushdungarwal.com'),
  title: 'Ayush Jain | AI Freelancer & Automation Specialist',
  description: 'Ayush Jain builds practical AI systems that automate business processes, engage customers, and help businesses scale.',
  generator: 'v0.app',
  openGraph: {
    title: 'Ayush Jain | AI Freelancer & Automation Specialist',
    description: 'Practical AI systems for business automation, customer engagement, and intelligent workflows.',
    type: 'website',
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0d101c' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${geist.variable} ${geistMono.variable} ${devanagari.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
