// Imports
import Image from 'next/image'

// Components
import { skills, tools, tool } from './Tools'

// Styles
import style from '@/scss/skills.module.scss'

export default function Skills () {
  const getIcons = (input: tool[]) => input.map(({ icon, name }) => <div key={icon} className={style.imageContainer}><Image alt={name} title={name} width='80' height='80' src={icon} className={style.image} /></div>)

  return (
    <div className={style.container}>
      <div>
        <div className={style.skillset}>
          <p className={style.title}>Skillset</p>
          <div className={style.content}>
            {getIcons(skills)}
          </div>
        </div>
      </div>
      <div>
        <p className={style.title}><b className={style.selected}>Tools</b> I use</p>
        <div className={style.content}>
          {getIcons(tools)}
        </div>
      </div>
    </div>
  )
}
