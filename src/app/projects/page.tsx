// Imports
import Image from 'next/image'
import Link from 'next/link'

// Components
import { listProjects, project } from './projects'

// Styles
import style from '@/scss/projects.module.scss'

export default function Projects () {
  return (
    <div>
      <p>My Recent <b>Works</b></p>
      {
        listProjects.map(({ preview, title, description, gitHub, deploy }: project, index: number) => {
          return (
            <div key={index}>
              <Image alt={title} title={title} src={preview} width='400' height='230' />
              <b>{title}</b>
              <p>{description}</p>
              <Link href={gitHub}>GitHub</Link>
              <Link href={deploy}>Deploy</Link>
            </div>
          )
        })
      }
    </div>
  )
}
