// Imports
import { ReactNode } from 'react'

// Components
import { NavBarr } from '@/components'

// Styles
import '@/scss/normalize.scss'
import '@/scss/globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const metadata = { title: 'Ronald Zamora 👨‍💻 | Frontend' }

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBarr />
        {children}
      </body>
    </html>
  )
}
