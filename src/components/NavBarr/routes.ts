export interface link {
  icon: string
  name: string
  path: string
}

export const Links: link[] = [
  {
    icon: '/icon/Home.svg',
    name: 'Home',
    path: '/'
  },
  {
    icon: '/icon/Skills.svg',
    name: 'Skills',
    path: '/skills'
  },
  {
    icon: '/icon/Projects.svg',
    name: 'Projects',
    path: '/projects'
  },
  {
    icon: '/icon/ContactMe.svg',
    name: 'Contact me',
    path: '/contact-me'
  }
]
