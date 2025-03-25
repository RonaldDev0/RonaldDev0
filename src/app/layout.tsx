import { Poppins } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Ronald Zamora | Software Developer',
  description:
    'I\'m Ronald Zamora, a passionate software developer specializing in developing modern, scalable web applications. I love working with cutting-edge technologies and sharing my projects and learnings.',
  metadataBase: new URL('https://ronaldzamora.vercel.app/'),
  openGraph: {
    title: 'Ronald Zamora | Software Developer',
    description: '...',
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
      <body
        className={`
          ${poppins.className} ${poppins.style}antialiased
          min-[1600px]:px-96
          max-[1600px]:px-32
          max-[700px]:px-6
        `}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
