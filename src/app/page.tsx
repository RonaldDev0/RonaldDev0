'use client'

// Imports
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'

// Style
import style from '@/scss/home.module.scss'

function Start () {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer'],
      typeSpeed: 150,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  })

  return (
    <div className={style.container_first_message}>
      <p className={style.p_message}>Hi There ! I'M <br />
        <b className={style.name}> Ronald Zamora</b> <br />
        {'<'} <b ref={el} /> {'/>'}
      </p>
      <Image width='499' height='500' alt='Developer' src='/Developer.svg' className={style.image} />
    </div>
  )
}

function End () {
  return (
    <div className={style.container_second_message}>
      <Image width='220' height='240' alt='Avatar' src='/Avatar.svg' />
      <div className={style.container_second_message_tittle}>
        <p>LET ME INTRODUCE<b>MYSELF</b></p>
        <div className={style.container_second_message_text}>
          <p>My name is <b>Ronald</b>, I'm from Bogota. I have been decicated to programming for more than a year and i have discovered that it has a lot to do with my passion. <br /> <br /> I'm looking for a serious and long-term job opportunity to be able to grow together, with a team that allows me to continue learning until i can help others.</p>
        </div>
      </div>
    </div>
  )
}

export default function Home () {
  return (
    <div className={style.container}>
      <Start />
      <End />
    </div>
  )
}
