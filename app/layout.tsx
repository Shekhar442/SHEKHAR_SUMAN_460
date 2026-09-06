import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Shekhar Suman | AI & Machine Learning Engineer',
  description:
    'Machine Learning Engineer at Sveltetech Technology Pvt. Ltd. and Indian Air Force veteran (20 years). Specialized in computer vision, NLP, generative AI, and deep learning; nervousness detection system at 95.49% accuracy.',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'Computer Vision',
    'NLP',
    'Deep Learning',
    'Generative AI',
    'Python',
    'TensorFlow',
    'PyTorch',
    'Sveltetech',
  ],
  authors: [{ name: 'Shekhar Suman' }],
  openGraph: {
    title: 'Shekhar Suman | AI & Machine Learning Engineer',
    description:
      'ML Engineer at Sveltetech: computer vision, NLP, GenAI, and production systems. Indian Air Force veteran.',
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

const themeInitScript = `(function(){try{var k='portfolio-theme';var s=localStorage.getItem(k);var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var r=document.documentElement;if(d)r.classList.add('dark');else r.classList.remove('dark');}catch(e){}})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
