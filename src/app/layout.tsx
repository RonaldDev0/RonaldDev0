// Imports
import { ReactNode } from 'react'

// Components
import { NavBarr } from '@/components'

// Styles
import { Inter } from 'next/font/google'
import '@/scss/globals.scss'

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
