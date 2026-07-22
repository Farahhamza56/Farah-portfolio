import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Farah Hamza Ghadady — Computer & Data Science Student',
  description:
    'Portfolio of Farah Hamza Ghadady, a Computer & Data Science student at Alexandria University passionate about software engineering, mobile development, and data science.',
  generator: 'v0.app',
  keywords: [
    'Farah Hamza Ghadady',
    'Computer Science',
    'Data Science',
    'Software Engineer',
    'Android Developer',
    'Kotlin',
    'Python',
    'Machine Learning',
    'Alexandria University',
    'Portfolio',
  ],
  authors: [{ name: 'Farah Hamza Ghadady' }],
  openGraph: {
    title: 'Farah Hamza Ghadady — Computer & Data Science Student',
    description:
      'Portfolio of Farah Hamza Ghadady, a Computer & Data Science student passionate about software engineering, mobile development, and data science.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
