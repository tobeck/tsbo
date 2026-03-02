import { useState, useEffect } from 'react'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

export default function DotNav() {
  const [active, setActive] = useState('hero')
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const observers = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id)
          }
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
      {sections.map(({ id, label }) => (
        <div key={id} className="relative flex items-center justify-end">
          {hovered === id && (
            <span className="absolute right-6 bg-terminal border border-phosphor text-phosphor font-mono text-xs px-2 py-1 whitespace-nowrap">
              {label}
            </span>
          )}
          <a
            href={`#${id}`}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className={`block w-3 h-3 rounded-full border-2 transition-all duration-200 ${
              active === id
                ? 'bg-phosphor border-phosphor shadow-glow-green'
                : 'border-ghost hover:border-phosphor'
            }`}
            aria-label={label}
          />
        </div>
      ))}
    </nav>
  )
}
