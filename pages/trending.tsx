import Layout from '../components/Layout'
import TitleBanner from '../components/TitleBanner'
import Card from '../components/Card'
import React, { useState, useEffect } from "react";
import { MovieApi } from '../api/api';
import PageCount from '../components/PageCount';
import DrawerComponent from '../components/Drawer';
import { useRouter } from 'next/router';

export default function Trending() {
    const router = useRouter()
    type Data = {
        id: number;
        vote_average: number;
        poster_path: string;
        title: string;
        overview: string;
        release_date: React.ReactNode;
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

    const [trendingMovies, setTrendingMovies] = useState<Data[]>([]);
    const getTrendingMovies = async () => {
        const res: any = await MovieApi.get(`popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${pageNo}`);
        setTrendingMovies(res?.data.results)
    };

    useEffect(() => {
        getTrendingMovies()
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
                    <TitleBanner title="Trending Movies" url="/trending" />
                    <div className='flex w-full flex-wrap' >
                        {trendingMovies?.map((movies) => {
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
