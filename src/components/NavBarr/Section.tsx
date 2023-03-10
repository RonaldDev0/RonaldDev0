// Imports
import Image from 'next/image'
import Link from 'next/link'

// Style
import style from '@/scss/navBarr.module.scss'

// Interface
import { link } from './routes'

export default function Section ({ icon, name, path }: link) {
  return (
    <Link href={path} className={style.container_link}>
      <Image width='20' height='20' alt={name} title={name} src={icon} />
      <p className={style.title}>{name}</p>
    </Link>
  )
}
