import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Stack from '@/components/sections/Stack'
import Education from '@/components/sections/Educations'
import AboutMe from '@/components/sections/About_me'

export default function Home ({ params: { lang } }: any) {
  const en = lang === 'en'
  return (
    <main className='w-full flex flex-col items-center'>
      <Hero en={en} />
      <Experience en={en} />
      <Projects en={en} />
      <Stack en={en} />
      <Education en={en} />
      <AboutMe en={en} />
    </main>
  )
}