import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <div className='flex flex-row justify-end gap-2 text-sm font-bold text-bistre'>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/experiences'>
                    <a>Experiences</a>
                </Link>
                <Link href='/blog'>
                    <a>Blog</a>
                </Link>
            </div>
        </nav>
    )
}
