import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
