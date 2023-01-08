import { Inter } from '@next/font/google'
import Layout from '../components/Layout'
import TitleBanner from '../components/TitleBanner'
import Card from '../components/Card'

import React, { useState, useEffect } from "react";
import { MovieApi } from '../api/api';
import PageCount from '../components/PageCount';
import DrawerComponent from '../components/Drawer';

export default function NewMovies() {
    type Data = {
        id: number;
        vote_average: number;
        poster_path: string;
        title: string;
        overview: string;
        release_date: string;
        original_language: string
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };


    const [pageNo, setPageNo] = useState<number>(1);
    const changePageNo = (number: any) => {
        setPageNo(number)
    }

    const [latestMovies, setLatestMovies] = useState<Data[]>([]);
    const getLatestMovies = async () => {
        const res: any = await MovieApi.get(`upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${pageNo}`);
        setLatestMovies(res?.data.results)
    };

    useEffect(() => {
        getLatestMovies()
    }, [pageNo])


    const [movieId, setMovieId] = useState<number>();
    const showDetails = (movieId: any) => {
        toggleDrawer()
        setMovieId(movieId)
    }

    return (
        <>
            <Layout >
                <div className='py-4 px-4' >
                    <TitleBanner title="New Movies" url="/new-movies" />
                    <div className='flex w-full flex-wrap ' >
                        {latestMovies?.map((movies) => {
                            return <Card key={movies.id} data={movies}
                                onClick={() => {
                                    showDetails(movies.id)
                                }}
                            />
                        })}
                    </div>
                    <PageCount onClick={(number: any) => changePageNo(number)} pageNo={pageNo} />
                </div>
                <DrawerComponent isOpen={isOpen} onClose={toggleDrawer} movieId={movieId} />
            </Layout>
        </>
    )
}
