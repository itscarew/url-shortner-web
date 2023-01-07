import React, { useState, useEffect, useContext } from "react";
import "react-modern-drawer/dist/index.css";
import Image from 'next/image'
import moment from "moment";
import Button from "./Button";
import { MovieApi } from "../api/api";
import AppContext from "./AppContext";

export default function DetailsComponent({ movieId }: any) {
    const { watchListState }: any = useContext(AppContext)
    type Data = {
        id: number;
        vote_average: number;
        poster_path: string;
        backdrop_path: string;
        title: string;
        overview: string;
        release_date: string;
        original_language: string
        tagline: string
        genres: any
        budget: number
        revenue: number
        runtime: number
        imdb_id: string
        type: string
    };

    const [detail, setMovieDetail] = useState<Data>();
    const getMovieDetail = async () => {
        const res: any = await MovieApi.get(`${movieId}?api_key=0bae2b774ae975ea338f73141added57&language=en-US&page=1`);
        setMovieDetail(res?.data)
    };

    const [videoDetail, setVideoDetail] = useState([]);
    const getWatch = async () => {
        const res: any = await MovieApi.get(`${movieId}/videos?api_key=0bae2b774ae975ea338f73141added57&language=en-US&page=1`);
        setVideoDetail(res.data.results)
    };

    const Trailer: any = videoDetail?.find((video: any) => {
        return video.type === "Trailer"
    })


    const [watchProviders, setWatchProviders] = useState<any>([]);
    const getWatchProviders = async () => {
        const res: any = await MovieApi.get(`${movieId}/watch/providers?api_key=0bae2b774ae975ea338f73141added57&language=en-US&page=1&dataSource="JustWatch`);
        setWatchProviders(res?.data?.results)
    };

    useEffect(() => {
        if (movieId) {
            getMovieDetail()
            getWatch()
            getWatchProviders()
        }
    }, [movieId])


    const timeConvert = (num: any) => {
        var hours = Math.floor(num / 60);
        var minutes = num % 60;
        return `${hours} hours ${minutes} minutes`;
    }

    const numberWithCommas = (x: any) => {
        return Number(x).toLocaleString("en-US", {
            minimumFractionDigits: 2,
        });
    }

    return (
        <>
            <div>
                <div className={`w-full`} style={{ height: "30rem" }} >
                    <iframe allowFullScreen
                        allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        title={detail?.title}
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${Trailer?.key}?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fwww.showdex.xyz&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1`}
                        id="widget2">
                    </iframe>
                </div>


                <div className=" my-6" >
                    <div className="mx-12" >
                        <h3 className='text-5xl font-black'> {detail?.title}</h3>
                        <h3 className='text-xl   my-3'> {detail?.tagline} </h3>

                        <h3 className='text-x my-3'> <span className="font-black" >Genre(s) : </span>
                            {detail?.genres.map((genre: any) => {
                                return <span key={genre?.id} className="mr-1" > {genre.name} </span>
                            })} </h3>
                        <h4 className='text-base my-2'>
                            <span className="font-black" >Overview :</span>  {detail?.overview}
                        </h4>

                        <h4 className='text-base ' > <span className="font-black" >Release Date :</span> {moment(detail?.release_date).format("ll")} </h4>
                        <h4 className='text-base my-2'>
                            <span className="font-black" >Rating :</span> {detail?.vote_average}
                        </h4>
                        <h4 className='text-base my-2'>
                            <span className="font-black" >Runtime :</span> {timeConvert(detail?.runtime)}
                        </h4>
                        <h4 className='text-base my-2'>
                            <span className="font-black" >Box Office :</span> &#x24;{numberWithCommas(detail?.revenue)}
                        </h4>
                        <h4 className='text-base my-2'>
                            <span className="font-black" >Budget :</span> &#x24;{numberWithCommas(detail?.budget)}
                        </h4>

                        <h4 className='text-base my-2 cursor-pointer mb-6'>
                            <a target={"/_blank"} href={watchProviders?.US?.link} className="text-green-500 font-black underline" >JustWatch </a>
                        </h4>
                    </div>

                    <div className="w-full flex items-center justify-center overflow-hidden relative" style={{ height: "30rem" }} >
                        <Image
                            style={{ objectFit: "cover" }}
                            className='transform transition duration-300 hover:scale-105'
                            src={`https://image.tmdb.org/t/p/original${detail?.backdrop_path}`}
                            alt={`${detail?.title}`}
                            fill
                        />
                        <Image
                            style={{ objectFit: "cover" }}
                            className=' z-10'
                            src={`https://image.tmdb.org/t/p/original${detail?.poster_path}`}
                            alt={`${detail?.title}`}
                            width={200}
                            height={200}
                        />
                    </div>


                    <div className="px-6 py-4" >
                        <Button className=' bg-fern-400 text-sm mt-3  h-10 w-full' onClick={() =>
                            watchListState.addWatchList(
                                {
                                    id: detail?.id,
                                    poster_path: detail?.poster_path,
                                    title: detail?.title,
                                    release_date: moment(detail?.release_date).format("ll")
                                }
                            )} > Add to watchlist </Button>
                    </div>
                </div>
            </div>
        </>
    )
}



