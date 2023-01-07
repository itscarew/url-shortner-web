import Layout from '../components/Layout'
import TitleBanner from '../components/TitleBanner'
import Card from '../components/Card'
import { useContext, useState } from "react"
import AppContext from '../components/AppContext'
import DrawerComponent from '../components/Drawer'
import { RiMovieLine } from "react-icons/ri"

export default function WatchList() {
    const { watchListState }: any = useContext(AppContext)
    const watchList: [] = watchListState?.watchList

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const [movieId, setMovieId] = useState<number>();
    const showDetails = (movieId: number) => {
        toggleDrawer()
        setMovieId(movieId)
    }
    return (
        <>
            <Layout >
                <div className='py-4 px-4' >
                    <TitleBanner title="WatchList" url="/watchlist" />
                    <div className='flex w-full flex-wrap'>

                        {watchList.length < 1 ? <div className="flex w-full items-center justify-center text-fern-400" style={{ height: "68vh" }} >
                            <RiMovieLine size={150} />
                        </div> :
                            <>
                                {watchList.map((wl: any) => {
                                    return <Card
                                        key={wl?.id}
                                        data={wl}
                                        onClick={() => {
                                            showDetails(wl.id)
                                        }}
                                        watchlist
                                    />
                                })}
                            </>}
                    </div>
                </div>
                <DrawerComponent isOpen={isOpen} onClose={toggleDrawer} movieId={movieId} />
            </Layout>
        </>
    )
}
