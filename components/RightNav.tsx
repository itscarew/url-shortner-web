import Button from './Button'
import SmallCard from './SmallCard'
import { useRouter } from "next/router"
import Search from './Search'
import React, { useState, useEffect } from "react";
import { MovieApi } from '../api/api';

export default function RightNav() {
    const router = useRouter()
    type Data = {
        id: number;
        vote_average: number;
        poster_path: string;
        title: string;
        overview: string;
        release_date: React.ReactNode;
    };

    const [latestMovies, setLatestMovies] = useState<Data[]>([]);
    const getLatestMovies = async () => {
        const res: any = await MovieApi.get(`upcoming?api_key=0bae2b774ae975ea338f73141added57&language=en-US&page=1`);
        setLatestMovies(res?.data.results)
    };


    const [popularMovies, setPopularMovies] = useState<Data[]>([]);
    const getPopularMovies = async () => {
        const res: any = await MovieApi.get(`popular?api_key=0bae2b774ae975ea338f73141added57&language=en-US&page=1`);
        setPopularMovies(res?.data.results)
    };

    useEffect(() => {
        getLatestMovies()
        getPopularMovies()
    }, [])

    return (
        <>
            <nav className='w-80 pt-14 px-8 border-l-2 border-gray-400 '>
                <Search />
                <h1 className='font-black mb-4 ' >New Movies</h1>
                <div className='flex flex-col ' >
                    {latestMovies?.slice(0, 3).map((movies) => {
                        return <SmallCard key={movies.id} data={movies} />
                    })}
                </div>
                <Button className='bg-fern-500 text-sm h-10  w-full' onClick={() => router.push("/new-movies")}  > See More </Button>

                <h1 className='font-black mb-4 mt-12 ' >Popular Movies</h1>
                <div className='flex flex-col ' >
                    {popularMovies?.slice(0, 3).map((movies) => {
                        return <SmallCard key={movies.id} data={movies} />
                    })}
                </div>
                <Button className='bg-fern-500 text-sm h-10  w-full mb-8' onClick={() => router.push("/trending")}  > See More </Button>
            </nav>
        </>
    )
}









