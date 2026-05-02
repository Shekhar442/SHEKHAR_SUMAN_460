import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Shekhar Suman | AI & Machine Learning Engineer',
  description:
    'AI & Machine Learning Engineer with 4+ years of data science experience and 20 years of Indian Air Force service in logistics and operations. Specialized in computer vision, NLP, and deep learning; nervousness detection system at 95.49% accuracy.',
  keywords: ['AI Engineer', 'Machine Learning', 'Computer Vision', 'NLP', 'Deep Learning', 'Python', 'TensorFlow', 'PyTorch'],
  authors: [{ name: 'Shekhar Suman' }],
  openGraph: {
    title: 'Shekhar Suman | AI & Machine Learning Engineer',
    description:
      'AI & ML engineer: computer vision, NLP, deep learning, and production systems. Ex–Indian Air Force SNCO.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
