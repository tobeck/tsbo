import Header from "./Header"
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Header />
            <div  className='container'>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/blog'>
                    <a>Blog</a>
                </Link>
            </div>
        </nav>
    )
}
