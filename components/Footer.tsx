

export default function Footer() {
    return (
        <>
            <footer className=' bg-fern-600  h-60 flex flex-col justify-center items-center' >
                <h1 className='text-5xl font-bold text-white'> Trustee daily movie updates </h1>
                <p className='text-base text-white my-4' > &copy; {new Date().getFullYear()} Olaonipekun Carew </p>
            </footer>
        </>
    )
}
