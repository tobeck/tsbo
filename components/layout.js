import Footer from './footer'
import Navbar from './navbar'
import Meta from './meta'
import Container from './container'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Container>
        <Navbar />
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}
