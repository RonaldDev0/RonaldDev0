import { Poppins } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

import './globals.css'

import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-poppins',
  fallback: ['system-ui', 'arial']
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  interactiveWidget: 'resizes-content'
}

export const metadata: Metadata = {
  title: 'Ronald Zamora | Software Developer',
  description:
    'I\'m Ronald Zamora, a passionate software developer specializing in developing modern, scalable web applications. I love working with cutting-edge technologies and sharing my projects and learnings.',
  metadataBase: new URL('https://ronaldzamora.vercel.app/'),
  openGraph: {
    title: 'Ronald Zamora | Software Developer',
    description:
      'I\'m Ronald Zamora, a passionate software developer specializing in developing modern, scalable web applications. I love working with cutting-edge technologies and sharing my projects and learnings.',
    url: 'https://ronaldzamora.vercel.app/',
    siteName: 'Ronald Zamora | Software Developer',
    images: [
      {
        url: 'https://ronaldzamora.vercel.app/preview.webp',
        width: 1200,
        height: 630,
        alt: 'Ronald Zamora | Software Developer'
      }
    ],
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ronald Zamora | Software Developer',
    description:
      'I\'m Ronald Zamora, a passionate software developer specializing in developing modern, scalable web applications. I love working with cutting-edge technologies and sharing my projects and learnings.',
    creator: '@RonaldDev0',
    images: ['https://ronaldzamora.vercel.app/preview.webp']
  },
  authors: [{ name: 'Ronald Zamora', url: 'https://ronaldzamora.vercel.app/' }],
  keywords: [
    'Software Developer',
    'Desarrollo Web',
    'Fullstack Developer',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Next',
    'Node.js',
    'Node',
    'Bun.js',
    'Bun',
    'SQL',
    'REST API',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'AWS',
    'CI/CD',
    'Git',
    'Agile',
    'Scrum',
    'Microservices',
    'Jest',
    'Supabase',
    'Flutter',
    'Dart',
    'Ronald Zamora',
    'RonaldDev0',
    'Ronald',
    'Zamora',
    'Ronald Zamora Software Developer'
  ]
}

export default function RootLayout ({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en' className='dark'>
      <head>
        <link
          rel='preload'
          href='/personal/foto.webp'
          as='image'
          type='image/webp'
          fetchPriority='high'
        />
        <link
          rel='preload'
          href='/icons/linkedin.svg'
          as='image'
          type='image/svg+xml'
          fetchPriority='low'
        />
        <link
          rel='preload'
          href='/icons/github.svg'
          as='image'
          type='image/svg+xml'
          fetchPriority='low'
        />
        <link
          rel='preload'
          href='/icons/file.svg'
          as='image'
          type='image/svg+xml'
          fetchPriority='low'
        />
      </head>
      <body
        className={`
          ${poppins.className} ${poppins.style}antialiased
          min-[1600px]:px-96
          max-[1600px]:px-32
          max-[700px]:px-6
        `}
      >
        {children}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
          strategy='afterInteractive'
          defer
        />
        <Script id='google-analytics' strategy='afterInteractive' defer>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
