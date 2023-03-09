// Imports
import Image from 'next/image'

// Components
import { skills, tools, tool } from './Tools'

// Styles
import style from '@/scss/skills.module.scss'

const getIcons = (input: tool[]) => {
  return (
    <div>
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
            />
          )
        })
      }
    </div>
  )
}

function Skillset ({ title, icons }: any) {
  return (
    <div>
      {title}
      {icons}
    </div>
  )
}

export default function Skills () {
  return (
    <div>
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
