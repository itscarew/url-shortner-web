type Data = {
    onClick: any;
    pageNo: any
};

export default function PageCount({ onClick, pageNo }: Partial<Data>) {
    const routes = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
    ]

    const checkPage = routes?.find((route) => {
        return route.number === pageNo
    })

    return (
        <>
            <div className="w-full flex items-center justify-center my-2" >
                <p>Page :</p>
                {routes.map((route: any) => {
                    return <div
                        className={`w-10 h-10 rounded-full mx-1 border-2 border-fern-400 flex items-center justify-center
                         text-fern-400 cursor-pointer hover:bg-fern-400 
                         hover:text-white ${checkPage?.number === route.number && "bg-fern-400 text-gray-100"} `}
                        key={route.number}
                        onClick={() => {
                            onClick(route.number)
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                        }}>
                        {route.number}
                    </div>
                })}
            </div>
        </>
    )
}











