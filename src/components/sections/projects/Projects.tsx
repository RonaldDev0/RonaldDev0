import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

import data from './info.json'

type IProject = {
  title: string
  description: {
    en: string
    es: string
  }
  keyPoints: {
    en: string[]
    es: string[]
  }
  link?: string
  image?: string
  code: string
  stack: string[]
}

const projects: IProject[] = data

export default function Projects ({ en }: { en: boolean }) {
  return (
    <section id='projects' className='w-full space-y-6 mb-32'>
      <div className='mb-12 space-y-4'>
        <h2 className='text-3xl font-bold'>
          {en ? 'Projects' : 'Proyectos'}
        </h2>
        <div>
          <p>
            {
              en
                ? 'Here are some of the projects I\'ve worked on.'
                : 'Aquí se muestran algunos de los proyectos en los que he trabajado.'
            }
          </p>
          <p className='mt-4 text-muted-foreground'>
            {
              en
                ? 'The prefix F means that it is part of the Foodllowers application matrix, since I developed the entire business model and it is completely functional, for practical purposes I divided it into apps for better explanation.'
                : 'El prefijo F significa que es parte de la matriz de aplicaciones de Foodllowers, ya que desarrollé todo el modelo de negocio y es completamente funcional, para efectos prácticos lo dividí en apps para una mejor explicación.'
            }
          </p>
        </div>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map(project => (
          <Card key={project.title} className='group hover:border-primary transition-all duration-300 h-full flex flex-col'>
            <CardHeader className='pb-3'>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-xl font-semibold'>
                  {project.title}
                </CardTitle>
                <div className='flex gap-2'>
                  {project.link && (
                    <Link href={project.link} target='_blank' className='hover:text-primary transition-colors'>
                      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                      </svg>
                    </Link>
                  )}
                  <Link href={project.code} target='_blank' className='hover:text-primary transition-colors'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
                    </svg>
                  </Link>
                </div>
              </div>
              <CardDescription>
                {project.description[en ? 'en' : 'es']}
              </CardDescription>
            </CardHeader>

            <CardContent className='flex-1'>
              <div className='space-y-3'>
                <h3 className='font-medium text-sm text-muted-foreground'>
                  {en ? 'Key Features' : 'Características'}
                </h3>
                <ul className='space-y-2'>
                  {project.keyPoints[en ? 'en' : 'es'].map((point, i) => (
                    <li key={i} className='text-sm flex items-start gap-2'>
                      <svg className='w-4 h-4 mt-1 flex-shrink-0 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>

            <CardFooter className='flex-wrap gap-2'>
              {project.stack.map(tech => (
                <Badge
                  key={tech}
                  variant='secondary'
                  className='text-xs'
                >
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}