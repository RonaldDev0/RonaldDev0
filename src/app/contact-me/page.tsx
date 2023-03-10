// Imports
import Link from 'next/link'
import Image from 'next/image'

// Styles
import style from '@/scss/contactMe.module.scss'

export default function ContactMe () {
  return (
    <div className={style.container}>
      <form
        action='https://formsubmit.co/ronaldzamoradev@gmail.com'
        method='POST'
      >
        <div className={style.form}>
          <input
            type='email'
            placeholder='Email...'
            name='Email'
            className={style.email}
          />
          <textarea
            placeholder='Message...'
            name='Message'
            className={style.message}
          />
          <input type='submit' className={style.submit} />
        </div>
        <input type='hidden' name='_next' value='http://localhost:3000/contact-me' />
        <input type='hidden' name='_captcha' value='false' />
      </form>
      <div className={style.links}>
        <Link href='https://github.com/ronald7745' target='_blank' className={style.link}>
          <Image alt='Github' title='Github' src='/networks/GitHub.svg' width='60' height='60' />
        </Link>
        <Link href='https://www.linkedin.com/in/ronald-zamora-187187222/' target='_blank' className={style.link}>
          <Image alt='Linkedin' title='Linkedin' src='/networks/Linkedin.svg' width='60' height='60' />
        </Link>
        <p><b>ronaldzamoradev@gmail.com</b></p>
      </div>
    </div>
  )
}
