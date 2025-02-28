import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Suspense } from 'react'

export default function Hero () {
  return (
    <section
      id='hero'
      aria-label='hero'
      className='w-full flex max-[1000px]:flex-col-reverse items-center min-[1000px]:justify-between max-[700px]:gap-20 min-[1000px]:h-screen max-[1000px]:my-12 relative'
    >
      <div className='space-y-6'>
        <p className='text-6xl font-bold'>
          I&apos;m
        </p>
        <h1 className='text-6xl font-bold' id='hero-heading'>
          Ronald Zamora
        </h1>
        <p className='text-3xl font-bold text-primary'>
          Software Developer
        </p>
        <meta name='description' content='Ronald Zamora - Software Developer portfolio. Explore my projects, experience, and skills.' />
        <div className='space-x-2 flex'>
          <Link href='https://www.linkedin.com/in/ronald-zamora-524094353/' target='_blank' rel='noopener' aria-label='LinkedIn Profile'>
            <Button
              variant='outline'
              size='lg'
              className='text-lg flex gap-4 p-4'
              tabIndex={-1}
            >
              <Image
                src='/icons/linkedin.svg'
                width={25}
                height={25}
                alt='LinkedIn icon'
                priority
              />
              LinkedIn
            </Button>
          </Link>
          <Link href='https://github.com/RonaldDev0' target='_blank' rel='noopener' aria-label='GitHub Profile'>
            <Button
              variant='outline'
              size='lg'
              className='text-lg flex gap-4 p-4'
              tabIndex={-1}
            >
              <Image
                src='/icons/github.svg'
                width={25}
                height={25}
                alt='GitHub icon'
                priority
              />
              GitHub
            </Button>
          </Link>
          <Link href='/resume' target='_blank' aria-label='View Resume'>
            <Button
              variant='outline'
              size='lg'
              className='text-lg flex gap-4 p-4'
              tabIndex={-1}
            >
              <Image
                src='/icons/file.svg'
                width={25}
                height={25}
                alt='Resume file icon'
                priority
              />
              Resume
            </Button>
          </Link>
        </div>
      </div>
      <Suspense fallback={<div className='w-[300px] h-[300px] rounded-full bg-background' />}>
        <Image
          src='/personal/foto.webp'
          width={300}
          height={300}
          alt='Ronald Zamora - Software Developer'
          priority
          className='rounded-full border-4 border-primary'
        />
      </Suspense>
      <div className='absolute bottom-12 max-[1000px]:hidden w-full flex justify-center'>
        <Link href='#experience' className='flex items-center gap-1.5' aria-label='Scroll to experience section'>
          <p className='text-primary text-lg font-bold'>
            Experience
          </p>
          <Image
            src='/icons/arrow-down.svg'
            width={27}
            height={27}
            alt='Arrow pointing down'
          />
        </Link>
      </div>
    </section>
  )
}