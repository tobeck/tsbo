import Layout from '../components/Layout'
import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <>
                <main>
                    <Component {...pageProps} />
                </main>
            </>
        </Layout>
    )
}

export default MyApp