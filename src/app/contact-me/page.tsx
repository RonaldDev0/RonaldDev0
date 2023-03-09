// Imports
import Link from 'next/link'
import Image from 'next/image'

// Styles
import style from '@/scss/contactMe.module.scss'

export default function ContactMe () {
  return (
    <div>
      <form action='https://formsubmit.co/ronaldzamoradev@gmail.com' method='POST'>
        <input type='email' placeholder='Email...' name='Email' />
        <input type='text' placeholder='Message...' name='Message' />
        <input type='submit' />
        <input type='hidden' name='_next' value='http://localhost:3000/contact-me' />
        <input type='hidden' name='_captcha' value='false' />
      </form>
      <div>
        <Link href='https://github.com/ronald7745' target='_blank'>
          <Image alt='Github' title='Github' src='/networks/GitHub.svg' width='60' height='60' />
        </Link>
        <Link href='https://www.linkedin.com/in/ronald-zamora-187187222/' target='_blank'>
          <Image alt='Linkedin' title='Linkedin' src='/networks/Linkedin.svg' width='60' height='60' />
        </Link>
        <p>ronaldzamoradev@gmail.com</p>
      </div>
    </div>
  )
}
