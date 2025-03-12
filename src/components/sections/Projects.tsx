import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

type IProject = {
  title: string
  description: {
    en: string
    es: string
  }
  link?: string
  image?: string
  code: string
}

const projects: IProject[] = [
  {
    title: 'Foodllowers',
    description: {
      en: `
        This application is designed to provide customers with a seamless and secure shopping experience, integrating advanced payment features and real-time communication. I developed a fast, intuitive, and responsive interface using Next.js and Tailwind CSS, ensuring optimal load times and a smooth user experience. Real-time integration with Supabase Pro instantly updates promotions, order tracking, and order statuses. Additionally, I integrated MercadoPago as the payment gateway, ensuring secure and optimized transactions 🔒.

        Technical and Quality Features:

        Full-Stack Architecture: Robust APIs built with Node.js enable a modular and efficient business logic.
        Advanced Scalability: With Vercel Pro and Supabase Pro, the infrastructure supports up to 10,000 simultaneous users, with potential for further expansion.
        Testing and Monitoring: Implementation of unit, integration, and end-to-end tests, along with monitoring and logging systems (e.g., Sentry and LogRocket) to detect issues in real time.
        CI/CD and Documentation: Automated deployment pipelines and detailed technical documentation (including architecture diagrams and data flows) facilitate maintenance and future scalability.`,
      es: `
        Esta aplicación está diseñada para brindar a los clientes una experiencia de compra fluida y segura, integrando funcionalidades avanzadas de pago y comunicación en tiempo real. Desarrollé una interfaz ágil, intuitiva y responsiva con Next.js y Tailwind CSS, garantizando tiempos de carga óptimos y una experiencia de usuario fluida. La integración en tiempo real con Supabase Pro actualiza promociones, seguimiento de pedidos y estado de las órdenes de manera instantánea. Además, integré MercadoPago como pasarela de pago, asegurando transacciones seguras y optimizadas 🔒.

        Características técnicas y de calidad:

        Arquitectura Full-Stack: APIs robustas en Node.js que permiten una lógica de negocio modular y eficiente.
        Escalabilidad Avanzada: Con Vercel Pro y Supabase Pro, la infraestructura soporta hasta 10,000 usuarios simultáneos, con potencial de ampliación.
        Testing y Monitoreo: Implementación de pruebas unitarias, de integración y end-to-end, junto con sistemas de monitoreo y logging (por ejemplo, Sentry y LogRocket) para detectar incidencias en tiempo real.
        CI/CD y Documentación: Pipelines de despliegue automatizado y documentación técnica detallada (diagramas de arquitectura y flujos de datos) que facilitan el mantenimiento y la escalabilidad futura.`
    },
    link: 'https://foodllowers.vercel.app/',
    image: '/projects/foodllowers.webp',
    code: 'https://github.com/RonaldDev0/Foodllowers'
  },
  {
    title: 'F-Kitchens',
    description: {
      en: `
        Designed to optimize order management, this application enables kitchens to operate efficiently and securely by integrating real-time processes and ensuring high availability. Using Next.js and Tailwind CSS, it offers a clear and functional interface, while real-time synchronization with Supabase Pro instantly updates each order 🔐.

        Technical and Quality Features:

        Modular and Scalable Architecture: Implementation of a modular architecture that is prepared to integrate future microservices and facilitate agile maintenance.
        Security and Compliance: Robust standards are applied (secure authentication, data encryption, and regulatory compliance) to protect the integrity of the information.
        Optimization and Monitoring: Advanced caching techniques, load balancing, and query optimization, along with real-time monitoring tools, support up to 10,000 simultaneous users via Vercel Pro and Supabase Pro.`,
      es: `
        Diseñada para optimizar la gestión de pedidos, esta aplicación permite a las cocinas operar de manera eficiente y segura, integrando procesos en tiempo real y garantizando alta disponibilidad. Utilizando Next.js y Tailwind CSS se ofrece una interfaz clara y funcional, mientras que la sincronización en tiempo real con Supabase Pro actualiza cada orden al instante 🔐.

        Características técnicas y de calidad:

        Arquitectura Modular y Escalable: Implementación de una arquitectura modular, preparada para integrar microservicios futuros y facilitar un mantenimiento ágil.
        Seguridad y Cumplimiento: Aplicación de estándares robustos (autenticación segura, cifrado de datos y cumplimiento normativo) para proteger la integridad de la información.
        Optimización y Monitoreo: Técnicas avanzadas de caching, balanceo de carga y optimización de consultas, junto con herramientas de monitoreo en tiempo real, soportando hasta 10,000 usuarios simultáneos mediante Vercel Pro y Supabase Pro.`
    },
    link: 'https://foodllowers-kitchens.vercel.app/',
    code: 'https://github.com/RonaldDev0/Foodllowers-kitchens'
  },
  {
    title: 'F-Deliverys',
    description: {
      en: `
        This application is focused on logistical optimization, facilitating route management and real-time tracking for delivery personnel, thereby enhancing operational efficiency with every delivery. Built with Next.js and Tailwind CSS, the app uses Supabase Pro to deliver instant updates, while APIs developed in Node.js ensure smooth and robust operations 🚀.

        Technical and Quality Features:

        Route Management and Optimization: Advanced algorithms that reduce delivery times and increase logistical efficiency.
        Testing and Automation: A testing strategy (unit, integration, and end-to-end tests) along with CI/CD pipelines ensures seamless updates and rigorous quality control.
        Monitoring and Alerts: Advanced logging mechanisms and alert systems detect and resolve issues immediately, maintaining operational stability, with support for up to 10,000 simultaneous users thanks to Vercel Pro and Supabase Pro.`,
      es: `
        Esta aplicación está enfocada en la optimización logística, facilitando la gestión de rutas y seguimiento en tiempo real para los repartidores, mejorando la eficiencia operativa en cada entrega. Construida con Next.js y Tailwind CSS, la aplicación utiliza Supabase Pro para ofrecer actualizaciones instantáneas, mientras que las APIs en Node.js aseguran una operación fluida y robusta 🚀.

        Características técnicas y de calidad:

        Gestión y Optimización de Rutas: Algoritmos avanzados que permiten reducir tiempos de entrega y aumentar la eficiencia logística.
        Testing y Automatización: Estrategia de pruebas (unitarias, de integración y end-to-end) y pipelines de CI/CD que aseguran actualizaciones sin interrupciones y un control de calidad riguroso.
        Monitoreo y Alertas: Mecanismos avanzados de logging y sistemas de alertas para detectar y resolver incidencias de forma inmediata, manteniendo la estabilidad operativa, con capacidad para hasta 10,000 usuarios simultáneos gracias a Vercel Pro y Supabase Pro.`
    },
    link: 'https://foodllowers-deliverys.vercel.app/',
    code: 'https://github.com/RonaldDev0/Foodllowers-deliverys'
  },
  {
    title: 'F-Influencers',
    description: {
      en: `
        This application facilitates campaign management and real-time interaction, allowing influencers to maximize their digital presence and make informed decisions quickly. Developed with Next.js and Tailwind CSS, the app enables influencers to manage campaigns, receive notifications, and monitor metrics in real time using Supabase Pro. APIs built with Node.js ensure that critical data is updated instantly, driving precise digital management 📊.

        Technical and Quality Features:

        Agile Methodologies: Project management using Scrum/Kanban to iterate quickly and adapt to changes, demonstrating flexibility and dynamism.
        Comprehensive Testing: Unit, integration, and end-to-end tests ensure the robustness of the system.
        Optimization and Analytics: Utilization of caching techniques and real-time analytics dashboards to minimize latency and monitor user interaction.
        Scalable Infrastructure: Supports up to 10,000 simultaneous users with Vercel Pro and Supabase Pro, ensuring high availability and performance in high-demand scenarios.`,
      es: `
        Esta aplicación facilita la gestión de campañas y la interacción en tiempo real, permitiendo a los influencers maximizar su presencia digital y tomar decisiones informadas de manera ágil. La app, desarrollada con Next.js y Tailwind CSS, permite a los influencers gestionar campañas, recibir notificaciones y monitorear métricas en tiempo real gracias a Supabase Pro. Las APIs en Node.js aseguran que los datos críticos se actualicen al instante, impulsando una gestión digital precisa 📊.

        Características técnicas y de calidad:

        Metodologías Ágiles: Gestión del proyecto mediante Scrum/Kanban para iterar rápidamente y adaptarse a cambios, demostrando flexibilidad y dinamismo.
        Testing Integral: Pruebas unitarias, de integración y end-to-end que garantizan la robustez del sistema.
        Optimización y Análisis: Uso de técnicas de caching y dashboards de análisis en tiempo real para minimizar la latencia y monitorizar la interacción del usuario.
        Infraestructura Escalable: Soporte para hasta 10,000 usuarios simultáneos con Vercel Pro y Supabase Pro, asegurando alta disponibilidad y rendimiento en escenarios de alta demanda.`
    },
    link: 'https://foodllowers-influencers.vercel.app/',
    code: 'https://github.com/RonaldDev0/Foodllowers-influencers'
  },
  {
    title: 'StreamingX',
    description: {
      en: `
        Streamingx is a YouTube-like video platform currently under development, designed to revolutionize the streaming experience through a robust architecture and advanced video conversion techniques. The platform is built using Next.js, React, Tailwind CSS, and shadcn to deliver a modern, responsive interface. For video storage, Cloudflare R2 is used, ensuring scalable and secure management of multimedia content, while Supabase handles the database. An advanced video conversion process transforms any uploaded file format into an optimized streaming format, guaranteeing smooth and high-quality playback.

        Technical and Quality Features:

        Scalable Architecture: Built with Next.js and React to deliver a dynamic and modern user experience.
        Advanced Video Conversion: A conversion technique that processes and adapts videos into optimized streaming formats, regardless of the original format.
        Robust Storage: Utilization of Cloudflare R2 for secure and scalable video storage, along with Supabase for efficient database management.
        Modern Interface: A responsive and elegant design provided by Tailwind CSS and shadcn components enhances the visual experience.`,
      es: `
        Streamingx es una plataforma de video tipo YouTube, actualmente en desarrollo, que busca revolucionar la experiencia de streaming mediante una robusta arquitectura y técnicas avanzadas de conversión de video. La plataforma está construida con Next.js, React, Tailwind CSS y shadcn para ofrecer una interfaz moderna y responsiva. Para el almacenamiento de videos se utiliza Cloudflare R2, lo que permite un manejo escalable y seguro de contenidos multimedia, mientras que Supabase se encarga de la base de datos. Se ha implementado una técnica de conversión de video que transforma cualquier formato de archivo subido en un formato optimizado para streaming, garantizando una reproducción fluida y de alta calidad.

        Características técnicas y de calidad:

        Arquitectura Escalable: Construida con Next.js y React para ofrecer una experiencia de usuario dinámica y moderna.
        Conversión de Video Avanzada: Técnica de conversión que procesa y adapta los videos a formatos de streaming optimizados, independientemente del formato original.
        Almacenamiento Robusto: Uso de Cloudflare R2 para un almacenamiento seguro y escalable de videos y Supabase para la gestión eficiente de la base de datos.
        Interfaz Moderna: Diseño responsivo y elegante gracias a Tailwind CSS y componentes de shadcn que mejoran la experiencia visual.`
    },
    link: 'https://streaming-x.vercel.app/',
    image: '/projects/streamingx.webp',
    code: 'https://github.com/RonaldDev0/StreamingX'
  },
  {
    title: 'Portfolio',
    description: {
      en: `
        This portfolio is a personal showcase of my work and skills, with an extreme focus on performance and optimization in every detail. Developed with Next.js, React, and Tailwind CSS, this website stands out for its speed, responsiveness, and modern design, ensuring an impeccable user experience. The portfolio is hosted on Vercel, which guarantees rapid deployments and superior performance, adapting seamlessly to any device thanks to its fully responsive design.

        Technical and Quality Features:

        Maximum Optimization: Extreme attention to performance in every line of code, utilizing advanced optimization techniques and web development best practices.
        Cutting-Edge Technology: Built with Next.js and React to ensure smooth navigation and fast rendering.
        Responsive Design: Implemented with Tailwind CSS to provide a consistent experience across all devices.
        Efficient Deployment: Hosted on Vercel, which enables automatic and rapid deployments, maximizing performance and scalability.`,
      es: `
        Este portfolio es una muestra personal de mi trabajo y habilidades, donde he puesto un énfasis extremo en el rendimiento y la optimización en cada detalle. Desarrollado con Next.js, React y Tailwind CSS, este sitio web destaca por su velocidad, responsividad y diseño moderno, asegurando una experiencia de usuario impecable. El portfolio está alojado en Vercel, lo que garantiza despliegues rápidos y un rendimiento superior, adaptándose a cualquier dispositivo gracias a su diseño completamente responsivo.

        Características técnicas y de calidad:

        Optimización al Máximo: Detallada atención al rendimiento en cada línea de código, utilizando técnicas avanzadas de optimización y mejores prácticas de desarrollo web.
        Tecnología de Vanguardia: Construido con Next.js y React para asegurar una navegación fluida y un renderizado rápido.
        Diseño Responsivo: Implementado con Tailwind CSS, asegurando una experiencia consistente en todos los dispositivos.
        Despliegue Eficiente: Alojado en Vercel, que permite despliegues automáticos y rápidos, maximizando el rendimiento y la escalabilidad.`
    },
    code: 'https://github.com/RonaldDev0/RonaldDev0'
  }
]

