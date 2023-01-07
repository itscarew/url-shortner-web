import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"
import { CiSearch } from "react-icons/ci"

export default function Search({ onChange, onClick, value }: any) {
    const router = useRouter()
    const [movie, setMovie] = useState("");
    const handleChange = (e: any) => {
        setMovie(e.target.value)
    }

    useEffect(() => {
        if (movie.length > 0 && router.pathname !== "/search") {
            router.push("/search")
        }
    }, [movie, router])
    return (
        <>
            <div className='flex items-center relative mb-4' >
                <input
                    type={"text"}
                    className="w-full border-2 rounded-full py-2 pl-10 border-gray-300 focus:outline-none  focus:border-fern-400 text-black"
                    placeholder='Search Movie...'
                    value={value || movie}
                    onChange={onChange || handleChange}
                />
                <CiSearch size={"20"} className='absolute left-3' />
                {router.pathname === "/search" &&
                    <div className={` border-2 rounded-full py-2 text-white text-center absolute right-0 bg-fern-400 w-32 cursor-pointer`}
                        onClick={onClick} >Search</div>}
            </div>
        </>
    )
}









