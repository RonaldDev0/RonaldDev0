// Imports
import Image from 'next/image'
import Link from 'next/link'

// Components
import { listProjects, project } from './projects'

// Styles
import style from '@/scss/projects.module.scss'

export default function Projects () {
  return (
    <div className={style.container}>
      <p className={style.title}>My Recent <b>Works</b></p>
      <div className={style.container_projects}>
        {
          listProjects.map(({ preview, title, description, gitHub, deploy }: project, index: number) => {
            return (
              <div key={index} className={style.project}>
                <Image alt={title} title={title} src={preview} width='400' height='230' className={style.image} />
                <b className={style.project_title}>{title}</b>
                <p className={style.description}>{description}</p>
                <div className={style.container_links}>
                  <Link href={gitHub} className={style.link}>GitHub</Link>
                  <Link href={deploy} className={style.link}>Deploy</Link>
                </div>
              </div>
            )
          })
      }
      </div>
    </div>
  )
}
