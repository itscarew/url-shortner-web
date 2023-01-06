import AppHead from '../components/Head'
import DrawerComponent from './Drawer'
import Footer from './Footer'
import NavBar from './NavBar'
import RightNav from './RightNav'

export default function Layout({ children }: any) {
    return (
        <>
            <AppHead />

            <div className='flex  min-h-screen font-body mx-auto' style={{ width: "1490px" }}>
                <NavBar />
                <div className='flex-1' >
                    {children}
                </div>
                <RightNav />
            </div>
            <Footer />
        </>
    )
}
