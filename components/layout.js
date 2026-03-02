import Footer from './footer'
import Meta from './meta'
import DotNav from './dot-nav'

export default function Layout({ children, showDotNav }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-midnight">
        {showDotNav && <DotNav />}
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
