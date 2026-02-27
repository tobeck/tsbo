import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function Intro() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-2xl">
        <h1>Tobias Becker</h1>
        <h2 className="mt-2 mb-6">
          <span className="text-coral">Tech Problem Poker</span> based in
          Stockholm.
        </h2>
        <p className="text-lg text-gray-mid leading-relaxed mb-8 max-w-xl">
          Experienced SRE/DevOps/Sysadmin/Lead with twenty years of experience
          in both on-prem and cloud based infrastructure. Passionate about
          problem solving, designing solutions for reliable and performant
          systems. Love working with people and finding ways to help foster
          personal development.
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <a
            href="#experiences"
            className="inline-block bg-coral text-white font-semibold px-6 py-3 rounded hover:bg-opacity-90 transition-colors text-sm"
          >
            View my work
          </a>
          <Link
            href="/blog"
            className="inline-block border-2 border-bistre text-bistre font-semibold px-6 py-3 rounded hover:bg-bistre hover:text-white transition-colors text-sm"
          >
            Read the blog
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.github.com/tobeck"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bistre hover:text-coral transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/tobias-becker-olsson-9a678252"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bistre hover:text-coral transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
        </div>
      </div>
    </section>
  )
}
