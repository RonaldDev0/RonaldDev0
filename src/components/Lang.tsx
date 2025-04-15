import Link from 'next/link'

export default function Lang ({ en }: { en: boolean }) {
  return (
    <div className='absolute min-[1000px]:top-4 max-[1000px]:-top-12 right-4 flex gap-2 items-center justify-center text-xl font-bold'>
      <Link
        href={en ? '/es' : '/en'}
        className='hover:scale-125 transition-transform p-2 text-white hover:text-white/90 font-bold bg-background/90 backdrop-blur-sm rounded-md'
        aria-label={en ? 'Switch to Spanish' : 'Cambiar a inglés'}
      >
        {en ? 'En' : 'Es'}
      </Link>
    </div>
  )
}