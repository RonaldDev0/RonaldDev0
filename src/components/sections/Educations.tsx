import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

type IEducation = {
  name: string,
  img: string,
  link: string
}

const education: IEducation[] = [
  {
    name: 'Platzi',
    img: '/education/platzi.svg',
    link: 'https://www.youtube.com/@Platzi'
  },
  {
    name: 'Midudev',
    img: '/education/midudev.svg',
    link: 'https://www.youtube.com/@midudev'
  },
  {
    name: 'Sonny Sangha',
    img: '/education/sonny-sangha.webp',
    link: 'https://www.youtube.com/@SonnySangha'
  },
  {
    name: 'Dot CSV',
    img: '/education/dot-csv.webp',
    link: 'https://www.youtube.com/@DotCSV'
  },
  {
    name: 'Gentleman Programming',
    img: '/education/gentleman-programming.webp',
    link: 'https://www.youtube.com/@gentlemanprogramming'
  },
  {
    name: 'MoureDev',
    img: '/education/mouredev.webp',
    link: 'https://www.youtube.com/@mouredevtv'
  },
  {
    name: 'Fazt',
    img: '/education/fazt.webp',
    link: 'https://www.youtube.com/@FaztTech'
  },
  {
    name: 'aaronga97',
    img: '/education/aaronga97.webp',
    link: 'https://www.youtube.com/@aaronga97'
  },
  {
    name: 'EDteam',
    img: '/education/edteam.webp',
    link: 'https://www.youtube.com/@EDteam'
  },
  {
    name: 'Diegoveloper',
    img: '/education/diegoveloper.webp',
    link: 'https://www.youtube.com/@diegoveloper'
  },
  {
    name: 'Absa Coding',
    img: '/education/absa-coding.webp',
    link: 'https://www.youtube.com/@AbsaCoding'
  },
  {
    name: 'Carlos Azaustre',
    img: '/education/carlos-azaustre.webp',
    link: 'https://www.youtube.com/@CarlosAzaustre'
  },
  {
    name: 'Nate Gentile',
    img: '/education/nate-gentile.webp',
    link: 'https://www.youtube.com/@NateGentile7'
  }
]

export default function Education ({ en }: { en: boolean }) {
  return (
    <section id='education' className='w-full flex flex-col gap-6 mb-32'>
      <h2 className='text-3xl font-bold mt-10'>
        {en ? 'Education' : 'Educación'}
      </h2>
      <CardDescription>
        {
          en
            ? 'Throughout my training as a self-taught developer, YouTube has been my main ally.'
            : 'A lo largo de mi formación como desarrollador autodidacta, YouTube ha sido mi principal aliado.'
        }
        <br />
        {
          en
            ? 'For years I have absorbed knowledge from multiple specialized channels, which has allowed me to master new technologies and always stay up to date with the latest trends in software development.'
            : 'Durante años he absorbido conocimientos de múltiples canales especializados, lo que me ha permitido dominar nuevas tecnologías y estar siempre actualizado con las últimas tendencias en desarrollo de software.'
        }
        <br />
        {
          en
            ? 'Below, I highlight those resources that have marked my professional career and that I consider essential for my continued growth.'
            : 'A continuación, destaco aquellos recursos que han marcado mi trayectoria profesional y que considero imprescindibles para mi continuo crecimiento.'
        }
      </CardDescription>
      <Card>
        <CardHeader>
          <CardTitle>
            <p className='text-xl'>
              Featured Channels
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid min-[1000px]:grid-cols-4 max-[1000px]:grid-cols-3  gap-6 items-center'>
            {education.map(item => (
              <Link
                key={item.link}
                href={item.link}
                target='_blank'
                className='flex flex-col gap-2 justify-center items-center min-[1000px]:hover:scale-125 transition-transform'
              >
                <Image
                  src={item.img}
                  width={60}
                  height={60}
                  alt={item.img}
                  className='rounded-full'
                  loading='lazy'
                />
                <p className='text-sm'>
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}