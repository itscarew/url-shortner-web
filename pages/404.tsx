import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai"

export default function NotFound() {

    return (
        <>
            <div className="font-body font-thin w-full bg-sea-green-400 min-h-screen text-white ">
                <div className=" container mx-auto md:px-64 px-6 flex flex-col items-center justify-between  w-full bg-sea-green-400 min-h-screen ">
                    <h1 className="mt-32 text-center text-5xl" >  This url doesnt exist </h1>
                    <h1 className="text-center text-5xl  flex " > <AiOutlineArrowLeft /> <Link href={`/`} >   <p className="ml-2" >  Back to home bozo 😂 </p> </Link> </h1>
                    <footer className='w-full bg-fern-600  h-60 flex flex-col justify-center items-center ' >
                        <h1 className='text-5xl font-bold text-white'> No more long Urls </h1>
                        <p className='text-base text-white my-4' > &copy; {new Date().getFullYear()} Olaonipekun Carew </p>
                    </footer>
                </div>
            </div>
        </>
    )
}

