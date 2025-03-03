import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Suspense } from 'react'

export default function AboutMe () {
  return (
    <section id='about-me' className='w-full flex flex-col gap-6 mb-32'>
      <h2 className='text-3xl font-bold mt-10'>
        About me
      </h2>
      <Card>
        <CardHeader>
          <CardTitle>
            <p className='text-xl'>
              Who am I?
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex max-[1000px]:flex-col-reverse justify-between min-[1000px]:gap-36 max-[1000px]:gap-12 items-center'>
            <p>
              ¡Hola! Soy Ronald Zamora 👋, un Ingeniero de Software y Desarrollador Web Full-Stack apasionado por aprender y superar desafíos. Más allá del código, me encanta explorar nuevas tecnologías y metodologías para mantenerme a la vanguardia en este dinámico mundo digital. 💡
              <br /><br />
              Me defino como un profesional proactivo, orientado a resultados y con un fuerte espíritu colaborativo. Creo firmemente en el poder del trabajo en equipo, la comunicación efectiva y la creatividad para transformar ideas en soluciones innovadoras y escalables. 🚀
              <br /><br />
              Fuera del ámbito laboral, disfruto de los videojuegos 🎮, una pasión que me ayuda a relajarme y, al mismo tiempo, me inspira a pensar en la experiencia de usuario y en la gamificación de proyectos.
              <br /><br />
              Estoy siempre listo para asumir nuevos retos y aportar valor tanto en proyectos individuales como en equipos multidisciplinarios. ¡Encantado de conectar y explorar juntos cómo podemos transformar el futuro digital! 🤝
            </p>
            <Suspense fallback={<div className='w-[300px] h-[300px] rounded-full bg-background' />}>
              <Image
                src='/personal/foto.webp'
                width={300}
                height={300}
                alt='Ronald Zamora - Software Developer'
                priority
                className='rounded-full border-4 border-primary'
              />
            </Suspense>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}