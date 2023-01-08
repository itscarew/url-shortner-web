import React, { useState, useEffect, useContext } from "react";
import Button from '../components/Button'
import Card from '../components/Card'
import ComingSoonComponent from '../components/ComingSoon'
import Layout from '../components/Layout'
import TitleBanner from '../components/TitleBanner'
import { MovieApi } from "../api/api"
import Image from 'next/image'
import DrawerComponent from "../components/Drawer";
import { useRouter } from "next/router";
import AppContext from "../components/AppContext";
import moment from "moment";

export default function Home() {
  const { watchListState }: any = useContext(AppContext)
  type Data = {
    id: number;
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    overview: string;
    release_date: string;
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [nowPlaying, setNowPlaying] = useState<Data[]>([]);
  const nowPlayingMovies = async () => {
    const res: any = await MovieApi.get(`now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`);
    setNowPlaying(res?.data.results)
  };

  const [trendingMovies, setTrendingMovies] = useState<Data[]>([]);
  const getTrendingMovies = async () => {
    const res: any = await MovieApi.get(`popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`);
    setTrendingMovies(res?.data.results)
  };

  const [comingSoon, setComingSoon] = useState<Data>();
  const getComingSoon = async () => {
    const res: any = await MovieApi.get(`646389?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`);
    setComingSoon(res?.data)
  };


  useEffect(() => {
    getTrendingMovies()
    nowPlayingMovies()
    getComingSoon()
  }, [])

  const [movieId, setMovieId] = useState<number>();
  const showDetails = (movieId: number) => {
    toggleDrawer()
    setMovieId(movieId)
  }

  return (
    <>
      <Layout>
        <div className='w-full'>
          <div className='w-full flex flex-col justify-end relative bg-slate-800 overflow-hidden' style={{ height: "30rem" }} >
            <Image
              style={{ objectFit: "cover" }}
              src={`https://image.tmdb.org/t/p/original${nowPlaying[0]?.backdrop_path}`}
              alt="Picture of the author"
              fill
            />
            <div className='relative w-full text-white  py-5 px-4' style={{ background: `rgba(0, 0, 0, 0.4)` }} >
              <h1 className='text-4xl uppercase font-black'>{nowPlaying[0]?.title} </h1>
              <p> Action, Adventure, Sci-Fi </p>
              <p className='text-sm' >{nowPlaying[0]?.vote_average}</p>
              <p className='text-xs'>Sept 15, 2022</p>
              <div className='flex my-2 '>
                <Button className=' bg-fern-500 h-10'
                  onClick={() => {
                    showDetails(nowPlaying[0].id)
                  }} > Watch Trailer
                </Button>
                <Button className=' ml-3 h-10 ' style={{ background: `rgba(255,255,255, 0.6)` }}
                  onClick={() =>
                    watchListState.addWatchList(
                      {
                        id: nowPlaying[0]?.id,
                        poster_path: nowPlaying[0]?.poster_path,
                        title: nowPlaying[0]?.title,
                        release_date: moment(nowPlaying[0]?.release_date).format("ll")
                      }
                    )} > Add to Watchist +
                </Button>
              </div>
            </div>
          </div>

          <div className='py-8 px-4' >
            <TitleBanner title="Trending Movies" url="/trending" showIcon />
            <div className='flex w-full flex-wrap ' >
              {trendingMovies?.slice(0, 12).map((movies) => {
                return <Card key={movies?.id} data={movies}
                  onClick={() => {
                    showDetails(movies.id)
                  }}
                />
              })}

            </div>
          </div>
          <div>
            <ComingSoonComponent data={comingSoon} />
          </div>
          <DrawerComponent isOpen={isOpen} onClose={toggleDrawer} movieId={movieId} />
        </div>
      </Layout>
    </>
  )
}
