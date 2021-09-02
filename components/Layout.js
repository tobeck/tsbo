import Navbar from "./Navbar"
import SocialsBar from "./SocialsBar"

const Layout = ({children}) => {
    return (
        <body className='bg-ash'>
            <div className='container mx-auto w-4/5 h-screen pt-20'>
                    <Navbar />
                <div className='flex flex-row h-4/5'>
                    <div className='self-end'><SocialsBar /></div>
                    <div className='ml-40 mt-20 mr-80'>{children}</div>
                </div>
            </div>
        </body>
    )
}

export default Layout