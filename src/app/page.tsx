// Imports
import Image from 'next/image'

// Style
import style from '@/scss/home.module.scss'

export default function Home () {
  return (
    <div className={style.container}>
      <div className={style.flexContainer}>
        <div className={style.messageContainer}>
          <h2>Hi There !</h2>
          <div className={style.flex}>
            <h2>I'M</h2>
            <h1>Ronald Zamora</h1>
          </div>
          <div className={style.flex}>
            <h2>{'<'}</h2>
            <h2 className={style.resalted}>Frontend Developer</h2>
            <h2>{'/>'}</h2>
          </div>
        </div>
        <Image width='500' height='500' alt='Developer' src='/Developer.svg' className={style.image} />
      </div>
      <div className={style.flexContainer}>
        <Image width='300' height='300' alt='Avatar' src='/Avatar.svg' className={style.image} />
        <div>
          <div className={style.flex}>
            <h2>LET ME INTRODUCE</h2>
            <h2 className={style.resalted}>MYSELF</h2>
          </div>
          <div className={style.textContainer}>
            <div className={style.flex}>
              <p>My name is <b className={style.resalted}>Ronald</b>, I'm from Bogota. I have been decicated to programming for more than a year and i have discovered that it has a lot to do with my passion.</p>
            </div>
            <p>I'm looking for a serious and long-term job opportunity to be able to grow together, with a team that allows me to continue learning until i can help others.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
