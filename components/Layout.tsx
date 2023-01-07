import AppHead from '../components/Head'
import AppContext from './AppContext'
import DrawerComponent from './Drawer'
import Footer from './Footer'
import NavBar from './NavBar'
import RightNav from './RightNav'
import React, { useContext } from "react";

export default function Layout({ children }: any) {
    const { themeState }: any = useContext(AppContext)
    return (
        <>
            <AppHead />
            <div className={`${themeState.theme ? "bg-black text-white" : ""}`}  >
                <div className={`flex min-h-screen font-body mx-auto ${themeState.theme ? "bg-black text-white" : ""}`} style={{ width: "1490px" }}>
                    <NavBar />
                    <div className='flex-1' >
                        {children}
                    </div>
                    <RightNav />
                </div>
                <Footer />
            </div>
        </>
    )
}
