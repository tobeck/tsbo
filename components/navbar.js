import Link from 'next/link'
import Image from 'next/image'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return (
    <nav className="container flex items-center py-5 mt-10">
      <div>
        <Link href="/">
          <Image src="/assets/TSBO_logo.svg" width="64" height="64" />
        </Link>
      </div>
      <ul className="hidden sm:flex flex-1 justify-end items-center gap-5  text-xs">
        <Link href="/experiences">
          <a>Experiences</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </ul>
      <div className="flex sm:hidden flex-1 justify-end">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  )
}
