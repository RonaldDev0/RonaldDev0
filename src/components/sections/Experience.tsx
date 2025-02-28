import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export default function Experience () {
  return (
    <section id='experience' aria-label='experience' className='space-y-4 pt-24 mb-32'>
      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
          <CardDescription>Software Developer</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            👨‍💻 Soy Ingeniero de Software y Desarrollador Web Full-Stack con mas de 3 años de experiencia y con una pasión por transformar ideas en soluciones digitales innovadoras y escalables.
            <br />
            He desarrollado, de forma completamente independiente, proyectos de alto impacto que demuestran mi capacidad para gestionar iniciativas complejas de principio a fin.
          </p>
        </CardContent>
        <CardFooter>
          <p>
            🤝 Estoy en búsqueda de integrarme a equipos dinámicos y colaborativos, donde pueda aportar mi visión estratégica, compromiso con la excelencia técnica y pasión por la innovación para impulsar proyectos digitales de alto impacto.
          </p>
        </CardFooter>
      </Card>
    </section>
  )
}