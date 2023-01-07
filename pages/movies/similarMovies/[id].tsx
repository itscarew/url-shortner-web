import React, { useState, useEffect } from "react";
import { MovieApi } from "../../../api/api";
import Card from "../../../components/Card";
import DrawerComponent from "../../../components/Drawer";
import Layout from "../../../components/Layout";
import PageCount from "../../../components/PageCount";
import TitleBanner from "../../../components/TitleBanner";
import { useRouter } from "next/router";

export default function NewMovies() {
    const router = useRouter()
    const { id } = router.query

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

    const [detail, setMovieDetail] = useState<Data>();
    const getMovieDetail = async () => {
        const res: any = await MovieApi.get(`${id}?api_key=0bae2b774ae975ea338f73141added57&language=en-US&page=1`);
        setMovieDetail(res?.data)
    };

    const [similarMovies, setSimilarMovies] = useState<Data[]>([]);
    const getsimilartMovies = async () => {
        const res = await MovieApi.get(`${id}/similar?api_key=0bae2b774ae975ea338f73141added57&language=en-US&page=${pageNo}`);
        setSimilarMovies(res?.data.results)
    };

    useEffect(() => {
        getsimilartMovies()
        getMovieDetail()
    }, [pageNo, id])


    const [movieId, setMovieId] = useState<number>();
    const showDetails = (movieId: any) => {
        toggleDrawer()
        setMovieId(movieId)
    }

    return (
        <>
            <Layout>
                <div className='py-4 px-4' >
                    <TitleBanner url="/new-movies" >
                        <p> Movies Similar to <span className="font-black">{detail?.title}</span></p>
                    </TitleBanner>
                    <div className='flex w-full flex-wrap ' >
                        {similarMovies?.map((movies) => {
                            return <Card key={movies.id} data={movies}
                                onClick={() => {
                                    showDetails(movies.id)
                                }}
                                chooseSimilarMovies={() => {
                                    router.push(`/movies/similarMovies/${movies.id}`)
                                }}
                                watchList={() => {
                                    console.log("Added To WatchList")
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
