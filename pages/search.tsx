import TitleBanner from '../components/TitleBanner'
import Card from '../components/Card'
import Search from '../components/Search'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import PageCount from '../components/PageCount';
import DrawerComponent from '../components/Drawer';

export default function SearchPage() {
    type Data = {
        id: number;
        vote_average: number;
        poster_path: string;
        backdrop_path: string;
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

    const [movie, setMovie] = useState("");
    const handleChange = (e: any) => {
        setMovie(e.target.value)
    }

    const [searchedMovies, setSearchedMovies] = useState<Data[]>([]);
    const getSearchedMovies = async () => {
        const res: any = await axios.get
            (`https://api.themoviedb.org/3/search/movie?api_key=0bae2b774ae975ea338f73141added57&language=en-US&page=${pageNo}&include_adult=true&query=${movie}`);
        setSearchedMovies(res?.data.results)
    };


    const handleSearch = () => {
        if (movie.length !== 0) {
            getSearchedMovies()
        }
    }

    useEffect(() => {
        if (movie.length !== 0) {
            getSearchedMovies()
        }
    }, [pageNo])

    const [movieId, setMovieId] = useState<number>();
    const showDetails = (movieId: any) => {
        toggleDrawer()
        setMovieId(movieId)
    }


    return (
        <>
            <div className='py-4 px-8' >
                <Search onChange={(e: any) => handleChange(e)} onClick={handleSearch} value={movie} />
                <TitleBanner title="Search Results" />
                <div className='flex w-full flex-wrap' >
                    {searchedMovies?.map((movies) => {
                        return <Card key={movies?.id} data={movies} search onClick={() => {
                            showDetails(movies.id)
                        }} />
                    })}
                </div>
                <PageCount onClick={(number: any) => changePageNo(number)} pageNo={pageNo} />
                <DrawerComponent isOpen={isOpen} onClose={toggleDrawer} movieId={movieId} />
            </div>
        </>
    )
}
