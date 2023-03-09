// Imports
import Image from 'next/image'

// Style
import style from '@/scss/home.module.scss'

// SubComponents

function Start () {
  return (
    <div>
      <div>
        <p>Hi There !</p>
        <p>I'M <b>Ronald Zamora</b></p>
        <p>{'<'} <b>Frontend Developer</b> {'/>'}</p>
      </div>
      <Image width='499' height='500' alt='Developer' src='/Developer.svg' />
    </div>
  )
}

function End () {
  return (
    <div>
      <Image width='220' height='240' alt='Avatar' src='/Avatar.svg' />
      <div>
        <p>LET ME INTRODUCE<b>MYSELF</b></p>
        <div>
          <p>My name is <b>Ronald</b>, I'm from Bogota. I have been decicated to programming for more than a year and i have discovered that it has a lot to do with my passion.</p>
          <p>I'm looking for a serious and long-term job opportunity to be able to grow together, with a team that allows me to continue learning until i can help others.</p>
        </div>
      </div>
    </div>
  )
}

export default function Home () {
  return (
    <div>
      <Start />
      <End />
    </div>
  )
}
