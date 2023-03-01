import React, { useState } from "react";
import { BiCodeCurly } from "react-icons/bi"
import { AiOutlineCopy } from "react-icons/ai"
import { UrlApi } from "../api/api"

export default function Home() {
    const [url, setUrl] = useState("");
    const handleChange = (e: any) => {
        setUrl(e.target.value)
    }

    const [shortenUrl, setShortenUrl] = useState("");
    const [originalUrl, setOriginalUrl] = useState("");
    const createUrl = async () => {
        const res: any = await UrlApi.post(`/`, { originalUrl: url });
        setShortenUrl(res?.data?.data?.shortUrl?.shortUrl)
        setOriginalUrl(res?.data?.data?.originalUrl)
    };

    const onSubmit = async (e: any) => {
        e.preventDefault()
        createUrl()
    }

    const [tooltip, setToolTip] = useState<boolean>(false)
    const handleTooltipOpen = () => {
        setToolTip(true);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_WEB_URL}/${shortenUrl}`);
        setInterval(() => {
            setToolTip(false)
        }, 2000);
    };

    return (
        <>
            <div className="font-body font-thin w-full bg-sea-green-400 min-h-screen text-white ">
                <div className=" container mx-auto md:px-64 px-6 flex flex-col items-center justify-between  w-full bg-sea-green-400 min-h-screen ">
                    <div className="w-full mt-32 " >
                        <h1 className="text-6xl text-center  mb-6 ">Short URL</h1>
                        <h1 className="text-4xl text-center mb-4">Paste the URL to be shortened</h1>

                        <form className='flex items-center relative mb-4 w-full my-10 ' onSubmit={onSubmit} >
                            <input
                                type={"url"}
                                className={`w-full border-2 rounded-full py-2 pl-10 border-white focus:outline-none bg-sea-green-400 text-white placeholder-white  `}
                                placeholder='Enter your link here...'
                                value={url}
                                onChange={handleChange}
                                required
                            />
                            <BiCodeCurly size={"20"} className='absolute left-3' />
                            <button type="submit" className={` border-2 rounded-full py-2 bg-white text-sea-green-400 text-center absolute right-0 bg-fern-400 w-32 cursor-pointer`}
                            >Shorten Url</button>
                        </form>
                        {shortenUrl &&
                            <div className="text-center bg-white text-sea-green-400 py-3 px-4 rounded-full flex items-center justify-center text-xl font-medium my-6">
                                <p className="mr-2" >This is your Shortened URL :  <a href={originalUrl} target="/_blank" > {`${process.env.NEXT_PUBLIC_WEB_URL}/${shortenUrl}`} </a> </p>
                                <span className="cursor-pointer relative" onClick={() => {
                                    handleTooltipOpen()
                                    handleCopy()
                                }}  >
                                    <span className={`absolute bg-gray-500 text-sm text-white rounded-full w-20 h-6 -top-3 ${!tooltip && "hidden"} `} >Copied !</span>
                                    <AiOutlineCopy size={25} />
                                </span>
                            </div>}
                        <p className="text-center my-6" > This url shortner helps you to shorten a URL or reduce a link</p>
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

