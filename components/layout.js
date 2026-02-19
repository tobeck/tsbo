import Footer from './footer'
import Navbar from './navbar'
import Meta from './meta'
import Container from './container'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen flex flex-col">
        <Container>
          <Navbar />
        </Container>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
