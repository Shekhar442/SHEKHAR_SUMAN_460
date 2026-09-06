import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shekhar-suman-460.vercel.app',
  ),
  title: {
    default: 'Shekhar Suman | AI & Machine Learning Engineer',
    template: '%s | Shekhar Suman',
  },
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
    images: [
      {
        url: '/Shekhar_Light.png',
        width: 1200,
        height: 1200,
        alt: 'Shekhar Suman',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shekhar Suman | AI & Machine Learning Engineer',
    description:
      'ML Engineer at Sveltetech: computer vision, NLP, GenAI, and production systems. Indian Air Force veteran.',
    images: ['/Shekhar_Light.png'],
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

const themeInitScript = `(function(){try{var k='portfolio-theme';var s=localStorage.getItem(k);var theme=(s==='light'||s==='dark')?s:'dark';var r=document.documentElement;r.setAttribute('data-theme',theme);r.classList.toggle('dark',theme==='dark');r.style.colorScheme=theme;}catch(e){var r=document.documentElement;r.setAttribute('data-theme','dark');r.classList.add('dark');r.style.colorScheme='dark';}})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-background"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
