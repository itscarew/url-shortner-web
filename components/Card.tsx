import Button from './Button'
import { BsTrash } from "react-icons/bs"
import moment from 'moment'
import Image from 'next/image'

export default function Card({ watchlist, search, data, onClick }: any) {
    const titleLength = (text: string) => {
        if (text?.length > 24) {
            return `${text?.slice(0, 24)}....`
        }
        else {
            return text
        }
    }

    return (
        <>
            <div className={`${search ? "  w-1/6" : "w-1/4"}  p-2`} >
                <div className='flex flex-col mb-4' >
                    <div className='relative rounded-lg overflow-hidden' style={{ height: "17rem" }}>
                        <Image
                            style={{ objectFit: "cover" }}
                            className='transform transition duration-300 hover:scale-105'
                            src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                            alt={data?.title}
                            fill
                        />
                        {!watchlist &&
                            <div className='absolute top-2 right-2' >
                                <Button className='h-10 ml-3 text-2xl' style={{ background: `rgba(255,255,255, 0.6)` }}> + </Button>
                            </div>}
                    </div>

                    <div className='flex flex-col h-40 justify-between'>
                        <div className='py-0'>
                            <div className='flex justify-between items-baseline ' >
                                <h3 className='text-xl font-black'> {titleLength(data?.title)} </h3>
                                <h4 className='text-sm font-semibold text-yellow-700'> {data?.vote_average} </h4>
                            </div>
                            <h4 className='text-sm'> {moment(data?.release_date).format("ll")} </h4>
                        </div>
                        <Button className={`${watchlist ? "bg-red-500" : "bg-fern-500"} h-10 my-2`} onClick={onClick} > {watchlist ? <BsTrash /> : "More Details"}  </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
