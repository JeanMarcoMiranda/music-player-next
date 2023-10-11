import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-full gap-4 m-auto'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='underline hover:font-bold'>Return Home</Link>
    </div>
  )
}