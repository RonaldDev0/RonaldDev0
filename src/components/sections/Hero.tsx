import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Suspense, memo, useEffect } from 'react'
import Lang from '@/components/Lang'
import SocialIconsPreload from '@/components/SocialIconsPreload'

type IButton = {
  text: string,
  ariaLabel: string,
  href: string,
  img: string
}

const buttons: IButton[] = [
  {
    text: 'LinkedIn',
    ariaLabel: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/ronald-zamora-524094353/',
    img: '/icons/linkedin.svg'
  },
  {
    text: 'GitHub',
    ariaLabel: 'GitHub Profile',
    href: 'https://github.com/RonaldDev0',
    img: '/icons/github.svg'
  },
  {
    text: 'Resume',
    ariaLabel: 'View Resume',
    href: '/resume',
    img: '/icons/file.svg'
  }
]

const Hero = memo(function Hero ({ en }: { en: boolean }) {
  useEffect(() => {
    // Precargar la imagen principal cuando el componente está en el viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = document.createElement('img')
          img.src = '/personal/foto.webp'
          observer.disconnect()
        }
      })
    })

    observer.observe(document.getElementById('hero-image')!)
  }, [])

  return (
    <section
      id='hero'
      aria-label='hero'
      className='w-full flex max-[1000px]:flex-col-reverse items-center min-[1000px]:justify-between max-[700px]:gap-20 min-[1000px]:h-screen max-[1000px]:my-12 relative'
    >
      <SocialIconsPreload />
      <Lang en={en} />
      <div className='space-y-6'>
        <div className='max-[1000px]:pl-4'>
          <p className='text-6xl font-bold opacity-0 animate-fade-in [animation-delay:100ms] [animation-timing-function:cubic-bezier(0.25,0.1,0.25,1)]'>
            {en ? 'I\'m' : 'Soy'}
          </p>
          <h1 className='text-6xl font-bold opacity-0 animate-fade-in [animation-delay:200ms] [animation-timing-function:cubic-bezier(0.25,0.1,0.25,1)]' id='hero-heading'>
            Ronald Zamora
          </h1>
          <p className='text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent opacity-0 animate-scale-in [animation-delay:300ms]'>
            {en ? 'Software Developer' : 'Desarrollador de software'}
          </p>
        </div>
        <meta name='description' content='Ronald Zamora - Software Developer portfolio. Explore my projects, experience, and skills.' />
        <div className='space-x-2 flex opacity-0 animate-slide-in [animation-delay:400ms]'>
          {buttons.map(button => (
            <Link
              key={button.text}
              href={
                button.text !== 'Resume'
                  ? button.href
                  : (en ? `/en/${button.href}` : `/es/${button.href}`)
              }
              target='_blank'
              aria-label={button.ariaLabel}
              className='scroll-smooth min-h-[44px] min-w-[44px]'
              prefetch={false}
            >
              <Button
                variant='outline'
                size='lg'
                className='min-h-[44px] min-w-[44px]'
                tabIndex={-1}
              >
                <Image
                  src={button.img}
                  width={25}
                  height={25}
                  alt=''
                  aria-hidden='true'
                  priority
                  className='opacity-0 animate-icon-pop [animation-delay:500ms]'
                  loading='eager'
                  fetchPriority='high'
                />
                <span className='sr-only'>{button.text}</span>
                <span>{button.text}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <Suspense fallback={<div className='w-[300px] h-[300px] rounded-full bg-background animate-pulse' />}>
        <div id='hero-image'>
          <Image
            src='/personal/foto.webp'
            width={300}
            height={300}
            alt={en ? 'Ronald Zamora - Software Developer' : 'Ronald Zamora - Desarrollador de software'}
            priority
            className='rounded-full border-4 border-primary opacity-0 animate-image-enter [animation-delay:300ms]'
            loading='eager'
            quality={75}
            fetchPriority='high'
            sizes='(max-width: 768px) 200px, (max-width: 1200px) 250px, 300px'
            placeholder='blur'
            blurDataURL='data:image/webp;base64,UklGRiIAAABXRUJQVlA4ICwAAACwAgCdASoEAAQAAVAfJZgCdAD0oJaQAA/vuUAAA=='
          />
        </div>
      </Suspense>
      <div className='absolute bottom-12 max-[1000px]:hidden w-full flex justify-center'>
        <Link
          href='#experience'
          className='min-h-[44px] min-w-[44px] flex items-center gap-6'
          aria-label={en ? 'Scroll to experience section' : 'Desplazarse a la sección de experiencia'}
        >
          <p className='text-primary text-lg font-bold'>
            {en ? 'Experience' : 'Experiencia'}
          </p>
          <Image
            src='/icons/arrow-down.svg'
            width={27}
            height={27}
            alt=''
            aria-hidden='true'
            className='animate-soft-bounce'
            loading='eager'
            fetchPriority='high'
          />
        </Link>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero