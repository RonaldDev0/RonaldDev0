export default async function Resume ({ params }: any) {
  const resolvedParams = await Promise.resolve(params)
  const lang = await resolvedParams.lang
  const en = lang === 'en'
  return (
    <div className='w-screen h-screen fixed top-0 left-0'>
      <iframe
        src={en ? '/personal/resume-en.pdf' : '/personal/resume-es.pdf'}
        className='w-screen h-screen'
      />
    </div>
  )
}