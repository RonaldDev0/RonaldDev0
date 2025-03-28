import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/projects/Projects'
import Stack from '@/components/sections/Stack'
import Education from '@/components/sections/Educations'
import AboutMe from '@/components/sections/About_me'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'

export default async function Home ({ params }: any) {
  const resolvedParams = await Promise.resolve(params)
  const lang = await resolvedParams.lang
  const en = lang === 'en'

  const components = [Hero, Experience, Projects, Stack, Education, AboutMe]

  return (
    <main className='w-full flex flex-col items-center'>
      {components.map((Component, index) => (
        <ScrollAnimationWrapper key={index}>
          <Component en={en} />
        </ScrollAnimationWrapper>
      ))}
    </main>
  )
}