import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Stack from '@/components/sections/Stack'
import Education from '@/components/sections/education'

export default function Home () {
  return (
    <main className='w-full flex flex-col items-center'>
      <Hero />
      <Experience />
      <Projects />
      <Stack />
      <Education />
    </main>
  )
}