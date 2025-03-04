import Link from 'next/link'

export default function Lang ({ en }: { en: boolean }) {
  return (
    <div className='absolute top-4 right-4 flex gap-2 items-center justify-center text-xl font-bold'>
      <Link href='/en' className={`hover:scale-125 transition-transform p-2 ${en && 'text-primary'}`}>
        En
      </Link>
      <Link href='/es' className={`hover:scale-125 transition-transform p-2 ${!en && 'text-primary'}`}>
        Es
      </Link>
    </div>
  )
}