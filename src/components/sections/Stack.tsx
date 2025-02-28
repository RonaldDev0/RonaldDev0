import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Image from 'next/image'

type IStack = {
  title: string,
  stack: {
    name: string,
    img: string
  }[]
}

const stacks: IStack[] = [
  {
    title: 'Frontend',
    stack: [
      { name: 'HTML', img: '/stack/frontend/html5.svg' },
      { name: 'CSS', img: '/stack/frontend/css_old.svg' },
      { name: 'JavaScript', img: '/stack/frontend/javascript.svg' },
      { name: 'TypeScript', img: '/stack/frontend/typescript.svg' },
      { name: 'React', img: '/stack/frontend/react_dark.svg' },
      { name: 'TailwindCSS', img: '/stack/frontend/tailwindcss.svg' },
      { name: 'Zustand', img: '/stack/frontend/zustand.svg' },
      { name: 'Flutter', img: '/stack/frontend/flutter.svg' },
      { name: 'React Native', img: '/stack/frontend/react_dark.svg' },
      { name: 'Expo', img: '/stack/frontend/expo.svg' }

    ]
  },
  {
    title: 'Backend',
    stack: [
      { name: 'NodeJS', img: '/stack/backend/nodejs.svg' },
      { name: 'Bun', img: '/stack/backend/bun.svg' },
      { name: 'NextJS', img: '/stack/backend/nextjs_icon_dark.svg' },
      { name: 'Supabase', img: '/stack/backend/supabase.svg' },
      { name: 'PostgreSQL', img: '/stack/backend/postgresql.svg' },
      { name: 'Python', img: '/stack/backend/python.svg' }
    ]
  },
  {
    title: 'Tools',
    stack: [
      { name: 'Git', img: '/stack/tools/git.svg' },
      { name: 'GitHub', img: '/stack/tools/github-dark.svg' },
      { name: 'Terminal', img: '/stack/tools/bash_dark.svg' },
      { name: 'VSCode', img: '/stack/tools/vscode.svg' },
      { name: 'Postman', img: '/stack/tools/postman.svg' },
      { name: 'Windows', img: '/stack/tools/windows.svg' },
      { name: 'Linux', img: '/stack/tools/linux.svg' },
      { name: 'Vercel', img: '/stack/tools/vercel_dark.svg' }
    ]
  },
  {
    title: 'Learning',
    stack: [
      { name: 'Redis', img: '/stack/learning/redis.svg' },
      { name: 'AWS', img: '/stack/learning/aws_dark.svg' },
      { name: 'AI', img: '/stack/learning/ollama_dark.svg' },
      { name: 'Rust', img: '/stack/learning/rust_dark.svg' }
    ]
  }
]

export default function Stack () {
  return (
    <section id='stack' aria-label='stack' className='w-full space-y-6'>
      <h2 className='text-3xl font-bold mt-10'>Stack</h2>
      <div className='grid grid-cols-2 gap-6'>
        {stacks.map(({ title, stack }) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>
                <p className='text-xl'>
                  {title}
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid grid-cols-4 gap-6'>
                {stack.map(({ name, img }) => (
                  <div key={name} className='space-y-2 flex flex-col items-center hover:scale-125 transition-transform'>
                    <Image
                      src={img}
                      alt={name}
                      width='50'
                      height='50'
                      className='w-[50px] h-[50px]'
                    />
                    <p className='text-sm'>{name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}