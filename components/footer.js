import Container from './container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-bistre text-white mt-20">
      <Container>
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-ash">
            &copy; {new Date().getFullYear()} Tobias Becker. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/tobias-becker-olsson-9a678252"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ash hover:text-coral transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://www.github.com/tobeck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ash hover:text-coral transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://www.instagram.com/tbeckero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ash hover:text-coral transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
