import React, { useState } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineHome } from "react-icons/ai";
import { CiViewList } from "react-icons/ci"
import { RiMovie2Line, RiMovie2Fill } from "react-icons/ri"
import { BiTrendingUp } from "react-icons/bi"
import { MdOutlineLocalMovies, MdOutlineDarkMode } from "react-icons/md"
import { BsLightbulb } from "react-icons/bs"
import { Switch } from "@headlessui/react";

export default function NavBar() {
    const [enabled, setEnabled] = useState(false);
    const router = useRouter();

    const routes = [
        { name: "Home", icon: <AiOutlineHome size={"1.4rem"} />, href: "/" },
        { name: "New Movies", icon: <RiMovie2Line size={"1.4rem"} />, href: "/new-movies" },
        { name: "Trending", icon: <BiTrendingUp size={"1.4rem"} />, href: "/trending" },
        { name: "Top Rated", icon: <MdOutlineLocalMovies size={"1.4rem"} />, href: "/top-rated" },
        { name: "Watchlist", icon: <CiViewList size={"1.4rem"} />, href: "/watchlist" },
    ]
    return (
        <nav className='w-72 pt-14 border-r-2 border-gray-400'>
            <div className=' text-2xl font-black flex items-center ml-14 text-fern-500'  > <RiMovie2Fill size={"2.4rem"} /> <h1 className='ml-3'> New Movie </h1></div>

            <div className=' pt-8 ml-14'>
                <h1 className='text-lg text-gray-400 mb-4 '>MENU </h1>
                <div>
                    {routes.map((route, index) => {
                        return (
                            <div key={index}>
                                <Link className={`flex items-center py-2 my-2 border-r-4 ${router.pathname == route.href ? "border-fern-600 font-black text-fern-500" : "border-white"} `} href={route.href}>
                                    {route.icon} <div className='ml-4'>{route.name} </div>
                                </Link>
                            </div>)
                    })}
                </div>
            </div>

            <div className=' pt-8 ml-14'>
                <h1 className='text-lg text-gray-400 mb-4 '>OTHER </h1>
                <div className="flex items-center">
                    <div className="mr-2">
                        <BsLightbulb size="1.3rem" />
                    </div>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? "bg-fern-400" : "bg-gray-200"
                            } relative inline-flex items-center h-7 rounded-full w-16`}
                    >
                        <span className="sr-only">Change Theme</span>
                        <span
                            className={`${enabled ? "translate-x-10" : "translate-x-1"
                                } inline-block w-5 h-5 transform bg-white rounded-full transition ease-in-out duration-200`}
                        />
                    </Switch>
                    <div className="ml-2">
                        <MdOutlineDarkMode size="1.3rem" />
                    </div>
                </div>

            </div>

        </nav>
    )
}
