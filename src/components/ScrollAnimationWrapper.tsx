'use client'

import { useEffect, useRef, useCallback, memo } from 'react'

const ScrollAnimationWrapper = memo(({
  children
}: {
  children: React.ReactNode
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
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
      } else {
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
      }
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    })

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [handleIntersection])

  return (
    <div
      ref={ref}
      className='
        opacity-0
        translate-y-6
        scale-95
        transition-all
        duration-300
        ease-out
        [transition-timing-function:cubic-bezier(0.2,0,0,1)]
        motion-reduce:transition-none
        motion-reduce:opacity-100
        motion-reduce:translate-y-0
        motion-reduce:scale-100
        w-full
      '
    >
      {children}
    </div>
  )
})

ScrollAnimationWrapper.displayName = 'ScrollAnimationWrapper'

export default ScrollAnimationWrapper