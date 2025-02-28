export default function Resume () {
  return (
    <div className='w-screen h-screen fixed top-0 left-0'>
      <iframe
        src='/personal/resume.pdf'
        className='w-screen h-screen'
      />
    </div>
  )
}