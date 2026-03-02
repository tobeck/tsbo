import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function Intro() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="max-w-2xl">
        <h1 className="text-lg md:text-2xl mb-4 glow-text text-phosphor">
          Tobias Becker
        </h1>
        <h2 className="text-xs md:text-sm mb-6 text-amber">
          Tech Problem Poker based in Stockholm
          <span className="animate-blink text-amber">_</span>
        </h2>
        <p className="text-base text-smoke leading-relaxed mb-8 max-w-xl">
          Experienced SRE/DevOps/Sysadmin/Lead with twenty years of experience
          in both on-prem and cloud based infrastructure. Passionate about
          problem solving, designing solutions for reliable and performant
          systems. Love working with people and finding ways to help foster
          personal development.
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <a
            href="#experience"
            className="inline-block border-2 border-phosphor text-phosphor font-mono font-semibold px-6 py-3 text-sm hover:bg-phosphor hover:text-midnight hover:shadow-glow-green transition-all"
          >
            View my work &darr;
          </a>
          <Link
            href="/blog"
            className="inline-block border-2 border-amber text-amber font-mono font-semibold px-6 py-3 text-sm hover:bg-amber hover:text-midnight hover:shadow-glow-amber transition-all"
          >
            Read the blog &rarr;
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://www.github.com/tobeck"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ghost hover:text-phosphor transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/tobias-becker-olsson-9a678252"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ghost hover:text-phosphor transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
        </div>
      </div>
    </section>
  )
}
