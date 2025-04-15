'use client'

import { useEffect } from 'react'

export default function SocialIconsPreload () {
  useEffect(() => {
    const preloadIcons = () => {
      const icons = [
        { href: '/icons/linkedin.svg', type: 'image/svg+xml' },
        { href: '/icons/github.svg', type: 'image/svg+xml' },
        { href: '/icons/file.svg', type: 'image/svg+xml' }
      ]

      // Precargar solo cuando el componente está en el viewport
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            icons.forEach(({ href }) => {
              const img = new Image()
              img.src = href
            })
            observer.disconnect()
          }
        })
      })

      observer.observe(document.getElementById('social-icons')!)
    }

    preloadIcons()
  }, [])

  return <div id='social-icons' className='hidden' />
}
