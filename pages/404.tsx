import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai"

export default function NotFound() {
    return (
        <>
            <div className="font-body font-thin w-full bg-sea-green-400 min-h-screen text-white ">
                <div className=" container mx-auto md:px-64 px-6 flex flex-col items-center justify-between  w-full bg-sea-green-400 min-h-screen ">
                    <div className="mt-48 " >
                        <h1 className="text-center text-5xl" >  Who are you kidding ? </h1>
                        <h1 className="text-center text-5xl  flex mt-12" > <Link href={`/`}>   <AiOutlineArrowLeft /> </Link> <Link href={`/`}> <p className="ml-2" >  Go get a legit url bozo  </p> </Link> </h1>
                    </div>
                    <footer className='w-full bg-fern-600  h-60 flex flex-col justify-center items-center ' >
                        <h1 className='text-5xl font-bold text-white'> No more long Urls </h1>
                        <p className='text-base text-white my-4' > &copy; {new Date().getFullYear()} Olaonipekun Carew </p>
                    </footer>
                </div>
            </div>
        </>
    )
}

