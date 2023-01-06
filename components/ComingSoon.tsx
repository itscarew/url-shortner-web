import moment from 'moment'
import Image from 'next/image'
import Button from './Button'

export default function ComingSoonComponent({ data }: any) {
    return (
        <>
            <div className='px-12 my-12' >
                <div className='flex items-center justify-between w-full mb-4'  >
                    <div className='w-6/12 relative overflow-hidden pr-8' >
                        <Image
                            className='transform transition duration-300 hover:scale-105 '
                            src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                            alt="Picture of the author"
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className='w-6/12 p-2 flex flex-col justify-between '>
                        <h3 className='text-3xl text-fern-400 font-black my-3'>Coming Soon !</h3>
                        <h3 className='text-5xl font-black'> {data?.title} </h3>
                        <h4 className='text-base my-2'>
                            {data?.overview}
                        </h4>
                        <h4 className='text-base font-bold' >Release Date</h4>
                        <h4 className='text-sm'>{moment(data?.release_date).format("ll")}</h4>
                        <Button className=' bg-fern-400  text-sm mt-3 h-10' > More Details </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
