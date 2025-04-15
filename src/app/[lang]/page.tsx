import { memo } from 'react'
import DynamicSections from '@/components/DynamicSections'

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

const Home = memo(async function Home ({ params }: PageProps) {
  const { lang } = await params
  const en = lang === 'en'

  return (
    <main className='w-full flex flex-col items-center'>
      <DynamicSections en={en} />
    </main>
  )
})

Home.displayName = 'Home'

export default Home