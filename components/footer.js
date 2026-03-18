import Container from './container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer id="contact" className="py-16 md:py-24 border-t border-terminal">
      <Container>
        <h1 className="mb-8 glow-text text-phosphor">Get in touch</h1>
        <p className="text-ghost mb-8 max-w-lg">
          Interested in working together, have a question, or just want to say
          hello? Feel free to reach out.
        </p>
        <div className="flex items-center gap-6 mb-12">
          <a
            href="mailto:tobias@tsbo.one"
            className="text-ghost hover:text-phosphor transition-colors"
          >
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </a>
          <a
            href="https://www.github.com/tobeck"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ghost hover:text-phosphor transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/tsbo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ghost hover:text-phosphor transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
        </div>
        <p className="text-xs text-ghost font-mono">
          &copy; {new Date().getFullYear()} Tobias Becker. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
