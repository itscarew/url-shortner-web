import moment from 'moment'
import Image from 'next/image'
import Button from './Button'

export default function SmallCard({ data }: any) {

    return (
        <>
            <div className='flex  w-full mb-4' style={{ height: "9rem" }}  >
                <div className='w-5/12  relative rounded-lg overflow-hidden ' >
                    <Image
                        src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                        alt="Picture of the author"
                        fill
                    />
                </div>
                <div className='w-7/12 p-2 flex flex-col justify-between '>
                    <div className='py-0'>
                        <h3 className='text-sm font-black'>{data?.title}</h3>
                        <h4 className='text-xs'> {moment(data?.release_date).format("ll")} </h4>
                    </div>
                    <h4 className='text-sm text-yellow-700 font-semibold' > <span className='font-black text-fern-400' >Rating :</span> {data?.vote_average}</h4>
                </div>
            </div>
        </>
    )
}
