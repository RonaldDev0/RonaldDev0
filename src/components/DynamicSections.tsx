'use client'

import dynamic from 'next/dynamic'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'

const Hero = dynamic(() => import('@/components/sections/Hero'), {
  loading: () => (
    <div className='w-full h-screen animate-pulse bg-background/50'>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-32 h-32 rounded-full bg-background/80 animate-pulse' />
      </div>
    </div>
  ),
  ssr: false
})

const Experience = dynamic(() => import('@/components/sections/Experience'), {
  loading: () => (
    <div className='w-full h-[500px] animate-pulse bg-background/50'>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-3/4 h-8 bg-background/80 rounded animate-pulse' />
      </div>
    </div>
  ),
  ssr: false
})

const Projects = dynamic(() => import('@/components/sections/projects/Projects'), {
  loading: () => (
    <div className='w-full h-[800px] animate-pulse bg-background/50'>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-3/4 h-8 bg-background/80 rounded animate-pulse' />
      </div>
    </div>
  ),
  ssr: false
})

const Stack = dynamic(() => import('@/components/sections/Stack'), {
  loading: () => (
    <div className='w-full h-[400px] animate-pulse bg-background/50'>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-3/4 h-8 bg-background/80 rounded animate-pulse' />
      </div>
    </div>
  ),
  ssr: false
})

const Education = dynamic(() => import('@/components/sections/Educations'), {
  loading: () => (
    <div className='w-full h-[600px] animate-pulse bg-background/50'>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-3/4 h-8 bg-background/80 rounded animate-pulse' />
      </div>
    </div>
  ),
  ssr: false
})

const AboutMe = dynamic(() => import('@/components/sections/About_me'), {
  loading: () => (
    <div className='w-full h-[400px] animate-pulse bg-background/50'>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-3/4 h-8 bg-background/80 rounded animate-pulse' />
      </div>
    </div>
  ),
  ssr: false
})

const components = [
  { Component: Hero, id: 'hero' },
  { Component: Experience, id: 'experience' },
  { Component: Projects, id: 'projects' },
  { Component: Stack, id: 'stack' },
  { Component: Education, id: 'education' },
  { Component: AboutMe, id: 'about' }
]

interface DynamicSectionsProps {
  en: boolean
}

export default function DynamicSections ({ en }: DynamicSectionsProps) {
  return (
    <>
      {components.map(({ Component, id }) => (
        <ScrollAnimationWrapper key={id}>
          <Component en={en} />
        </ScrollAnimationWrapper>
      ))}
    </>
  )
}
