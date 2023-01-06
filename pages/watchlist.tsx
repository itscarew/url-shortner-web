import Layout from '../components/Layout'
import TitleBanner from '../components/TitleBanner'
import Card from '../components/Card'

export default function WatchList() {
    return (
        <>
            <Layout >
                <div className='py-4 px-4' >
                    <TitleBanner title="WatchList" url="/watchlist" />
                    <div className='flex w-full' >
                        <Card watchlist />
                    </div>
                </div>
            </Layout>
        </>
    )
}
