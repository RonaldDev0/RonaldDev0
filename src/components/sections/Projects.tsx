import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import Link from 'next/link'

type IProject = {
  title: string
  description: string
  content: string
  link?: string
  image?: string
}

const projects: IProject[] = [
  {
    title: 'Foodllowers',
    description: 'descrtiption',
    content: 'content',
    link: 'https://foodllowers.vercel.app/',
    image: 'image'
  },
  {
    title: 'F-Kitchens',
    description: 'descrtiption',
    content: 'content',
    link: 'https://foodllowers-kitchens.vercel.app/',
    image: 'image'
  },
  {
    title: 'F-Deliverys',
    description: 'descrtiption',
    content: 'content',
    link: 'https://foodllowers-deliverys.vercel.app/',
    image: 'image'
  },
  {
    title: 'F-Influencers',
    description: 'descrtiption',
    content: 'content',
    link: 'https://foodllowers-influencers.vercel.app/',
    image: 'image'
  },
  {
    title: 'StreamingX',
    description: 'descrtiption',
    content: 'content',
    link: 'https://streaming-x.vercel.app/',
    image: 'image'
  },
  {
    title: 'Portfolio',
    description: 'descrtiption',
    content: 'content'
  }
]

export default function Projects () {
  return (
    <section id='projects' className='w-full space-y-6 mb-32'>
      <h2 className='text-3xl font-bold'>Projects</h2>
      <div>
        <p>Here are some of the projects I&apos;ve worked on.</p>
        <CardDescription>
          The prefix F means that it is part of the Foodllowers application matrix, since I developed the entire business model and it is completely functional, for practical purposes I divided it into apps for better explanation.
        </CardDescription>
      </div>
      <div className='grid grid-cols-3 gap-6'>
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
                      {project.description}
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
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
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