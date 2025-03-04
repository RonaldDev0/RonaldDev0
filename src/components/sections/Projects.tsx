import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import Link from 'next/link'

type IProject = {
  title: string
  description: {
    en: string
    es: string
  }
  content: string
  link?: string
  image?: string
}

const projects: IProject[] = [
  {
    title: 'Foodllowers',
    description: {
      en: 'descrtiption',
      es: 'descripcion'
    },
    content: 'content',
    link: 'https://foodllowers.vercel.app/',
    image: 'image'
  },
  {
    title: 'F-Kitchens',
    description: {
      en: 'descrtiption',
      es: 'descripcion'
    },
    content: 'content',
    link: 'https://foodllowers-kitchens.vercel.app/',
    image: 'image'
  },
  {
    title: 'F-Deliverys',
    description: {
      en: 'descrtiption',
      es: 'descripcion'
    },
    content: 'content',
    link: 'https://foodllowers-deliverys.vercel.app/',
    image: 'image'
  },
  {
    title: 'F-Influencers',
    description: {
      en: 'descrtiption',
      es: 'descripcion'
    },
    content: 'content',
    link: 'https://foodllowers-influencers.vercel.app/',
    image: 'image'
  },
  {
    title: 'StreamingX',
    description: {
      en: 'descrtiption',
      es: 'descripcion'
    },
    content: 'content',
    link: 'https://streaming-x.vercel.app/',
    image: 'image'
  },
  {
    title: 'Portfolio',
    description: {
      en: 'descrtiption',
      es: 'descripcion'
    },
    content: 'content'
  }
]

export default function Projects ({ en }: { en: boolean }) {
  return (
    <section id='projects' className='w-full space-y-6 mb-32'>
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
        <CardDescription>
          {
            en
              ? 'The prefix F means that it is part of the Foodllowers application matrix, since I developed the entire business model and it is completely functional, for practical purposes I divided it into apps for better explanation.'
              : 'El prefijo F significa que es parte de la matriz de aplicaciones de Foodllowers, ya que desarrollé todo el modelo de negocio y es completamente funcional, para efectos prácticos lo dividí en apps para una mejor explicación.'
          }
        </CardDescription>
      </div>
      <div className='min-[1000px]:grid min-[1000px]:grid-cols-3 min-[1000px]:gap-6 max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:gap-6'>
        {projects.map((project, index) => (
          project.link
            ? (
              <Link key={index} href={project.link} target='_blank'>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      {project.description[en ? 'en' : 'es']}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{project.content}</p>
                  </CardContent>
                  <CardFooter>
                    <CardDescription className='hover:text-white transition-colors px-1 py-3 w-full'>
                      View Project
                    </CardDescription>
                  </CardFooter>
                </Card>
              </Link>
            )
            : (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>
                    {project.title}
                  </CardTitle>
                  <CardDescription>
                    {project.description[en ? 'en' : 'es']}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{project.content}</p>
                </CardContent>
              </Card>
            )
        ))}
      </div>
    </section>
  )
}