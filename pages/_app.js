import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(fab)

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
