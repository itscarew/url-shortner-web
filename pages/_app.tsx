import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from "react";
import AppContext from '../components/AppContext';
import { Alert, NotifyType } from '../components/Alert';

export default function App({ Component, pageProps }: AppProps) {

  type Data = {
    id: number;
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    overview: string;
    release_date: string;
  };
  const [watchList, setWatchList] = useState<Data[]>([])
  const [theme, setTheme] = useState(false)

  const addWatchList = (movie: any) => {
    const checkWatchList = watchList.find((watchList) => {
      return watchList.id === movie.id
    })
    if (!checkWatchList) {
      const updatedArray = [...watchList, movie]
      setWatchList(updatedArray)
      Alert({ title: "Added to WatchList", theme: theme })
    } else {
      Alert({ title: "Already added to WatchList", type: NotifyType.info, theme: theme })
    }
  }

  const removeWatchList = (id: number) => {
    const updatedArray = watchList.filter((watchList) => {
      return watchList.id !== id
    })
    setWatchList(updatedArray)
  }

  return (<AppContext.Provider
    value={{
      watchListState: { watchList, addWatchList, removeWatchList },
      themeState: { theme, setTheme }
    }}>
    <Component {...pageProps} />
  </AppContext.Provider>)

}
