'use client'

import { useEffect, useRef, useCallback, memo } from 'react'

interface ScrollAnimationWrapperProps {
  children: React.ReactNode
  priority?: boolean
}

const ScrollAnimationWrapper = memo(({
  children,
  priority = false
}: ScrollAnimationWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          entry.target.classList.remove(
            'opacity-0',
            'translate-y-6',
            'scale-95'
          )
          entry.target.classList.add(
            'opacity-100',
            'translate-y-0',
            'scale-100'
          )
          entry.target.setAttribute('aria-hidden', 'false')

          // Restaurar la tabulación de los elementos focusables
          const focusableElements = entry.target.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
          )
          focusableElements.forEach(el => {
            if (el instanceof HTMLElement) {
              el.tabIndex = 0
            }
          })
        })
      } else if (!priority) {
        requestAnimationFrame(() => {
          entry.target.classList.remove(
            'opacity-100',
            'translate-y-0',
            'scale-100'
          )
          entry.target.classList.add(
            'opacity-0',
            'translate-y-6',
            'scale-95'
          )
          entry.target.setAttribute('aria-hidden', 'true')

          // Remover de la tabulación los elementos focusables
          const focusableElements = entry.target.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
          )
          focusableElements.forEach(el => {
            if (el instanceof HTMLElement) {
              el.tabIndex = -1
            }
          })
        })
      }
    })
  }, [priority])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: priority ? 0 : 0.05,
      rootMargin: priority ? '0px' : '0px 0px -50px 0px'
    })

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)

      // Configuración inicial de elementos focusables
      if (!priority) {
        const focusableElements = currentRef.querySelectorAll(
          'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        )
        focusableElements.forEach(el => {
          if (el instanceof HTMLElement) {
            el.tabIndex = -1
          }
        })
      }
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
      observer.disconnect()
    }
  }, [handleIntersection, priority])

  return (
    <div
      ref={ref}
      className={`
        ${priority ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}
        transition-all
        duration-300
        ease-out
        [transition-timing-function:cubic-bezier(0.2,0,0,1)]
        motion-reduce:transition-none
        motion-reduce:opacity-100
        motion-reduce:translate-y-0
        motion-reduce:scale-100
        w-full
      `}
      aria-hidden={!priority}
      role='region'
      aria-live={priority ? 'polite' : 'off'}
    >
      {children}
    </div>
  )
})

ScrollAnimationWrapper.displayName = 'ScrollAnimationWrapper'

export default ScrollAnimationWrapper