import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero () {
  return (
    <div className='w-full flex max-[1000px]:flex-col-reverse items-center min-[1000px]:justify-between max-[700px]:gap-20 min-[1000px]:h-screen max-[1000px]:my-12'>
      <div className='space-y-6'>
        <p className='text-6xl font-bold'>
          I&apos;m
        </p>
        <p className='text-6xl font-bold'>
          Ronald Zamora
        </p>
        <p className='text-3xl font-bold text-primary'>
          Software Developer
        </p>
        <div className='space-x-2 flex'>
          <Link href='https://www.linkedin.com/in/ronald-zamora-524094353/' target='_blank'>
            <Button
              variant='outline'
              size='lg'
              className='text-lg flex gap-4 p-4'
            >
              <Image
                src='/linkedin.svg'
                width='25'
                height='25'
                alt='file'
              />
              LinkedIn
            </Button>
          </Link>
          <Link href='https://github.com/RonaldDev0' target='_blank'>
            <Button
              variant='outline'
              size='lg'
              className='text-lg flex gap-4 p-4'
            >
              <Image
                src='/github.svg'
                width='25'
                height='25'
                alt='file'
              />
              GitHub
            </Button>
          </Link>
          <Link href='/resume' target='_blank'>
            <Button
              variant='outline'
              size='lg'
              className='text-lg flex gap-4 p-4'
            >
              <Image
                src='/file.svg'
                width='25'
                height='25'
                alt='file'
              />
              Resume
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src='/foto.webp'
          width='300'
          height='300'
          alt='picture'
          loading='eager'
          className='rounded-full border-4 border-primary'
        />
      </div>
    </div>
  )
}