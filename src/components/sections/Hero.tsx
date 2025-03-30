import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Suspense } from 'react'
import Lang from '@/components/Lang'

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

export default function Hero ({ en }: { en: boolean }) {
  return (
    <section
      id='hero'
      aria-label='hero'
      className='w-full flex max-[1000px]:flex-col-reverse items-center min-[1000px]:justify-between max-[700px]:gap-20 min-[1000px]:h-screen max-[1000px]:my-12 relative'
    >
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
              className='scroll-smooth'
            >
              <Button
                variant='outline'
                size='lg'
                className='text-lg flex gap-4 p-4'
                tabIndex={-1}
              >
                <Image
                  src={button.img}
                  width={25}
                  height={25}
                  alt={button.text}
                  priority
                  className='opacity-0 animate-icon-pop [animation-delay:500ms]'
                />
                {button.text}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <Suspense fallback={<div className='w-[300px] h-[300px] rounded-full bg-background' />}>
        <Image
          src='/personal/foto.webp'
          width={300}
          height={300}
          alt='Ronald Zamora - Software Developer'
          priority
          className='rounded-full border-4 border-primary opacity-0 animate-image-enter [animation-delay:300ms]'
        />
      </Suspense>
      <div className='absolute bottom-12 max-[1000px]:hidden w-full flex justify-center'>
        <Link
          href='#experience'
          className='flex items-center gap-1.5 opacity-0 animate-fade-in [animation-delay:1000ms]'
          aria-label='Scroll to experience section'
        >
          <p className='text-primary text-lg font-bold'>
            {en ? 'Experience' : 'Experiencia'}
          </p>
          <Image
            src='/icons/arrow-down.svg'
            width={27}
            height={27}
            alt='Arrow pointing down'
            className='animate-soft-bounce'
          />
        </Link>
      </div>
    </section>
  )
}