// Imports
import Image from 'next/image'

// Components
import { skills, tools, tool } from './Tools'

// Styles
import style from '@/scss/skills.module.scss'

const getIcons = (input: tool[]) => {
  return (
    <>
      {
        input.map(({ icon, name }) => {
          return (
            <Image
              key={icon}
              alt={name}
              title={name}
              width='80'
              height='80'
              src={icon}
              className={style.image}
            />
          )
        })
      }
    </>
  )
}

function Skillset ({ title, icons }: any) {
  return (
    <div className={style.subContainer}>
      {title}
      <div className={style.skills}>
        {icons}
      </div>
    </div>
  )
}

export default function Skills () {
  return (
    <div className={style.container}>
      <Skillset
        title={<b>Skillset</b>}
        icons={getIcons(skills)}
      />
      <Skillset
        title={<p><b>Tools</b> I use</p>}
        icons={getIcons(tools)}
      />
    </div>
  )
}
