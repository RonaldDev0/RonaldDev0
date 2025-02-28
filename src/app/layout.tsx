import { Poppins } from 'next/font/google'

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
    'Soy Ronald Zamora, un apasionado Software Developer especializado en desarrollar aplicaciones web modernas y escalables. Me encanta trabajar con tecnologías de vanguardia y compartir mis proyectos y aprendizajes.',
  authors: [{ name: 'Ronald Zamora', url: 'https://ronaldzamora.vercel.app/' }],
  keywords: [
    'Software Developer',
    'Desarrollo Web',
    'Fullstack Developer',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
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
    'Dart'
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
      </body>
    </html>
  )
}
