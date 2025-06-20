import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Suspense } from 'react'

export default function AboutMe ({ en }: { en: boolean }) {
  return (
    <section id='about-me' className='w-full flex flex-col gap-6 mb-32'>
      <h2 className='text-3xl font-bold mt-10'>
        {en ? 'About me' : 'Acerca de mí'}
      </h2>
      <Card>
        <CardHeader>
          <CardTitle>
            <p className='text-xl'>
              {en ? 'Who am I?' : '¿Quién soy yo?'}
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex max-[1000px]:flex-col-reverse justify-between min-[1000px]:gap-36 max-[1000px]:gap-12 items-center'>
            <p>
              {
                en
                  ? 'Hi! I\'m Ronald Zamora 👋, a Software Engineer and Full-Stack Web Developer passionate about learning and overcoming challenges. Beyond code, I love exploring new technologies and methodologies to stay ahead in this dynamic digital world. 💡'
                  : '¡Hola! Soy Ronald Zamora 👋, un Ingeniero de Software y Desarrollador Web Full-Stack apasionado por aprender y superar desafíos. Más allá del código, me encanta explorar nuevas tecnologías y metodologías para mantenerme a la vanguardia en este dinámico mundo digital. 💡'
              }
              <br /><br />
              {
                en
                  ? 'I define myself as a proactive, results-oriented professional with a strong collaborative spirit. I firmly believe in the power of teamwork, effective communication and creativity to transform ideas into innovative and scalable solutions. 🚀'
                  : 'Me defino como un profesional proactivo, orientado a resultados y con un fuerte espíritu colaborativo. Creo firmemente en el poder del trabajo en equipo, la comunicación efectiva y la creatividad para transformar ideas en soluciones innovadoras y escalables. 🚀'
              }
              <br /><br />
              {
                en
                  ? 'Outside of work, I enjoy video games 🎮, a passion that helps me relax and, at the same time, inspires me to think about user experience and the gamification of projects.'
                  : 'Fuera del ámbito laboral, disfruto de los videojuegos 🎮, una pasión que me ayuda a relajarme y, al mismo tiempo, me inspira a pensar en la experiencia de usuario y en la gamificación de proyectos.'
              }
              <br /><br />
              {
                en
                  ? 'I am always ready to take on new challenges and bring value both in individual projects and in multidisciplinary teams. I am happy to connect and explore together how we can transform the digital future! 🤝'
                  : 'Estoy siempre listo para asumir nuevos retos y aportar valor tanto en proyectos individuales como en equipos multidisciplinarios. ¡Encantado de conectar y explorar juntos cómo podemos transformar el futuro digital! 🤝'
              }
            </p>
            <Suspense fallback={<div className='w-[300px] h-[300px] rounded-full bg-background' />}>
              <Image
                src='/personal/foto.webp'
                width={300}
                height={300}
                alt='Ronald Zamora - Software Developer'
                priority
                className='rounded-full border-4 border-primary'
                placeholder='blur'
                blurDataURL='data:image/webp;base64,UklGRiIAAABXRUJQVlA4ICwAAACwAgCdASoEAAQAAVAfJZgCdAD0oJaQAA/vuUAAA=='
              />
            </Suspense>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}