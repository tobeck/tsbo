import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-end gap-5 text-xs font-bold uppercase text-bistre">
      <div>
        <h1></h1>
      </div>
      <ul>
        <Link href="/experiences">
          <a>Experiences</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </ul>
    </nav>
  )
}
