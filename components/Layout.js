import Navbar from './Navbar'
import SocialsBar from './SocialsBar'
import Container from './Container'
import About from './About'

const Layout = ({ children }) => {
  return (
    <body className="bg-ash">
      <div className="container mx-auto w-4/5 h-screen pt-20">
        <Navbar />
        <Container>
          <About />
        </Container>
        <SocialsBar />
      </div>
    </body>
  )
}

export default Layout
