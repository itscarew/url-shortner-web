import { BsArrowRightShort } from "react-icons/bs"
import Link from 'next/link'

export default function TitleBanner({ title, showIcon, url = "/" }: any) {
    return (
        <>
            <div>
                <Link href={url} className='flex items-center text-xl py-3' > <h1>{title} </h1> {showIcon && <BsArrowRightShort />}  </Link>
            </div>
        </>
    )
}









