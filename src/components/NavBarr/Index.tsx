// Components
import { Links, link } from './routes'
import Section from './Section'

// Styles
import style from '@/scss/navBarr.module.scss'

export default function NavBarr () {
  return (
    <div className={style.container_navBarr}>
      {
        Links.map(({ icon, name, path }: link) => <Section key={path} icon={icon} name={name} path={path} />)
      }
    </div>
  )
}
