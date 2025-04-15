'use client'

import dynamic from 'next/dynamic'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'

const LoadingPlaceholder = ({ height, className = '' }: { height: string, className?: string }) => (
  <div className={`w-full ${height} animate-pulse bg-background/50 ${className}`}>
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-3/4 h-8 bg-background/80 rounded animate-pulse' />
    </div>
  </div>
)

const Hero = dynamic(() => import('@/components/sections/Hero').then(mod => mod.default), {
  loading: () => <LoadingPlaceholder height='h-screen' />,
  ssr: true
})

const Experience = dynamic(() => import('@/components/sections/Experience').then(mod => mod.default), {
  loading: () => <LoadingPlaceholder height='h-[500px]' />,
  ssr: true
})

const Projects = dynamic(() => import('@/components/sections/projects/Projects').then(mod => mod.default), {
  loading: () => <LoadingPlaceholder height='h-[800px]' />,
  ssr: true
})

const Stack = dynamic(() => import('@/components/sections/Stack').then(mod => mod.default), {
  loading: () => <LoadingPlaceholder height='h-[400px]' />,
  ssr: true
})

const Education = dynamic(() => import('@/components/sections/Educations').then(mod => mod.default), {
  loading: () => <LoadingPlaceholder height='h-[600px]' />,
  ssr: true
})

const AboutMe = dynamic(() => import('@/components/sections/About_me').then(mod => mod.default), {
  loading: () => <LoadingPlaceholder height='h-[400px]' />,
  ssr: true
})

const components = [
  { Component: Hero, id: 'hero', priority: true },
  { Component: Experience, id: 'experience', priority: false },
  { Component: Projects, id: 'projects', priority: false },
  { Component: Stack, id: 'stack', priority: false },
  { Component: Education, id: 'education', priority: false },
  { Component: AboutMe, id: 'about', priority: false }
] as const

interface DynamicSectionsProps {
  en: boolean
}

export default function DynamicSections ({ en }: DynamicSectionsProps) {
  return (
    <>
      {components.map(({ Component, id, priority }) => (
        <ScrollAnimationWrapper key={id} priority={priority}>
          <Component en={en} />
        </ScrollAnimationWrapper>
      ))}
    </>
  )
}
