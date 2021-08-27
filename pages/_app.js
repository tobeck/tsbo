import Layout from '../components/Layout'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <>
                <main className='container'>
                    <Component {...pageProps} />
                </main>
            </>
        </Layout>
    )
}

export default MyApp