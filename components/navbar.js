import Link from 'next/link'
import { useState } from 'react'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/#experiences', label: 'Resume' },
  ]

  return (
    <nav className="flex items-center justify-between py-5">
      <Link href="/" className="flex items-center">
          <img src="/assets/TSBO_logo.svg" alt="TSBO" className="h-8 w-auto" />
      </Link>
      <ul className="hidden sm:flex items-center gap-8 text-sm font-semibold">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="text-bistre hover:text-coral transition-colors">{label}</Link>
          </li>
        ))}
      </ul>
      <button
        className="sm:hidden text-bistre"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
      </button>
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-ash z-50 sm:hidden">
          <ul className="flex flex-col items-center gap-4 py-6 text-sm font-semibold">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                    href={href}
                    className="text-bistre hover:text-coral transition-colors"
                    onClick={() => setMenuOpen(false)}
                >
                    {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
