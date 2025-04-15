import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export default function Experience ({ en }: { en: boolean }) {
  return (
    <section id='experience' aria-label='experience' className='space-y-8 pt-24 mb-32'>
      <Card className='bg-card text-card-foreground shadow-lg'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-foreground'>
            {en ? 'Experience' : 'Experiencia' }
          </CardTitle>
          <CardDescription className='text-muted-foreground'>
            {en ? 'Software Developer' : 'Desarrollador de software'}
          </CardDescription>
        </CardHeader>
        <CardContent className='text-foreground/90'>
          <p>
            {
              en
                ? '👨‍💻 I am a Software Engineer and Full-Stack Web Developer with more than 3 years of experience and a passion for transforming ideas into innovative and scalable digital solutions.'
                : '👨‍💻 Soy Ingeniero de Software y Desarrollador Web Full-Stack con mas de 3 años de experiencia y con una pasión por transformar ideas en soluciones digitales innovadoras y escalables.'
            }
            <br />
            {
              en
                ? 'I have developed, completely independently, high-impact projects that demonstrate my ability to manage complex initiatives from start to finish.'
                : 'He desarrollado, de forma completamente independiente, proyectos de alto impacto que demuestran mi capacidad para gestionar iniciativas complejas de principio a fin.'
            }
          </p>
        </CardContent>
        <CardFooter className='text-foreground/90'>
          <p>
            {
              en
                ? '🤝 I am looking to join dynamic and collaborative teams, where I can contribute my strategic vision, commitment to technical excellence and passion for innovation to drive high-impact digital projects.'
                : '🤝 Estoy en búsqueda de integrarme a equipos dinámicos y colaborativos, donde pueda aportar mi visión estratégica, compromiso con la excelencia técnica y pasión por la innovación para impulsar proyectos digitales de alto impacto.'
            }
          </p>
        </CardFooter>
      </Card>
    </section>
  )
}