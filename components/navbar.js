import Link from 'next/link'
import Image from 'next/image'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return (
    <nav className="container flex items-center py-5 mt-2">
      <ul className="hidden sm:flex flex-1 justify-end items-center gap-5  text-xs font-bold">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
      </ul>
      <div className="flex sm:hidden flex-1 justify-end">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  )
}