export default function Projects ({ en }: { en: boolean }) {
  return (
    <section id='projects' className='w-full space-y-6 mb-32'>
      <h2 className='text-3xl font-bold'>
        {en ? 'Projects' : 'Proyectos'}
      </h2>
      <div>
        <p>
          {
            en
              ? 'Here are some of the projects I\'ve worked on.'
              : 'Aquí se muestran algunos de los proyectos en los que he trabajado.'
          }
        </p>
        <CardDescription>
          {
            en
              ? 'The prefix F means that it is part of the Foodllowers application matrix, since I developed the entire business model and it is completely functional, for practical purposes I divided it into apps for better explanation.'
              : 'El prefijo F significa que es parte de la matriz de aplicaciones de Foodllowers, ya que desarrollé todo el modelo de negocio y es completamente funcional, para efectos prácticos lo dividí en apps para una mejor explicación.'
          }
        </CardDescription>
      </div>
      <div className='min-[1000px]:grid min-[1000px]:grid-cols-2 min-[1000px]:gap-6 max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:gap-6'>
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              {project.image && (
                <Image
                  src={project.image}
                  width={500}
                  height={300}
                  alt={project.title}
                  className='rounded-xl'
                />
              )}
              <CardDescription>
                <div className='space-y-4'>
                  <div>
                    {project.description[en ? 'en' : 'es']
                      .split('\n')
                      .slice(1, 2)
                      .map((text, i) => (
                        <p key={`first-${i}`}>
                          {text}
                        </p>
                      ))}
                  </div>
                  <ul className='list-disc pl-6'>
                    {project.description[en ? 'en' : 'es']
                      .split('\n')
                      .map((line) => line.trim())
                      .filter((line) => line)
                      .slice(2)
                      .map((text, i) => (
                        <li key={`rest-${i}`} className='mb-2'>
                          {text}
                        </li>
                      ))}
                  </ul>
                </div>
              </CardDescription>
            </CardContent>
            <CardFooter>
              {project.link && (
                <Link
                  href={project.link}
                  target='_blank'
                  className='w-full flex justify-center'
                >
                  <CardDescription className='hover:text-white transition-colors px-1 py-3 w-full justify-center flex'>
                    {en ? 'go to project' : 'ir al proyecto'}
                  </CardDescription>
                </Link>
              )}
              <Link
                href={project.code}
                target='_blank'
                className='w-full flex justify-center'
              >
                <CardDescription className='hover:text-white transition-colors px-1 py-3 w-full justify-center flex'>
                  {en ? 'go to code' : 'ir al código'}
                </CardDescription>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}